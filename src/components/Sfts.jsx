import Card from "react-bootstrap/Card";
import imageUrl from "../utils/imageUrl";
import { LineChart } from "../components/index";
function Sfts() {
  const sftChartData = [45, 52, 38, 45, 23];
  const sftCategories = [5, 10, 15, 20, 25];
  return (
    <Card>
      <div className="title">
        <Card.Img
          variant="top"
          src={imageUrl("sfts.png")}
          className="logo-sales"
        />
        <div className="heading">
          <h5>Sft's</h5>
        </div>
      </div>
      <div className="rewards mt-4">
        <h1>27.2K</h1>
        <p>Number of Sft's live</p>
      </div>
      <div className="rewards mt-4">
        <h1>126</h1>
        <p>Number of Sft's burnt</p>
      </div>
      <div>
        <LineChart
          data={sftChartData}
          categories={sftCategories}
          title={"SFT Price"}
        />
      </div>
    </Card>
  );
}

export default Sfts;
