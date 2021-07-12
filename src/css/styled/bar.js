import styled from "styled-components";

const Bar = styled.div`
  width: 5px;
  margin: 0px 2px;
  height: ${({ height }) => (height ? height : "50%")};
  width: ${({ width }) => (width ? width : "10%")};
  background-color: ${(props) =>
    props.sorted ? "green" : props.highlighted ? "red" : "turquoise"};
  
}`;

export default Bar;
