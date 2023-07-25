import React from 'react';
import KfcCard from "./KfcCard";

export default function CategoryProducts({CI, productList}) {
  return (
        <div
          key={"Category" + CI.cat_id}
          id={"Category" + CI.cat_id}
          name={CI.cat_name}
          className="element"
        >
          {/* {CI.cat_name.replace(/\s/g, "")}: this is use on menu click */}
          <div
            key={"mainRow" + CI.cat_id}
            id={CI.cat_name.replace(/\s/g, "")}
            className="row"
          >
            <h2
              key={"heading" + CI.cat_id}
              id={"heading" + CI.cat_id}
              className="menu-title mt-0"
            >
              <span>{CI.cat_name}</span>
            </h2>
            {productList.map((productItem) => (
              // <div class="col">
              <KfcCard PI={productItem} CI={CI} />
              // </div>
            ))}
          </div>
        </div>
  )
}
