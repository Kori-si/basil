import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Categories } from "../componets/Categories";
import { Sort } from "../componets/Sort";
import { ProductCard } from "../componets/Block/ProductCard";
import { Pagination } from "../componets/Pagination";
import Skeleton from "../componets/Block/Skeleton";
import { SearchContext } from "../App";
import { setCategoryId } from "../redux/slices/filterSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort);

  console.log("id category", categoryId)

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [currentPage, setCurrentPage] = React.useState(1);


  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `http://localhost:5000/pizzas?_page=${currentPage}&_limit=4&${
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
  }, [categoryId, sortType, searchValue, currentPage]);

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
          onClickCategory={onClickCategory}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};
