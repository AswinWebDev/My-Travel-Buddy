import styled from "styled-components";
import dottedImg from "../assets/dotted.svg";
const DottedLineContainer = styled.div`
  position: absolute;
  z-index: -1;
  top: 750px;
  left: 500px;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const DottedLineImage = styled.img``;
const DottedLine = () => {
  return (
    <DottedLineContainer>
      <DottedLineImage src={dottedImg} alt="dotted line image" />
    </DottedLineContainer>
  );
};

export default DottedLine;
