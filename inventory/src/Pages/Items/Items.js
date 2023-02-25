import React from "react";
import "./Items.scss";
import ItemsTable from "../../Components/ItemsTable/ItemsTable";

function Items() {
  const data = [
    {
      id: 1,
      name: "LEGO City Fire Rescue",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-f258/k2-_579f6457-8091-4fec-9732-1f53a280032f.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
      counts: 10,
    },
    {
      id: 2,
      name: "Cookware Set",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-f258/k2-_579f6457-8091-4fec-9732-1f53a280032f.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
      counts: 5,
    },
    {
      id: 3,
      name: "Baby and Kids Clothing",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-f258/k2-_579f6457-8091-4fec-9732-1f53a280032f.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
      counts: 15,
    },
    {
      id: 4,
      name: "Beauty Products Bundle",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-f258/k2-_579f6457-8091-4fec-9732-1f53a280032f.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
      counts: 20,
    },
    {
      id: 5,
      name: "Stationery Set",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-f258/k2-_579f6457-8091-4fec-9732-1f53a280032f.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
      counts: 8,
    },
  ];
  return (
    <>
      <div className="container">
        <h1 className="py-5">Product Types</h1>
        {/* <ItemsTable data={data} /> */}
      </div>
    </>
  );
}

export default Items;
