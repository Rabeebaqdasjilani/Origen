import CallsAndCharts from "components/CallsAndCharts";
import React from "react";

import { Header } from "../components/common/index";
import {
  DataConsumption,
  LatestBlocks,
  Market,
  SalesCards,
  Sfts,
  TokenCards,
  TotalCalls,
  Transactions,
} from "../components/index";
function Home() {
  return (
    <div className="main">
      {/* <div className="bg-image">
        <img src={imageUrl("home-bg-final.png")} alt="" />
      </div>{" "} */}
      <Header />
      <div className="container-fluid px-3">
        <div className="row mt-lg-4">
          <div className="col-12 col-md-12 col-lg-12 col-xl-6">
            <div className="row">
              <div className="col-lg-6 mt-4">
                <SalesCards />
              </div>
              <div className="col-lg-6 mt-4">
                <TotalCalls />
              </div>
              <div className="col-lg-6 mt-4">
                <DataConsumption />
              </div>
              <div className="col-lg-6 mt-4">
                <Market />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-12 col-xl-6">
            <div className="row">
              <div className="col-lg-6 mt-4">
                <TokenCards />
              </div>
              <div className="col-lg-6 mt-4">
                <Sfts />
              </div>
              <div className="col-lg-6 mt-4">
                <LatestBlocks />
              </div>
              <div className="col-lg-6 mt-4">
                <CallsAndCharts />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-12">
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
