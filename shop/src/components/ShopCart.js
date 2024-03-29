import React, { useState } from "react";

function ShopCart() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Pick Up");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    function handleAddToCart() {
        console.log("Added to cart:", { name, quantity, comment, payment, shipping });
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Product Details</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                <input value={name} onChange={handleNameChange} className="border border-gray-300 rounded-md p-2 w-full" placeholder="Name" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Quantity:</label>
                <input value={quantity} onChange={handleQuantityChange} type="number" className="border border-gray-300 rounded-md p-2 w-full" placeholder="Quantity" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Comment:</label>
                <textarea value={comment} onChange={handleCommentChange} className="border border-gray-300 rounded-md p-2 w-full" placeholder="Comment (Optional)" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Payment:</label>
                <select value={payment} onChange={handlePaymentChange} className="border border-gray-300 rounded-md p-2 w-full">
                    <option value="">Select Payment</option>
                    <option value="Gcash">Gcash</option>
                    <option value="Maya">Maya</option>
                    <option value="Cod">Cod</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Shipping:</label>
                <div>
                    <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} className="mr-2" />
                    <label className="mr-6">Pick Up</label>
                    <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
                    <label>Delivery</label>
                </div>
            </div>
            <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                Add to Cart
            </button>
        </div>
    );
}

export default ShopCart;
