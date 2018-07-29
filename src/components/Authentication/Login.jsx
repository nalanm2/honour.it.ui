import React, { Component } from "react";
import styled from "styled-components";
import Icon from "../Icons/Icons.jsx";

const Header = {
  color: "#fff",
  textTransform: "uppercase",
  fontSize: "2em"
};

const LoginBackgroundTop = styled.div`
  & {
    width: 100%;
    height: 25%;
    padding: 0.5em;
    background-color: #ef6e7e;
    margin: 0 auto;
    position: relative;
  }
  &:after {
    border-right: solid 20px transparent;
    border-left: solid 20px transparent;
    border-top: solid 20px #ef6e7e;
    transform: translateX(-50%);
    position: absolute;
    z-index: 2;
    content: "";
    top: 100%;
    left: 50%;
    height: 0;
    width: 0;
  }
`;

const LoginBackgroundMiddle = styled.div`
  & {
    width: 100%;
    height: 55%;
    padding: 1em;
    background-color: #fff;
    margin: 0 auto;
  }
`;
const LoginBackgroundBottom = styled.div`
  & {
    width: 100%;
    height: 20%;
    padding: 1em;
    background-color: #ef6e7e;
    margin: 0 auto;
  }
`;

const InlineDiv = styled.div`
  & {
    width: 100%;
  }
`;

const InlineItem = styled.div`
  & {
    display: inline-block;
    vertical-align: text-top;
    margin: 0 auto;
  }
`;

const Circle = styled.div`
  & {
    border: 2px solid #fff;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    padding-top: 5px;
    display: inline-block;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
  }
`;

const White = {
  color: "#fff"
};

const Triangle = styled.div`
  & {
    border-top: 10px solid #ef6e7e;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    position: absolute;
    bottom: -10px;
    left: 20px;
  }
`;
const IconBox = styled.div`
  & {
    width: 50px;
    height: 50px;
    padding: 0.5em;
    background-color: #ef6e7e;
    margin: 0 auto;
  }
`;

const InlineRightItem = styled.div`
  & {
    float: right;
  }
`;

const TextBoxStyle = {
  width: "300px",
  height: "50px",
  padding: "0.5em",
  "background-color": "#e7e8e9",
  margin: "0 auto",
  border: "none"
};

const Gray = {
  color: "#999"
};

const Error = styled.div`
  & {
    color: #ef6e7e;
    text-align: right;
  }
`;

const ButtonStyle = {
  width: "350px",
  height: "50px",
  padding: "0.5em",
  "background-color": "#ef6e7e",
  margin: "0 auto",
  border: "none",
  color: "#fff",
  "font-weight": 600
};

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
  }

  componentWillReceiveProps(nextProps) {
    const { rootProps } = this.props;

    if (nextProps.values.submitted === true) {
      rootProps.history.push(`/home`);
    }
  }

  handleGoToRegister() {
    const { rootProps } = this.props;
    rootProps.history.push(`/register`);
  }

  handleAccountingSoftwareChange(e) {
    const { setFieldValue } = this.props;
    this.setState({ selectedOption: e });
    setFieldValue(`accountingSoftware`, e.value);
  }

  render() {
    const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      submitted,
      rootProps
    } = this.props;

    const { selectedOption } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <LoginBackgroundTop>
          <span style={Header}>LOGIN</span>
          <br />
          <br />
          <Circle>
            <Icon icon="password" isFlip={true} height={40} width={40} />
          </Circle>
        </LoginBackgroundTop>
        <Triangle />
        <LoginBackgroundMiddle>
          <br />
          <br />
          <InlineDiv>
            <InlineItem>
              <IconBox>
                <Icon icon="user" isFlip={true} height={25} width={25} />
              </IconBox>
            </InlineItem>
            <InlineItem>
              <input
                type="text"
                type="username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                placeholder="Username"
                style={TextBoxStyle}
              />
              {touched.username &&
                errors.username && <Error>{errors.username}</Error>}
            </InlineItem>
          </InlineDiv>
          <br />
          <InlineDiv>
            <InlineItem>
              <IconBox>
                <Icon icon="password" isFlip={true} height={25} width={25} />
              </IconBox>
            </InlineItem>
            <InlineItem>
              <input
                type="password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
                style={TextBoxStyle}
              />

              {touched.password &&
                errors.password && <Error>{errors.password}</Error>}
            </InlineItem>
          </InlineDiv>
          <br />

          <InlineDiv>
            <InlineItem>
              <button style={ButtonStyle} type="submit" disabled={submitted}>
                SIGN IN
              </button>
            </InlineItem>
          </InlineDiv>
          <br />
          <InlineDiv>
            <InlineRightItem>
              <a href="#" style={Gray}>
                Forget Password?
              </a>
            </InlineRightItem>
          </InlineDiv>
          <br />
          <br />
          <InlineDiv>
            <InlineRightItem>
              <span style={Gray}>Don't have an account?</span>
              <a
                href="#"
                onClick={e => this.handleGoToRegister(e)}
                style={Gray}
              >
                Sign Up
              </a>
            </InlineRightItem>
          </InlineDiv>
          <br />
          <br />
        </LoginBackgroundMiddle>
        <LoginBackgroundBottom>
          <span style={White}>Or you can login with one of the following</span>
          <br />
          <br />
          <InlineDiv>
            <InlineItem>
              <Icon icon="facebook" height={30} width={30} />
              <Icon icon="google" height={30} width={30} />
              <Icon icon="twitter" height={30} width={30} />
            </InlineItem>
          </InlineDiv>
        </LoginBackgroundBottom>
      </form>
    );
  }
}

export default Login;
