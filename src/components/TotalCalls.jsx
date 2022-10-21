import Card from "react-bootstrap/Card";
import imageUrl from "../utils/imageUrl";

function TotalCalls() {
  return (
    <Card>
      <div className="title">
        <Card.Img
          variant="top"
          src={imageUrl("calls.png")}
          className="logo-sales"
        />
        <div className="heading">
          <h5>Total calls on the...</h5>
        </div>
      </div>

      <div className="inner-heading">
        <p>Today</p>
        <p>345</p>
      </div>
      <div className="inner-heading">
        <p>Oct 17</p>
        <p>4,563</p>
      </div>
      <div className="inner-heading">
        <p>Oct 16</p>
        <p>134,345</p>
      </div>
      <div className="inner-heading">
        <p>Oct 15</p>
        <p>54</p>
      </div>
      <div className="inner-heading">
        <p>Oct 14</p>
        <p>5,768</p>
      </div>
      <div className="inner-heading">
        <p>Oct 13</p>
        <p>8,990</p>
      </div>
      <div className="inner-heading">
        <p>Oct 12</p>
        <p>4,563</p>
      </div>
      <div className="inner-heading">
        <p>Oct 11</p>
        <p>134,345</p>
      </div>
      <div className="inner-heading">
        <p>Oct 10</p>
        <p>54</p>
      </div>
      <div className="inner-heading">
        <p>Oct 9 </p>
        <p>5,768</p>
      </div>
      <div className="inner-heading">
        <p>Oct 8</p>
        <p>8,990</p>
      </div>
      <div className="inner-heading">
        <p>Oct 7</p>
        <p>8,990</p>
      </div>
    </Card>
  );
}

export default TotalCalls;
