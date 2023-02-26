import React, { useState, useRef } from "react";
import "./AddItemPopup.scss";

function AddTypePopup() {
  const [num, setNum] = useState(1);
  const [serial, setSerial] = useState([]);

  const handleSerialChange = (e, index) => {
    const newSerial = [...serial];
    newSerial[index] = e.target.value;
    setSerial(newSerial);
  };

  const handleNumChange = (e) => {
    const newNum = parseInt(e.target.value);
    setNum(newNum);
    setSerial(new Array(newNum).fill(""));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //onSubmit({ name, description, image });
  };

  return (
    <>
      <div className="modal" id="addItem">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 class="modal-title">Add Items</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="row py-5">
                  <div className="col-5 pe-0 d-flex justify-content-end">
                    <label htmlFor="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31.95"
                        height="32.5"
                        viewBox="0 0 31.95 32.5"
                      >
                        <g
                          id="stack-add-svgrepo-com"
                          transform="translate(-3 -5)"
                        >
                          <path
                            id="Path_85"
                            data-name="Path 85"
                            d="M14.519,23.287a1.775,1.775,0,0,1-1.775-1.775V19.294H10.525a1.775,1.775,0,0,1,0-3.55h2.219V13.525a1.775,1.775,0,1,1,3.55,0v2.219h2.219a1.775,1.775,0,1,1,0,3.55H16.294v2.219A1.775,1.775,0,0,1,14.519,23.287Z"
                            transform="translate(4.456 7.556)"
                            fill="#00426b"
                          />
                          <path
                            id="Path_86"
                            data-name="Path 86"
                            d="M10.1,6.875V5.25A3.41,3.41,0,0,1,13.65,2H24.3a3.41,3.41,0,0,1,3.55,3.25V6.875a3.41,3.41,0,0,1,3.55,3.25V11.75q0,.138-.012.273a4.928,4.928,0,0,1,3.562,4.6v13A5.115,5.115,0,0,1,29.625,34.5H8.325A5.115,5.115,0,0,1,3,29.625v-13a4.928,4.928,0,0,1,3.562-4.6q-.012-.135-.012-.273V10.125A3.41,3.41,0,0,1,10.1,6.875ZM13.65,5.25H24.3V6.875H13.65Zm14.2,4.875V11.75H10.1V10.125ZM8.325,15h21.3A1.7,1.7,0,0,1,31.4,16.625v13a1.7,1.7,0,0,1-1.775,1.625H8.325A1.7,1.7,0,0,1,6.55,29.625v-13A1.7,1.7,0,0,1,8.325,15Z"
                            transform="translate(0 3)"
                            fill="#00426b"
                            fill-rule="evenodd"
                          />
                        </g>
                      </svg>
                      &nbsp; Bulk Add:
                    </label>
                  </div>
                  <div className="col-2 p-0">
                    <input
                      type="number"
                      value={num}
                      onChange={handleNumChange}
                      class="form-control"
                    />
                  </div>
                  <div className="col-3">
                    <label>Items</label>
                  </div>
                </div>
                <div className="mb-4">
                  <label for="name" class="form-label mb-3">
                    Item(s) Serial No.
                  </label>
                  {[...Array(num)].map(() => (
                    <input
                      type="text"
                      class="form-control mb-3"
                      id="serial"
                      onChange={(e) => setSerial(e.target.value)}
                      required
                    />
                  ))}
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="mb-4">
                <svg
                  id="confirm_location_button"
                  xmlns="http://www.w3.org/2000/svg"
                  width="240"
                  height="60"
                  viewBox="0 0 300 62"
                >
                  <rect
                    id="Rectangle_37"
                    data-name="Rectangle 37"
                    width="300"
                    height="62"
                    rx="5"
                    fill="#00426b"
                  />
                  <text
                    id="Add"
                    transform="translate(121.498 43)"
                    fill="#ffcd00"
                    font-size="30"
                    font-family="SegoeUI-Semibold, Segoe UI"
                    font-weight="600"
                  >
                    <tspan x="0" y="0">
                      Add
                    </tspan>
                  </text>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTypePopup;
