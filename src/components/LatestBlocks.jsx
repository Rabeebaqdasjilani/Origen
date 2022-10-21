import Card from "react-bootstrap/Card";
import imageUrl from "../utils/imageUrl";

function LatestBlocks() {
  return (
    <Card style={{ height: "100%" }}>
      <div className="title">
        <Card.Img
          variant="top"
          src={imageUrl("blocks.png")}
          className="logo-sales"
        />
        <div className="heading">
          <h5>Latest Blocks</h5>
        </div>
      </div>
      <div className="blocks-desc">
        <p>
          {" "}
          <span>Block Name </span>
        </p>
        <p>10:50 AM</p>
      </div>
      <div className="blocks-desc">
        <p>
          {" "}
          <span>Ornare cum pellentesque </span>
        </p>
        <p>10:50 AM</p>
      </div>
      <div className="blocks-desc">
        <p>
          {" "}
          <span>Nisi, est, pharetra </span>
        </p>
        <p>10:50 AM</p>
      </div>

      <div className="blocks-desc">
        <p>
          {" "}
          <span> Sed aliquet feugiat </span>
        </p>
        <p>10:50 AM</p>
      </div>
      <div className="blocks-desc">
        <p>
          {" "}
          <span> Lorem ullamcorper faucibus </span>
        </p>
        <p>10:50 AM</p>
      </div>

      <div className="blocks-desc">
        <p>
          {" "}
          <span> Egestas eu diam </span>
        </p>
        <p>10:50 AM</p>
      </div>
    </Card>
  );
}

export default LatestBlocks;
