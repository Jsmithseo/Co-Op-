import React from "react"
import { Link } from "gatsby"
import { IdentityContextProvider } from "react-netlify-identity-widget";
import "./layout.css"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"

const Layout = ({ children }) => (
  <>
  <IdentityContextProvider url="https://marin-city-co-op.netlify.app">
    <header>
      <Link to="/"></Link>
          <Link className="link" to="/support">
            <Button variant="outline-success">Donate</Button>
          </Link>
          <Link className="link" to="/dashboard"><Button>Login</Button></Link>
    </header>
    <Navbar
        collapseOnSelect
        expand="md"
        fixed="top"
        style={{
          padding: "0 0!important",
        }}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{
            backgroundColor: "white",
          }}
        >
          <Nav className="mr-auto">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/about">
              Teams
            </Link>
            <Link className="link" to="/programs">
              Our Vision
            </Link>
            <Link className="link" to="/support">
              Our Leaders
            </Link>
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    <main>{children}</main>
  </IdentityContextProvider>
  </>
)

export default Layout
