import React from "react";
import Row from "./row";
import Col from "./col";
export default () => {
  return (
    <div data-test="row-test" style={{ padding: "20px" }}>
      <Row>
        <Col span={24} style={{ height: "80px", backgroundColor: "#2170bb" }}>
          123
        </Col>
      </Row>
      <Row gutter={10} align="middle">
        <Col span={8}>
          <div style={{ height: "80px", backgroundColor: "#2170bb" }}>Col1</div>
        </Col>
        <Col offset={8} span={8}>
          <div style={{ height: "100px", backgroundColor: "#3170bb" }}>
            Col2
          </div>
        </Col>
      </Row>
      <Row gutter={10} align="bottom">
        <Col span={4}>
          <div style={{ height: "80px", backgroundColor: "#2170bb" }}>Col1</div>
        </Col>
        <Col span={8}>
          <div style={{ height: "100px", backgroundColor: "#3170bb" }}>
            Col2
          </div>
        </Col>
        <Col push={3} span={9}>
          <div style={{ height: "130px", backgroundColor: "#2170bb" }}>
            Col3
          </div>
        </Col>
        <Col span={4}>
          <div style={{ height: "80px", backgroundColor: "#2170bb" }}>Col1</div>
        </Col>
        <Col span={8}>
          <div style={{ height: "100px", backgroundColor: "#3170bb" }}>
            Col2
          </div>
        </Col>
        <Col span={8}>
          <div style={{ height: "130px", backgroundColor: "#2170bb" }}>
            Col3
          </div>
        </Col>
        <Col pull={1} span={3}>
          <div style={{ height: "100px", backgroundColor: "#3170bb" }}>
            Col2
          </div>
        </Col>
      </Row>
    </div>
  );
};
