import React from "react";

import { Header } from "./componets/Header";
import { Categories } from "./componets/Categories";
import { Sort } from "./componets/Sort";
import { ProductCard } from "./componets/ProductCard";

import "./scss/app.scss";


function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <ProductCard title="мексиканская" price={500} />
            <ProductCard />


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
