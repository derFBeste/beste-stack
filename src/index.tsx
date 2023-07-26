import { Component } from "solid-js";
import { render } from "solid-js/web";
import "./index.css";

const App: Component = () => {
  return <h1 class="p-2 text-2xl">SolidJS Starter</h1>;
};

render(() => <App />, document.getElementById("root"));
