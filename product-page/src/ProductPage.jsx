import "./App.css";
import model from "./assets/model.jpg";
import image from "./assets/image.png"
import Ellipsis from "./assets/Ellipsis.png";
import sc from "./assets/sc.png"
import Verified from "./assets/Verified.png"
import sr from "./assets/SR.png"
import B from "./assets/B.png"

const ProductPage = () => {
  return (
    <div
      className="w-full   bg-white mx-auto p-4 relative pt-20"
      style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
    >
      {/* Main Content */}
      
        {/* Navbar */}
        <div className=" fixed top-0 left-0 w-full flex items-center justify-between py-2 border-b border-gray-300 shadow-md z-10 bg-white">
          <div className="flex items-center px-2">
            <button className="text-xl font-semibold text-gray-700 mr-2">
              ×
            </button>
            <img src={image} alt="Logo" className="w-12 h-12" /> {/* Update the logo path */}
            <p className="text-[15px] font-semibold ">Louis Vuitton</p>
            <img src={Verified} alt="Logo" className="w-4 h-4" /> 
          </div>
          <div className="flex space-x-4 px-2">
            <button >  <img src={Ellipsis} alt="Cart" className="w-[15px] h-[15px]" /></button>
            <button>  <img src={sc} alt="Cart" className="w-[15px] h-[15px]" /></button>
          </div>
        </div>

        {/* Product Image */}
        <div className="relative -mx-4 left-0 w-full"
        style={{ margin: 0, padding: 0 }}>
          <img
            src={model} // Replace with your image source
            alt="Product"
            className="w-full "
          />
        </div>

        {/* Hot Deal Bar */}
        <div
          className="absolute left-0 bottom-[422px] w-screen h-[35px] bg-Pinkbar flex items-center justify-between px-4"
          style={{ backgroundColor: "rgba(255, 192, 203, 0.5)" }}
        >
          <p className="text-[12px] font-semibold text-customPink">Hot Deal 🔥</p>
          <p className=" text-[10px] font-semibold text-customPink ">
            New customer deal
          </p>
        </div>

        {/* Product Info */}
        <div className="w-full h-[94px] bg-white rounded-lg   mt-[30px] flex flex-col justify-between">
          {/* Brand Name */}
          <p className="text-gray-400 text-xs font-light mb-0 py-0">Louis Vuitton</p>

          {/* Product Name */}
          <div className="flex justify-between items-center mb-2">
    <p className="text-black font-medium text-sm">Andi shirt in white</p>
    <div className="flex space-x-2  ">
      <button className="w-6 h-6">
        <img src={B} alt="Share" className="w-full h-full" />
      </button>
      <button className="w-6 h-6">
        <img src={sr} alt="Save" className="w-full h-full" />
      </button>
    </div>
  </div>
          {/* Price */}
          <p className="text-black font-bold text-base mb-[-1] py-0">$79.00</p>

          <p className="flex items-center text-gray-500 text-xs mb-2">
    <span className="text-yellow-500 text-base h-[10 px]">★</span>
    <span className="text-xs h-[12px] ml-1 font-semibold text-black">4.3</span>
    <span className="text-xs h-[12px] ml-1">(528)</span>
  </p>

          {/* Color and Rating */}
          <div className="flex justify-between items-center mt-[-4]">
          <p className="text-[12px] font-semibold text-black h-[10px]">
            Color: <span className="font-semibold text-gray-300">White</span>
          </p>
       
          </div>
        </div>

        {/* Product Variants */}
        <div className="mt-8">
  <div className="flex items-center space-x-2">
    <div className="border-2 border-gray-500 p-2 rounded-lg w-[89px] h-[95px] flex flex-col items-center justify-center">
      <img
        src={model} // Replace with color thumbnail
        alt="White Color"
        className="w-12 h-12 rounded-md"
      />
      <p className="text-[12px] h-[12px] mt-2">White</p> {/* Text below the image */}
    </div>
  </div>
</div>



        <div className="mt-4">
          <p className="font-semibold mb-2">Size</p>
          <div className="flex space-x-4 font-extrabold text-black">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-100 w-[65px] h-[46px] flex items-center justify-center"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex space-x-4">
          <button
            className="bg-gray-200 font-semibold text-black rounded-lg hover:bg-gray-300 flex items-center justify-center"
            style={{ width: "161px", height: "37.81px" }}
          >
            Add to cart
          </button>
          <button
            className="bg-customPink text-white rounded-lg font-semibold flex items-center justify-center"
            style={{ width: "161px", height: "37.81px" }}
          >
            Buy Now
          </button>
        </div>
      
    </div>
  );
};

export default ProductPage;
