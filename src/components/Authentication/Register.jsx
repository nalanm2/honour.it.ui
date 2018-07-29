import React, { Component } from "react";
import styled from "styled-components";
import Icon from "../Icons/Icons.jsx";
import HonourSelect from "../Common/Select.jsx";

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
const selectStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: "#e7e8e9",
    width: "300px",
    borderRadius: "none",
    height: "50px"
  }),
  option: styles => ({
    ...styles,
    backgroundColor: "#e7e8e9",
    borderBottom: "1px solid #ccc",
    textAlign: "right",
    cursor: "pointer"
  }),
  input: styles => ({ ...styles }),
  placeholder: styles => ({ ...styles }),
  singleValue: styles => ({ ...styles })
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

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
  }

  handleAccountingSoftwareChange(e) {
    const { setFieldValue } = this.props;
    this.setState({ selectedOption: e });
    setFieldValue(`accountingSoftware`, e.value);
  }

  handleGoToLogin() {
    const { rootProps } = this.props.rootProps;
    rootProps.push(`/`);
  }

  render() {
    const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    } = this.props;

    const { selectedOption } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <LoginBackgroundTop>
          <Circle>
            <Icon icon="register" isFlip={true} height={30} width={30} />
          </Circle>
          <br />
          <span style={Header}>REGISTER</span>
        </LoginBackgroundTop>
        <Triangle />
        <LoginBackgroundMiddle>
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
                name="firstname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstname}
                placeholder="First Name"
                style={TextBoxStyle}
              />
              {touched.firstname &&
                errors.firstname && <Error>{errors.firstname}</Error>}
            </InlineItem>
          </InlineDiv>
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
                type="lastname"
                name="lastname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastname}
                placeholder="Last Name"
                style={TextBoxStyle}
              />
              {touched.lastname &&
                errors.lastname && <Error>{errors.lastname}</Error>}
            </InlineItem>
          </InlineDiv>
          <br />
          <InlineDiv>
            <InlineItem>
              <IconBox>
                <Icon icon="email" isFlip={true} height={25} width={25} />
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
                placeholder="Email"
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
              <IconBox>
                <Icon icon="business" isFlip={true} height={25} width={25} />
              </IconBox>
            </InlineItem>
            <InlineItem>
              <input
                type="text"
                type="businessname"
                name="businessname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.businessname}
                placeholder="Business Name"
                style={TextBoxStyle}
              />
              {touched.businessname &&
                errors.businessname && <Error>{errors.businessname}</Error>}
            </InlineItem>
          </InlineDiv>
          <br />
          <InlineDiv>
            <InlineItem>
              <IconBox>
                <Icon icon="settings" isFlip={true} height={25} width={25} />
              </IconBox>
            </InlineItem>
            <InlineItem>
              <input
                type="text"
                type="abn"
                name="abn"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.abn}
                placeholder="ABN"
                style={TextBoxStyle}
              />
              {touched.abn && errors.abn && <Error>{errors.abn}</Error>}
            </InlineItem>
          </InlineDiv>
          <br />
          <InlineDiv>
            <InlineItem>
              <IconBox>
                <Icon icon="accounting" isFlip={true} height={25} width={25} />
              </IconBox>
            </InlineItem>
            <InlineItem>
              <HonourSelect
                name="accountingSoftware"
                placeholder="Accounting Software"
                value={this.state.selectedOption}
                onChange={e => this.handleAccountingSoftwareChange(e)}
                onBlur={handleBlur}
                options={[
                  { value: "MYOB AccountRight", label: "MYOB AccountRight" },
                  { value: "MYOB Essentials", label: "MYOB Essentials" },
                  { value: "XERO", label: "XERO" },
                  { value: "Reckon Accounts", label: "Reckon Accounts" },
                  { value: "Quickbooks", label: "Quickbooks" }
                ]}
                styles={selectStyles}
              />
              {touched.accountingSoftware &&
                errors.accountingSoftware && (
                  <Error>{errors.accountingSoftware}</Error>
                )}
            </InlineItem>
          </InlineDiv>
          <br />
          <InlineDiv>
            <InlineItem>
              <input type="checkbox" style={Gray} /> I agree to the
            </InlineItem>
            <InlineItem>
              <a href="#" style={Gray}>
                Terms of Service
              </a>
            </InlineItem>
          </InlineDiv>
          <br />
          <InlineDiv>
            <InlineItem>
              <button style={ButtonStyle} type="submit" disabled={isSubmitting}>
                SIGN UP
              </button>
            </InlineItem>
          </InlineDiv>
          <br />
        </LoginBackgroundMiddle>
        <LoginBackgroundBottom>
          <InlineDiv>
            <InlineItem>
              <span style={White}>Already a Member? &nbsp;</span>
              <a href="#" onClick={e => this.handleGoToLogin(e)} style={White}>
                Sign In
              </a>
            </InlineItem>
          </InlineDiv>
        </LoginBackgroundBottom>
      </form>
    );
  }
}

export default Register;
