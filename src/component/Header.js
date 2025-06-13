import { RiShakeHandsLine } from "@remixicon/react";
import Menu from "./Menu";
import {Navbar, Button, Nav, Container } from 'react-bootstrap';
export default function Header(){
    return (
           <header className="main-header">
      <div className="header-upper">
        <Container>
          <div className="header-inner d-flex align-items-center justify-content-between">
            {/* LOGO */}
            <div className="logo-outer">
              <div className="logo">
                <a href="index.html">
                  Logo
                </a>
              </div>
            </div>

            {/* NAVIGATION */}
            <Navbar expand="lg" className="nav-outer mx-auto">
              <Navbar.Brand className="d-lg-none">
                <a href="index.html">
                Logo
                </a>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="main-navbar" />
             <Menu/>
            </Navbar>

            {/* HIRE ME BUTTON */}
            <div className="menu-btns">
              <Button href="#contact" className="theme-btn">
                Hire Me <RiShakeHandsLine/> 
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
    );
}