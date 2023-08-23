import React from "react";

import { Categories } from "../componets/Categories";
import { Sort } from "../componets/Sort";
import { ProductCard } from "../componets/Block/ProductCard";
import Skeleton from "../componets/Block/Skeleton";

import axios from "axios";

export const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности asc",
    sortProperty: "rating",
    order: "asc",
  });

  //  `http://localhost:5000/pizzas?${
  //       categoryId > 0? `category=${categoryId}` : ""
  //     }_sort=${sortType.sortProperty}`

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `http://localhost:5000/pizzas?${
        categoryId > 0 ? "category=" + categoryId : ""
      }&_sort=${sortType.sortProperty}&_order=${sortType.order}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setItems(res);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <ProductCard key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onClickSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
    </div>
  );
};
