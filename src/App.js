import React from "react";

import { Header } from "./componets/Header";
import { Categories } from "./componets/Categories";
import { Sort } from "./componets/Sort";
import { ProductCard } from "./componets/ProductCard";

import pizzas from "./assets/pizzas.json";

import "./scss/app.scss";

console.log(pizzas);

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas?.pizzas.map((obj) => (
              <ProductCard {...obj} 
                // title={obj.title}
                // price={obj.price}
                // imageUrl={obj.imageUrl}
                // sizes={obj.sizes}
                // types={obj.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
