import Card from "react-bootstrap/Card";
import imageUrl from "../utils/imageUrl";

function SalesCards() {
  return (
    <Card style={{ width: "18rem" }}>
      <div className="title">
        <Card.Img
          variant="top"
          src={imageUrl("sales.png")}
          className="logo-sales"
        />
        <div className="heading">
          <h5>Sales</h5>
        </div>
      </div>
      <div className="rewards mt-4">
        <h1>1,893</h1>
        <p>Total Rewards Earned</p>
      </div>
      <div className="rewards mt-4">
        <h1>3,458</h1>
        <p>Number of validators and master nodes running</p>
      </div>
      <div className="rewards mt-4">
        <h1>$20.6K</h1>
        <p>Live gas fee and historical chart</p>
      </div>
    </Card>
  );
}

export default SalesCards;
