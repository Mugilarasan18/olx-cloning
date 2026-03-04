import { useState } from "react";
import bgImage from "./assets/sellbg.jpg";   // ✅ Import image properly
import "./Sell.css";

function Sell() {
  const [selectedCategory, setSelectedCategory] = useState("Cars");

  const categories = {
    Cars: ["SUV", "Sedan", "Hatchback"],
    Properties: ["For Sale", "For Rent"],
    Mobiles: ["Smartphones", "Accessories"],
    Jobs: ["IT Jobs", "Marketing Jobs"],
    Bikes: ["Sports Bike", "Scooter"],
    Furniture: ["Sofa", "Table", "Chair"],
  };

  return (
    <div
      className="sell-page"
      style={{
        backgroundImage: `url(${bgImage})`,  // ✅ Applied here
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay"></div>

      <div className="sell-wrapper">
        {/* LEFT SIDE */}
        <div className="category-list">
          {Object.keys(categories).map((cat) => (
            <div
              key={cat}
              className={`category-item ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="subcategory-list">
          <h3>{selectedCategory}</h3>
          {categories[selectedCategory].map((sub, index) => (
            <div key={index} className="subcategory-item">
              {sub}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sell;