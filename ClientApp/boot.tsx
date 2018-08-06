import "./css/site.css";
import "bootstrap";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Slick } from "../ClientApp/components/Slick";

function renderApp(): void {
    renderElement(<Slick />, document.getElementById("slick-app"));
}

renderApp();

function renderElement(element: React.ReactElement<any>, app: HTMLElement | null): void {
    if (app) {
        ReactDOM.render(element, app);
    }
}

