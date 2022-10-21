import Table from "react-bootstrap/Table";
import imageUrl from "../utils/imageUrl";

const heading = [
  {
    id: "Hash",
  },
  {
    id: "Time",
  },
  {
    id: "Amount($$$)",
  },
  {
    id: "Amount(USD)",
  },
];
const detailsData = [
  {
    id: "0x16474f7a4f58c3c94d41999d11657c0f43b87332",
    time: "16:00",
    amount1: "$4.00",
    amount2: "$36.00",
  },
  {
    id: "0x16474f7a4f58c3c94d41999d11657c0f43b87332",
    time: "16:00",
    amount1: "$4.00",
    amount2: "$36.00",
  },
  {
    id: "0x16474f7a4f58c3c94d41999d11657c0f43b87332",
    time: "16:00",
    amount1: "$4.00",
    amount2: "$36.00",
  },
  {
    id: "0x16474f7a4f58c3c94d41999d11657c0f43b87332",
    time: "16:00",
    amount1: "$4.00",
    amount2: "$36.00",
  },
  {
    id: "0x16474f7a4f58c3c94d41999d11657c0f43b87332",
    time: "16:00",
    amount1: "$4.00",
    amount2: "$36.00",
  },
  {
    id: "0x16474f7a4f58c3c94d41999d11657c0f43b87332",
    time: "16:00",
    amount1: "$4.00",
    amount2: "$36.00",
  },
  {
    id: "0x16474f7a4f58c3c94d41999d11657c0f43b87332",
    time: "16:00",
    amount1: "$4.00",
    amount2: "$36.00",
  },
  {
    id: "0x16474f7a4f58c3c94d41999d11657c0f43b87332",
    time: "16:00",
    amount1: "$4.00",
    amount2: "$36.00",
  },
  {
    id: "0x16474f7a4f58c3c94d41999d11657c0f43b87332",
    time: "16:00",
    amount1: "$4.00",
    amount2: "$36.00",
  },
];
function Transactions() {
  return (
    <>
      <div className="main-table">
        <div className="title">
          <img
            variant="top"
            src={imageUrl("table.png")}
            className="logo-sales"
            alt=""
          />
          <div className="heading">
            <h5>Latest Transactions</h5>
          </div>
        </div>
        <Table responsive className="custom-table">
          <thead className="t-head">
            <tr className="tr">
              {heading.map((_, index) => (
                <th key={index} className="heading-inside">
                  {_.id}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {detailsData.map((_, index) => (
              <tr key={index}>
                <td className="hash-id"> {_.id}</td>
                <td>
                  <span className="mobile-td-heading ">Time: </span> {_.time}
                </td>
                <td>
                  <span className="mobile-td-heading ">Amount($$$) </span>{" "}
                  {_.amount1}
                </td>
                <td>
                  <span className="mobile-td-heading ">Amount(USD) </span>{" "}
                  {_.amount2}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Transactions;
