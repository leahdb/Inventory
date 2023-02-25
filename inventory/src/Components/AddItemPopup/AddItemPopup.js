import React, { useState, useRef } from "react";
import "./AddItemPopup.scss";

function AddTypePopup() {
  const [serial, setSerial] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //onSubmit({ name, description, image });
  };

  return (
    <>
      <div className="modal" id="exampleModal">
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
                
                <div className="mb-4">
                  <label for="name" class="form-label">
                    Item(s) Serial No.
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="serial"
                    value={serial}
                    onChange={(e) => setSerial(e.target.value)}
                    required
                  />
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
