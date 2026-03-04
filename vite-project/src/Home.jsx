import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
import iphone1 from "./assets/iphone1.jpg";
import bike from "./assets/bike.jpg";
import tv from "./assets/tv.jpg";
import laptop from "./assets/laptop.jpg";
import car from "./assets/car.jpg";
import location from "./assets/location.jpg";

function Home() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "iPhone 13",
      price: "₹45,000",
      location: "Chennai",
      image: iphone1,
    },
    {
      id: 2,
      title: "Royal Enfield",
      price: "₹1,20,000",
      location: "Coimbatore",
      image: bike,
    },
    {
      id: 3,
      title: "Television",
      price: "₹15,000",
      location: "Erode",
      image: tv,
    },
    {
      id: 4,
      title: "Asus Tuf Gaming Laptop",
      price: "₹45,000",
      location: "Salem",
      image: laptop,
    },
    {
      id: 5,
      title: "BMW Car",
      price: "₹3,50,000",
      location: "Madurai",
      image: car,
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">OLX</div>

        <div className="location">
          <img src={location} alt="location icon" width="25px" />
          <span>Tamil Nadu</span>
        </div>

        <input
          type="text"
          placeholder="Search for products..."
          className="search-bar"
        />
        <Link to="/Login">
        <button
          className="login-button"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        </Link>
        <Link to="/sell">
        <button
          className="sell-btn"
          onClick={() => navigate("/add-product")}
        >
          + SELL
        </button>
        </Link>
      </div>

      {/* Categories */}
      <div className="categories">
        <div>Cars</div>
        <div>Bikes</div>
        <div>Properties</div>
        <div>Mobiles</div>
        <div>Furniture</div>
        <div>Jobs</div>
      </div>

      {/* Product Section */}
      <div className="product-container">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.price}</h3>
            <p>{item.title}</p>
            <span>{item.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;