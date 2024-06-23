import React from "react";
import { Button } from "react-bootstrap";

export default function Navbar(props) {
  let products = props.products;
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Home
          </a>
          <a className="navbar-brand" href="#">
            About
          </a>
          <a className="navbar-brand" href="#">
            Service
          </a>
          <a className="navbar-brand" href="#">
            Shopping
          </a>
          <a className="navbar-brand" href="#">
            Contact
          </a>
        </div>
      </nav>
      <center>
        <span>
            <h2 className="mt-5">Products</h2>
            <Button className="btn btn-primary" onClick={() => {
          props.SortProductList(props.products);
        }}>Sort</Button> <Button className="btn btn-primary"> Catogty</Button>
        </span>
      </center>
      </>
    );
  }

