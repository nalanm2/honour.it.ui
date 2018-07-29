import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import * as actions from "./dashboardActions";

import styled from "styled-components";

const Background = styled.div`
  & {
    background-color: #cacaca;
    width: 100%;
    min-height: 1000px;
    height: 100%;
    margin: 0 0 0 auto;
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }
`;

const Content = styled.div`
  & {
    text-align: center;
    height: 80%;
    background-color: #cacaca;
  }
`;

const content = {
  position: "relative",
  minheight: "100vh",
  background: "#CACACA",
  width: "550px",
  margin: 0,
  padding: "10vmin",
  display: "flex",
  flexdirection: "column",
  overflow: "hidden"
};

const contentTwo = {
  position: "relative",
  minheight: "100vh",
  verticalalign: "text-top",
  background: "#CACACA",
  margin: 0,
  padding: "5vmin",
  display: "flex",
  flexdirection: "column",
  overflow: "hidden",
  justifyContent: "space-between",
  width: "calc(100vw - 550px)"
};

const poster = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "50% 50%"
};

const formTitle = {
  color: "#fff",
  fontFamily: "Raleway, sans-serif",
  fontWeight: 700,
  textTransform: "uppercase",
  fontSize: "5vw",
  position: "relative",
  float: "left",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "3rem"
};

const formSubtitle = {
  color: "#fff",
  fontFamily: "Raleway, sans-serif",
  textTransform: "none",
  fontSize: "2vw",
  position: "relative",
  padding: "0.5rem"
};

const logo = {
  float: "right",
  height: "31px",
  width: "199px",
  margin: "2em",
  "-webkit-filter": "brightness(0) invert(1)",
  filter: "brightness(0) invert(1)"
};

const copyRight = {
  float: "right",
  color: "#fff",
  position: "fixed",
  fontSize: "1.2vw",
  right: 20,
  bottom: 20
};

const mapStateToProps = state => {
  const { DashBoardReducer } = state;
  return {
    ...DashBoardReducer
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...actions
    },
    dispatch
  );

class DashBoardContainer extends React.Component {
  render() {
    return (
      <Background>
        <div style={content}>
          <Content>
            <div style={formSubtitle}>
              You are successfully logged in. Dashboard in progress
            </div>
            {/* <DashBoardFormik rootProps={this.props} /> */}
          </Content>
        </div>
        <div style={contentTwo}>
          <div style={poster}>
            <img src={require("../logo.png")} style={logo} />
            <div style={formTitle}>
              Business to Business Payment Instantly
              <div style={formSubtitle}>
                Using Australia's new payments platform, adopting ISO20022
                standards, making invoicing and payments seamless in your
                accounting package.
              </div>
            </div>
          </div>
          <span style={copyRight}>
            &#169; 2018 Richard Edmonds &#38; Scott Hutchison. All rights
            reserved.
          </span>
        </div>
      </Background>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DashBoardContainer));
