import React, { useState, useEffect } from "react";
import PRODUCT_DATA from "../../ProductData/Products.json";
import useAuthContext from "../../AuthContext/AuthContext";
import { toast } from "react-toastify";

const ModalForm = () => {
  const [selectProduct, setSelectedProduct] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState("");

  const [formData, setFormData] = useState([]);

  const { updateSales } = useAuthContext();

  //product selection
  const handleProductSelection = (e) => {
    setSelectedProduct(e.target.value);
    const selected = e.target.value;
    const data = PRODUCT_DATA.filter((product) => product.name === selected);
    setProductPrice(data[0].price);
  };

  //Quantity Input
  const handleQuantity = (e) => {
    if (quantity.valueOf < 1) {
      setQuantity(1);
    } else {
      setQuantity(e.target.value);
    }
  };

  useEffect(() => {
    const total = Number(quantity) * Number(productPrice);
    setTotalAmount(total);
  }, [quantity, productPrice]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productObj = { selectProduct, productPrice, quantity, totalAmount };
    const list = [...formData];
    list.push({ id: formData.length + 1, ...productObj });
    setFormData(list);
    updateSales(list);
    toast.success("Product Added!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="w-full h-auto">
      <form
        className="grid md:grid-cols-2 md:gap-6 gap-4"
        onSubmit={handleSubmit}
      >
        {/* Product Selection  */}
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="selectProduct" className="text-base text-gray-900">
            Select Product
          </label>
          <select
            className="w-full h-10 border border-gray-900 px-2 rounded-md outline-none focus:border-rose-700 bg-gray-100"
            value={selectProduct}
            onChange={handleProductSelection}
          >
            <option value="" key="">
              - Select Product -
            </option>
            {PRODUCT_DATA.map((product) => (
              <option value={product.name} key={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        {/* Product Price */}
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="selectProduct" className="text-base text-gray-900">
            Product Price ($)
          </label>
          <input
            type="number"
            readOnly
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="w-full h-10 border border-gray-900 px-2 rounded-md outline-none focus:border-rose-700 bg-gray-100"
          />
        </div>

        {/* Product Quantity */}
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="selectProduct" className="text-base text-gray-900">
            Product Quantity
          </label>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantity}
            className="w-full h-10 border border-gray-900 px-2 rounded-md outline-none focus:border-rose-700 bg-gray-100"
          />
        </div>

        {/* Total Amount */}
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="selectProduct" className="text-base text-gray-900">
            Total Amount ($)
          </label>
          <input
            type="number"
            readOnly
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            className="w-full h-10 border border-gray-900 px-2 rounded-md outline-none focus:border-rose-700 bg-gray-100"
            placeholder="Total Amount"
          />
        </div>

        {/* Submit Button  */}
        <div className="w-full mt-3 flex flex-col items-center md:col-span-2">
          <button
            type="submit"
            disabled={totalAmount === 0 ? true : false}
            className="px-14 cursor-pointer border border-gray-100 rounded-lg outline-none transition-all duration-300  hover:bg-rose-900 text-base font-semibold py-2 bg-rose-700 text-gray-100 disabled:opacity-75 disabled:cursor-not-allowed"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalForm;
