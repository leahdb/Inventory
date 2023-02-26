import React from "react";
import "./InventoryTable.scss";
import AddTypePopup from "../AddTypePopup/AddTypePopup";
import EditTypePopup from "../EditTypePopup/EditTypePopup";
import { useNavigate } from "react-router-dom";

function InventoryTable(props) {

  const navigate = useNavigate();

  const handleRowClick = (event) => {
    navigate("/bla");
  };
  return (
    <>
      <div className="row d-flex justify-content-between table p-5">
        <div className="col-3 p-0 d-flex justify-content-start">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#addType"
            className="p-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="62"
              viewBox="0 0 200 62"
            >
              <g
                id="Add_New_Button"
                data-name="Add New Button"
                transform="translate(-278 -300)"
              >
                <rect
                  id="Rectangle_4"
                  data-name="Rectangle 4"
                  width="200"
                  height="62"
                  rx="5"
                  transform="translate(278 300)"
                  fill="#ffcd00"
                />
                <text
                  id="Add_New"
                  data-name="Add New"
                  transform="translate(333 342)"
                  fill="#fff"
                  font-size="30"
                  font-family="SegoeUI-Semibold, Segoe UI"
                  font-weight="600"
                >
                  <tspan x="0" y="0">
                    Add New
                  </tspan>
                </text>
                <path
                  id="add-circle-svgrepo-com_1_"
                  data-name="add-circle-svgrepo-com (1)"
                  d="M14.5,2A12.5,12.5,0,1,0,27,14.5,12.521,12.521,0,0,0,14.5,2Zm5,13.438H15.438V19.5a.938.938,0,0,1-1.875,0V15.438H9.5a.938.938,0,0,1,0-1.875h4.063V9.5a.938.938,0,0,1,1.875,0v4.063H19.5a.938.938,0,0,1,0,1.875Z"
                  transform="translate(294 317)"
                  fill="#fff"
                />
              </g>
            </svg>
          </button>
        </div>
        <div className="col-6 p-0 d-flex justify-content-end align-items-center">
          <input type="text" placeholder="Enter product type name" />
          <button className="p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="126"
              height="62"
              viewBox="0 0 126 62"
            >
              <g
                id="Search_Button"
                data-name="Search Button"
                transform="translate(-1516 -300)"
              >
                <rect
                  id="Rectangle_3"
                  data-name="Rectangle 3"
                  width="126"
                  height="62"
                  rx="5"
                  transform="translate(1516 300)"
                  fill="#00426b"
                />
                <text
                  id="Search"
                  transform="translate(1534 343)"
                  fill="#ffcd00"
                  font-size="30"
                  font-family="SegoeUI-Semibold, Segoe UI"
                  font-weight="600"
                >
                  <tspan x="0" y="0">
                    Search
                  </tspan>
                </text>
              </g>
            </svg>
          </button>
        </div>
        <div className="col-12 pt-5">
          <table>
            <thead>
              <tr>
                <th>Type ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Counts</th>
                <th>Tools</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((item) => (
                <tr key={item.id}>
                  <td onClick={handleRowClick}>{item.id}</td>
                  <td onClick={handleRowClick}>{item.name}</td>
                  <td onClick={handleRowClick}>
                    <img src={item.image} alt={item.name} />
                  </td>
                  <td onClick={handleRowClick}>{item.counts}</td>
                  <td>
                    <button data-bs-toggle="modal" data-bs-target="#editType">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="90"
                        height="55"
                        viewBox="0 0 90 55"
                      >
                        <g
                          id="Edit_Button"
                          data-name="Edit Button"
                          transform="translate(-1406 -574)"
                        >
                          <rect
                            id="Rectangle_7"
                            data-name="Rectangle 7"
                            width="90"
                            height="55"
                            rx="5"
                            transform="translate(1406 574)"
                            fill="#ffcd00"
                          />
                          <text
                            id="Edit"
                            transform="translate(1441 612)"
                            fill="#fff"
                            font-size="26"
                            font-family="SegoeUI-Semibold, Segoe UI"
                            font-weight="600"
                          >
                            <tspan x="0" y="0">
                              Edit
                            </tspan>
                          </text>
                          <path
                            id="edit-1-svgrepo-com"
                            d="M12.5,4.005H6.124A2.124,2.124,0,0,0,4,6.13V18.876A2.124,2.124,0,0,0,6.124,21H18.87a2.124,2.124,0,0,0,2.124-2.124V12.5M19.31,8.694l1.153-1.153a2.124,2.124,0,1,0-3-3L16.306,5.69m3,3L12.9,15.106a2.124,2.124,0,0,1-1.085.581l-3.125.625.625-3.125A2.124,2.124,0,0,1,9.895,12.1L16.306,5.69m3,3-3-3"
                            transform="translate(1412.164 591.041)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.7"
                          />
                        </g>
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="118"
                        height="55"
                        viewBox="0 0 118 55"
                      >
                        <g
                          id="Delete_Button"
                          data-name="Delete Button"
                          transform="translate(-1506 -574)"
                        >
                          <rect
                            id="Rectangle_6"
                            data-name="Rectangle 6"
                            width="118"
                            height="55"
                            rx="5"
                            transform="translate(1506 574)"
                            fill="red"
                          />
                          <text
                            id="Delete"
                            transform="translate(1538 612)"
                            fill="#fff"
                            font-size="26"
                            font-family="SegoeUI-Semibold, Segoe UI"
                            font-weight="600"
                          >
                            <tspan x="0" y="0">
                              Delete
                            </tspan>
                          </text>
                          <g
                            id="delete-svgrepo-com"
                            transform="translate(1512 590.635)"
                          >
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M10,11v6.469"
                              transform="translate(0.469 0.625)"
                              fill="none"
                              stroke="#fff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.7"
                            />
                            <path
                              id="Path_4"
                              data-name="Path 4"
                              d="M14,11v6.469"
                              transform="translate(0.781 0.625)"
                              fill="none"
                              stroke="#fff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.7"
                            />
                            <path
                              id="Path_5"
                              data-name="Path 5"
                              d="M4,7H21.25"
                              transform="translate(0 0.312)"
                              fill="none"
                              stroke="#fff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.7"
                            />
                            <path
                              id="Path_6"
                              data-name="Path 6"
                              d="M6,7H18.938V18.859A3.234,3.234,0,0,1,15.7,22.094H9.234A3.234,3.234,0,0,1,6,18.859Z"
                              transform="translate(0.156 0.313)"
                              fill="none"
                              stroke="#fff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.7"
                            />
                            <path
                              id="Path_7"
                              data-name="Path 7"
                              d="M9,5.156A2.156,2.156,0,0,1,11.156,3h2.156a2.156,2.156,0,0,1,2.156,2.156V7.313H9Z"
                              transform="translate(0.391)"
                              fill="none"
                              stroke="#fff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2.7"
                            />
                          </g>
                        </g>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddTypePopup />
      <EditTypePopup />
    </>
  );
}

export default InventoryTable;
