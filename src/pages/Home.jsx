import React from "react";

import { Categories } from "../componets/Categories";
import { Sort } from "../componets/Sort";
import { ProductCard } from "../componets/Block/ProductCard";
import Skeleton from "../componets/Block/Skeleton";

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("http://localhost:5000/pizzas")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setItems(res);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <ProductCard key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};
