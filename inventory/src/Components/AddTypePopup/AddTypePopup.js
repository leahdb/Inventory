import React, { useState , useRef } from "react";
import "./AddTypePopup.scss";
import axios from "axios";

function AddTypePopup() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const fileSelect = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    axios
      .post("http://localhost:8000/api/types", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //onSubmit({ name, description, image });
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  return (
    <>
      <div className="modal" id="addType">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 class="modal-title">Add Product Type</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleFormSubmit}>
                <div
                  className="image mb-3 p-4"
                  onClick={() => fileSelect.current?.click()}
                >
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Product Type"
                      className="img-fluid mb-3"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="120"
                      viewBox="0 0 140 140"
                    >
                      <g
                        id="Group_24"
                        data-name="Group 24"
                        transform="translate(-890 -260)"
                      >
                        <circle
                          id="Ellipse_1"
                          data-name="Ellipse 1"
                          cx="70"
                          cy="70"
                          r="70"
                          transform="translate(890 260)"
                          fill="#eaeaea"
                        />
                        <g
                          id="add-photo-camera-svgrepo-com"
                          transform="translate(940.111 310.988)"
                        >
                          <path
                            id="Path_83"
                            data-name="Path 83"
                            d="M36.777,17.136V30.271a3.753,3.753,0,0,1-3.753,3.753H6.753A3.753,3.753,0,0,1,3,30.271V13.383A3.753,3.753,0,0,1,6.753,9.63H9.568a3.753,3.753,0,0,0,3-1.5L14.541,5.5a3.753,3.753,0,0,1,3-1.5h4.691"
                            transform="translate(0)"
                            fill="none"
                            stroke="#7e7e7e"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="4"
                          />
                          <path
                            id="Path_84"
                            data-name="Path 84"
                            d="M20.691,4V8.691m0,4.691V8.691m0,0H16m4.691,0h4.691"
                            transform="translate(11.395)"
                            fill="none"
                            stroke="#7e7e7e"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="4"
                          />
                          <circle
                            id="Ellipse_2"
                            data-name="Ellipse 2"
                            cx="7.6"
                            cy="7.6"
                            r="7.6"
                            transform="translate(12.12 13.12)"
                            fill="none"
                            stroke="#7e7e7e"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="4"
                          />
                        </g>
                      </g>
                    </svg>
                  )}
                </div>
                <input
                  type="file"
                  ref={fileSelect}
                  className="hidden"
                  onChange={(event) => setImage(event.target.files[0])}
                />
                <div className="mb-4">
                  <label for="name" class="form-label">
                    Type Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="description" class="form-label">
                    Type Description
                  </label>
                  <textarea
                    class="form-control"
                    id="description"
                    rows="3"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  ></textarea>
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
