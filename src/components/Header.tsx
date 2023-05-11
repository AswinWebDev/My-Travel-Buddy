import styled from "styled-components";
import headerImage from "../assets/header/headerFirst.svg";
import balloonImage from "../assets/header/balloon.svg";
import heartImage from "../assets/header/heart.svg";
import location from "../assets/header/locationicon.svg";
//
import globeBlackImg from "../assets/icons/globeBlack.svg";
import downArrowImg from "../assets/icons/downArrow.svg";
import calenderImg from "../assets/icons/calender.svg";
import verticalLineImg from "../assets/icons/vertical.svg";

const Header = () => {
  const HeaderContainer = styled.div`
    margin-top: 35px;
    text-align: center;
    position: relative;
  `;
  const HeaderContainerImage = styled.img`
    max-width: 100%;
  `;
  const BalloonImg = styled.img`
    max-width: 100%;
    position: absolute;
    left: 45%;
    top: -5%;
    @media (max-width: 1200px) {
      max-width: 10%;
    }
  `;
  const HeartImg = styled.img`
    max-width: 100%;
    position: absolute;
    right: -1%;
    @media (max-width: 1200px) {
      max-width: 10%;
    }
  `;
  const LocationImg = styled.img`
    max-width: 100%;
    position: absolute;
    left: 7%;
    top: 5%;
    @media (max-width: 1200px) {
      max-width: 8%;
    }
  `;
  // header title //
  const HeaderTitle = styled.div`
    position: absolute;
    top: 17%;
    left: 4%;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;

    /* #0F222B */

    color: #0f222b;
    text-align: left;
    @media (max-width: 1200px) {
      font-size: 24px;
      line-height: 36px;
      top: 20%;
    }
    @media (max-width: 768px) {
      font-size: 10px;
      line-height: 15px;
      top: 30%;
    }
  `;
  const HeaderTitleSub = styled.div`
    position: absolute;
    max-width: 425px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;

    color: #000000;
    text-align: left;
    top: 55%;
    left: 4%;
    @media (max-width: 1200px) {
      max-width: 300px;
      font-size: 14px;
      line-height: 15px;
      top: 40%;
    }
    @media (max-width: 768px) {
      font-size: 8px;
      line-height: 10px;
      top: 55%;
      max-width: 200px;
    }
  `;
  // header box //
  const HeaderBox = styled.div`
    position: absolute;
    padding: 7px;
    display: flex;
    gap: 17px;
    left: 4%;
    bottom: 20%;
    background: #fee2b3;
    border-radius: 10px;
    @media (max-width: 1200px) {
      bottom: 10%;
    }
    @media (max-width: 768px) {
      bottom: 5%;
    }
  `;
  const HeaderBoxChild1Container = styled.div`
    display: flex;
    align-items: center;
    gap: 4.63px;
  `;
  const GlobeBlack = styled.img``;
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
      font-size: 8px;
    }
  `;
  const DownArrow = styled.img``;
  const VerticalLine = styled.img``;

  const HeaderBoxChild2Container = styled.div`
    display: flex;
    align-items: center;
    gap: 4.63px;
  `;
  const Calender = styled.img``;
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
      font-size: 10px;
    }
  `;
  return (
    <HeaderContainer>
      <HeaderContainerImage src={headerImage} alt="headerImage" />
      <BalloonImg src={balloonImage} alt="balloonImage" />
      <HeartImg src={heartImage} alt="heartImage" />
      <LocationImg src={location} alt="location" />
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
    </HeaderContainer>
  );
};

export default Header;
