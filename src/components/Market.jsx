import Card from "react-bootstrap/Card";
import imageUrl from "../utils/imageUrl";
import { LineChart } from "../components/index";

function Market() {
  const data = [10, 41, 35, 51, 49, 62, 69, 91, 148];
  const chartCategories = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
  ];
  return (
    <Card>
      <div className="title">
        <Card.Img
          variant="top"
          src={imageUrl("market.png")}
          className="logo-sales"
        />
        <div className="heading">
          <h5>Market cap</h5>
        </div>
      </div>
      <div>
        <LineChart data={data} categories={chartCategories} title={""} />
      </div>
    </Card>
  );
}

export default Market;
