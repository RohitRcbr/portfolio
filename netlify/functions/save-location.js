import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  // Only allow POST
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const { latitude, longitude, accuracy } = body;

    // Validate
    if (typeof latitude !== "number" || typeof longitude !== "number") {
      return new Response(JSON.stringify({ error: "Invalid coordinates" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Get the persistent store (site-wide, survives deploys)
    const store = getStore("locations");

    // Read existing entries
    const existing = (await store.get("entries", { type: "json" })) || [];

    // Build new entry with server timestamp
    const entry = {
      id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
      latitude,
      longitude,
      accuracy: accuracy ?? null,
      timestamp: new Date().toISOString(),
      ip: context.ip || "unknown",
    };

    existing.push(entry);

    // Save back — overwrites the "entries" key
    await store.setJSON("entries", existing);

    return new Response(JSON.stringify({ success: true, entry }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error saving location:", err);
    return new Response(JSON.stringify({ error: "Failed to save location" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};