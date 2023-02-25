import React from "react";
import "./Items.scss";
import ItemsTable from "../../Components/ItemsTable/ItemsTable";

function Items() {
  const data = [
    {
      id: 1,
      serial: "SN1",
      sold: true,
    },
    {
      id: 2,
      serial: "SN2",
      sold: false,
    },
    {
      id: 3,
      serial: "SN3",
      sold: true,
    },
  ];

  return (
    <>
      <div className="container">
        <h1 className="py-5">Bla Items</h1>
        <ItemsTable data={data} />
      </div>
    </>
  );
}

export default Items;
