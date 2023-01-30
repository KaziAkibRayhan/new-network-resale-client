import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ bookingProduct }) => {
  const { user } = useContext(AuthContext);
  const { name, resale_price } = bookingProduct;
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const itemName = form.itemName.value;
    const sellingPrice = form.sellingPrice.value;
    const phoneNumber = form.number.value;
    const location = form.location.value;
    const booking = {
        userName,
        userEmail,
        itemName,
        sellingPrice,
        phoneNumber,
        location
    }
    console.log(booking);


  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-5">
            <div>
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                readOnly
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <input
                type="text"
                name="itemName"
                defaultValue={name}
                readOnly
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Selling Price</span>
              </label>
              <input
                type="text"
                name="sellingPrice"
                defaultValue={resale_price}
                readOnly
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                name="number"
                placeholder="Phone Number"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered w-full"
              />
            </div>
            <div className="">
              <input
                className="w-full btn btn-primary"
                type="submit"
                value={"Submit"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
