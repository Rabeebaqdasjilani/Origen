import Card from "react-bootstrap/Card";
import imageUrl from "../utils/imageUrl";
import { VerticalBarChart } from "./index";

function CallsAndCharts() {
  return (
    <>
      <Card className="bar-chart">
        <div className="title">
          <Card.Img
            variant="top"
            src={imageUrl("calls-charts.png")}
            className="logo-sales"
          />
          <div className="heading">
            <h5>Total calls and chats made and as pe...</h5>
          </div>
        </div>
        <VerticalBarChart />
      </Card>
    </>
  );
}

export default CallsAndCharts;
