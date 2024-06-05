import { CardComponent } from "../components/CardComponent.js";
let cardRender = document.querySelector("#cardRender");

const BaseUrl = "http://127.0.0.1:5502/data/products.json";

fetch(BaseUrl)
  .then((a) => a.json())
  .then((data) => {
    let products = data.products;
    products.map((product) => (cardRender.innerHTML += CardComponent(product)));
  });
