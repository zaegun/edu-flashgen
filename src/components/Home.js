import { Link } from "react-router-dom"
import React from "react"
import op from "../img/op.png"
import add from "../img/add.png"
import sub from "../img/sub.png"

function Home() {
  return (
    <nav>
      <Link to="op"><img src={op} alt="" /></Link>
      <Link to="add"><img src={add} alt="" /></Link>
    </nav>
  );
}

export default Home;