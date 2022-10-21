import Card from "react-bootstrap/Card";
import imageUrl from "../utils/imageUrl";
import BarChart from "./charts/BarChart";

function DataConsumption() {
  return (
    <Card>
      <div className="title">
        <Card.Img
          variant="top"
          src={imageUrl("consumption.png")}
          className="logo-sales"
        />
        <div className="heading">
          <h5>Data Consumption</h5>
        </div>
      </div>
      <div>
        <BarChart />
      </div>
    </Card>
  );
}

export default DataConsumption;
