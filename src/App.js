import React from "react";

import { Header } from "./componets/Header";
import { Categories } from "./componets/Categories";
import { Sort } from "./componets/Sort";
import { ProductCard } from "./componets/ProductCard";

import "./scss/app.scss";


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
            <ProductCard title="мексиканская" price={500} />
            <ProductCard />


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
