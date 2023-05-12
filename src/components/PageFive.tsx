import styled from "styled-components";
import mountainsImg from "../assets/pageFive/image.png";
const PageFivecontainer = styled.div`
  margin-top: 150px;
  position: "relative";
  @media (max-width: 1200px) {
    margin-top: 50px;
  }
`;
const PageFiveImgContainer = styled.div`
  width: 100%;
  height: 421px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const FormContainer = styled.form`
  max-width: 285px;
  background: rgba(255, 255, 255, 0.27);
  backdrop-filter: blur(9.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 21px;
  padding: 54px 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  position: absolute;
  right: 20%;
  margin-top: 30px;
  @media (max-width: 1200px) {
    position: static;
    padding: 83px 50px;
    border-radius: 0px;
  }
`;
const InputBox = styled.input`
  width: 249px;
  height: 55px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 173.5%;
  background-color: rgba(168, 54, 24, 0.27);
  backdrop-filter: blur(9.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 9px;
  border-color: transparent;
  &::placeholder {
    color: #ffffff; /* Change to the desired color */
  }
  color: #ffffff;
`;
const PageFive = () => {
  return (
    <PageFivecontainer>
      <PageFiveImgContainer style={{ backgroundImage: `url(${mountainsImg})` }}>
        <FormContainer>
          <InputBox type="email" placeholder="Email" />
          <InputBox
            type="text"
            placeholder="Type Your Message.."
            style={{ height: "97px" }}
          />
          <InputBox
            type="submit"
            value="Send Now"
            style={{ borderRadius: "21px" }}
          />
        </FormContainer>
      </PageFiveImgContainer>
    </PageFivecontainer>
  );
};

export default PageFive;
