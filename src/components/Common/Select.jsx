import React from "react";
import ReactSelect from "react-select";
import styled from "styled-components";

const HonourSelect = styled(ReactSelect)`
  & .Select-control {
    width: 300px;
  }
`;

export default props => <HonourSelect {...props} />;
