import Card from "react-bootstrap/Card";
import imageUrl from "../utils/imageUrl";

function TokenCards() {
  return (
    <Card>
      <div className="title">
        <Card.Img
          variant="top"
          src={imageUrl("token.png")}
          className="logo-sales"
        />
        <div className="heading">
          <h5>Token</h5>
        </div>
      </div>
      <div className="rewards mt-4">
        <h1>19.5K</h1>
        <p>Total Token Supply</p>
        <div className="green-text">
          <i className="fa-solid fa-arrow-up"></i>
          <p>
            <span>2.5K</span> vs yesterday
          </p>
        </div>
      </div>
      <div className="rewards mt-4">
        <h1>10.5K</h1>
        <p>Total tokens consumed</p>
        <div className="green-text">
          <i className="fa-solid fa-arrow-up"></i>
          <p>
            <span>1.4K</span> vs yesterday
          </p>
        </div>
      </div>
      <div className="rewards mt-4">
        <h1>$2,563</h1>
        <p>Calls in flight</p>
        <div className="green-text">
          <i className="fa-solid fa-arrow-up"></i>
          <p>
            <span>343</span> vs yesterday
          </p>
        </div>
      </div>
    </Card>
  );
}

export default TokenCards;
