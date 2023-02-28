import React, { useState, useRef } from "react";
import "./EditTypePopup.scss";
import axios from "axios";

function AddTypePopup(props) {
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [image, setImage] = useState(null);

  const id = localStorage.getItem("id");
  const fileSelect = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    axios
      .put(`http://localhost:8000/api/types/${id}`, formData)
      .then((response) => {
        console.log(response.data);
        //window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="modal" id="editType">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 class="modal-title">Edit Product Type</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="modal-body">
                <div
                  className="image mb-3 p-4 d-flex justify-content-center"
                  onClick={() => fileSelect.current?.click()}
                >
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Product Type"
                      className="img-fluid mb-3"
                    />
                  ) : (
                    <img
                      src={image}
                      alt="Product Type"
                      className="img-fluid mb-3"
                    />
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
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
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
                        Edit
                      </tspan>
                    </text>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTypePopup;
