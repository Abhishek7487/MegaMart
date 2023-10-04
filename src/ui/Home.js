import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>
        Revamp Your Style with TrendWardrobe <br /> Your Ultimate Fashion
        Destination!
      </h1>
      <Link to="/productsList">
        <button>Shop Now</button>
      </Link>
    </div>
  );
}

export default Home;
