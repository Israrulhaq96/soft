import React from "react";
import categoryList from "../jsondata/categoryList.json";
import CategoryProducts from "./CategoryProducts";
import { getCategoryProducts } from "../utils";

export default function CategoryMenu() {
  return (
    <div id="ProductleftBar" className="col-lg-8 col-md-12">
      {categoryList.map(CI => <CategoryProducts CI={CI} productList={getCategoryProducts(CI)}/> ) }
    </div>
  );
}
