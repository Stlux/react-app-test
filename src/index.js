import React from "react"
import ReactDOM from "react-dom"
import Layout from "./components/layout.js"
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import "./style.css";

ReactDOM.render(
  <>
    <Navbar />
    <Layout />
    <Footer />
  </>

  , document.getElementById("root"));