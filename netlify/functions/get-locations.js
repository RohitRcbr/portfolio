import { getStore } from "@netlify/blobs";

export default async () => {
  const store = getStore("locations");
  const entries = (await store.get("entries", { type: "json" })) || [];

  return new Response(JSON.stringify(entries, null, 2), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};