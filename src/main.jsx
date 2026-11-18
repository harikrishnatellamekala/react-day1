import {createRoot} from "react-dom/client";
import "./index.css"

createRoot(document.getElementById("root")).render(

  <>
  <div className="head">
    <h1>Mini Project1</h1>
  </div>

  <div className="rulz">
    <img className="img" src="https://www.svgrepo.com/show/354259/react.svg" alt="img not found" />
    <h2>Rules of react</h2>
    <li>
      <ul>must have enclose  jsx in root element</ul>
      <ul>close the tags properly</ul>
      <ul>use className not class</ul>
      <ul>use camel case for attributes</ul>
      <ul>use flowerbraces for js</ul>
    </li>
  </div>
  </>

);