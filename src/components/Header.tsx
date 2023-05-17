import styled from "styled-components";
// import headerImage from "../assets/header/headerFirst.svg";
import headerImage from "../assets/header/headerPic.svg";
//
import globeBlackImg from "../assets/icons/globeBlack.svg";
import downArrowImg from "../assets/icons/downArrow.svg";
import calenderImg from "../assets/icons/calender.svg";
import verticalLineImg from "../assets/icons/vertical.svg";

const HeaderContainer = styled.div`
  margin-top: 35px;
  text-align: center;
  position: relative;
`;
const HeaderContainerImage = styled.img`
  max-width: 100%;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const HeaderContents = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    top: 25%;
    left: 3%;
    
    @media (max-width: 1200px) {
      gap: 1rem;
      top: 20%;
      position: static;
      align-items: center;
    }
    @media (max-width: 768px) {
      gap: 0.9rem;
  `;

// header title //
const HeaderTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;

  /* #0F222B */

  color: #0f222b;
  text-align: left;
  @media (max-width: 1200px) {
    font-size: 35px;
    line-height: 50px;
    top: 20%;
    text-align: center;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    top: 30%;
  }
`;
const HeaderTitleSub = styled.div`
  max-width: 425px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;

  color: #000000;
  text-align: left;

  @media (max-width: 1200px) {
    max-width: 500px;
    top: 40%;
    text-align: center;
  }
  @media (max-width: 768px) {
    top: 55%;
    max-width: 300px;
    margin-top: 20px;
  }
`;
// header box //
const HeaderBox = styled.div`
  padding: 7px;
  display: flex;
  justify-content: space-between;
  background: #fee2b3;
  border-radius: 10px;
  @media (max-width: 1200px) {
    gap: 10px;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
  }
`;
const HeaderBoxChild1Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4.63px;
`;
const GlobeBlack = styled.img`
  @media (max-width: 1200px) {
    width: 20px;
  }
`;
const DhakaAndDate = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 157.5%;
  /* identical to box height, or 16px */

  /* #0F222B */

  color: #0f222b;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`;
const DownArrow = styled.img``;
const VerticalLine = styled.img``;

const HeaderBoxChild2Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4.63px;
`;
const Calender = styled.img`
  @media (max-width: 1200px) {
    width: 20px;
  }
`;
// Get Started Button //
const GetStartedButton = styled.div`
  background: #fdbc0c;
  border-radius: 6px;
  padding: 11px 26px;
  @media (max-width: 1200px) {
    padding: 5px 10px;
  }
`;
const GetStartedButtonText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  /* #0F222B */

  color: #0f222b;
  @media (max-width: 1200px) {
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContainerImage src={headerImage} alt="headerImage" />
      <HeaderContents>
        <HeaderTitle>
          Traveling opens
          <br />
          door to creating
          <br />
          memories
        </HeaderTitle>
        <HeaderTitleSub>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </HeaderTitleSub>
        {/* header box */}
        <HeaderBox>
          <HeaderBoxChild1Container>
            <GlobeBlack src={globeBlackImg} alt="globeBlackImg" />
            <DhakaAndDate> Dhaka, Bangladesh.</DhakaAndDate>
            <DownArrow src={downArrowImg} alt="downArrowImg" />
          </HeaderBoxChild1Container>
          <VerticalLine src={verticalLineImg} alt="verticalLineImg" />
          <HeaderBoxChild2Container>
            <Calender src={calenderImg} alt="calenderImg" />
            <DhakaAndDate>29 Jan 2022</DhakaAndDate>
            <DownArrow src={downArrowImg} alt="downArrowImg" />
          </HeaderBoxChild2Container>
          <GetStartedButton>
            <GetStartedButtonText>Get Start</GetStartedButtonText>
          </GetStartedButton>
        </HeaderBox>
      </HeaderContents>
    </HeaderContainer>
  );
};

export default Header;
