import styled from "styled-components";
import airplaneImg from "../assets/airplane.svg";
const AirplaneContainer = styled.div`
  margin-left: 85%;
`;
const AirplaneImage = styled.img`
  max-width: 100%;
`;
const Airplane = () => {
  return (
    <AirplaneContainer>
      <AirplaneImage src={airplaneImg} alt="airplane image" />
    </AirplaneContainer>
  );
};

export default Airplane;
