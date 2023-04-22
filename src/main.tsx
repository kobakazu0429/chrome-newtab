import { h, render } from "preact";
import { App } from "./app";
import { setup } from "goober";
import "./index.css";

setup(h);
render(<App />, document.getElementById("app")!);
