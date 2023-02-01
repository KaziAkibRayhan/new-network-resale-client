import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const sellerName = event.target.sellerName.value;
    const sellerEmail = event.target.email.value;
    const productName = event.target.productName.value;
    const productImage = event.target.productImage.value;
    const productResalePrice = event.target.productResalePrice.value;
    const productOriginalPrice = event.target.productOriginalPrice.value;
    const conditionProduct = event.target.conditionProduct.value;
    const mobileNumber = event.target.mobileNumber.value;
    const yearOfPurchase = event.target.yearOfPurchase.value;
    const locationProduct = event.target.locationProduct.value;
    const categoryProduct = event.target.categoryProduct.value;
    const description = event.target.description.value;

    const product = {
      sellerName,
      sellerEmail,
      productName,
      productImage,
      productResalePrice,
      productOriginalPrice,
      conditionProduct,
      mobileNumber,
      yearOfPurchase,
      locationProduct,
      categoryProduct,
      description,
    };
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully Product Added!");
          navigate('/dashboard/my-products')
        }
      });
  };
  return (
    <div className="hero my-10">
      <div className="hero-content flex-col lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Add A Product!</h1>
        </div>
        <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                readOnly
                name="sellerName"
                placeholder="Seller Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                readOnly
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="productName"
                required
                placeholder="product"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Image Url</span>
              </label>
              <input
                type="text"
                name="productImage"
                required
                placeholder="Product Image Url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Resale Price</span>
              </label>
              <input
                type="text"
                name="productResalePrice"
                required
                placeholder="ResalePrice"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Original Price</span>
              </label>
              <input
                type="text"
                name="productOriginalPrice"
                required
                placeholder="OriginalPrice"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Condition Product</span>
              </label>
              <select
                name="conditionProduct"
                className="select select-primary w-full max-w-xs"
              >
                <option>Good</option>
                <option>Excellent</option>
                <option>Fair</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile Number</span>
              </label>
              <input
                type="text"
                name="mobileNumber"
                required
                placeholder="Mobile Number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Year of purchase</span>
              </label>
              <input
                type="text"
                name="yearOfPurchase"
                required
                placeholder="Year of purchase"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <select
                name="locationProduct"
                className="select select-primary w-full max-w-xs"
              >
                <option>Dhaka</option>
                <option>Chittagong</option>
                <option>Rajshahi</option>
                <option>Narshingdi</option>
                <option>Gazipur</option>
                <option>Rongpur</option>
                <option>Natore</option>
                <option>Barishal</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Category</span>
              </label>
              <select
                name="categoryProduct"
                className="select select-primary w-full max-w-xs"
              >
                <option>Lenovo</option>
                <option>Asus</option>
                <option>HP</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Description</span>
              </label>
              <textarea
                placeholder="Product Description"
                name="description"
                required
                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add a Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAProduct;
