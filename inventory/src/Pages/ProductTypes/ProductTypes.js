import React from "react";
import "./ProductTypes.scss";
import InventoryTable from "../../Components/InventoryTable/InventoryTable";

function ProductTypes() {
  
  return (
    <>
      <div className="container">
        <h1 className="py-5">Product Types</h1>
        <InventoryTable/>
      </div>
    </>
  );
}

export default ProductTypes;
