import styled from "styled-components";
import GlobeImg from "../assets/icons/globe.svg";
import NotificationImg from "../assets/icons/notification.svg";
import ProfilePicImg from "../assets/icons/profilePic.svg";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NavbarContainerLeft = styled.div`
  display: flex;
  gap: 12.5px;
  align-items: center;
`;

//  logo style //
const SajiburSagorLogo = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 23px;
`;
const SajiburSagorLogoSpanBlack = styled.span`
  color: #000000;
`;
const SajiburSagorLogoSpanGrey = styled.span`
  color: #0f222b;
  margin-left: 40px;
`;
const SajiburSagorLogoSpanOrange = styled.span`
  color: #ff7a00;
`;
// vertical line //
const VerticalLine = styled.div`
  width: 0px;
  height: 39.5px;
  color: #0f222b;
  border: 1px solid #0f222b;
`;
const GlobeIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
const BangladeshText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  /* #0F222B */

  color: #0f222b;
`;
//   navbar right //
const NavbarContainerRight = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const Home = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
const About = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
const Services = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
const Pricing = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
//   notification icon //
const NotificationIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
//  profile pic //
const ProfilePicIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContainerLeft>
        {/* logo */}
        <SajiburSagorLogo>
          <SajiburSagorLogoSpanBlack>Sa</SajiburSagorLogoSpanBlack>
          <SajiburSagorLogoSpanOrange>ji</SajiburSagorLogoSpanOrange>
          <SajiburSagorLogoSpanBlack>bur</SajiburSagorLogoSpanBlack>
          <br />
          <SajiburSagorLogoSpanGrey>Sagor</SajiburSagorLogoSpanGrey>
        </SajiburSagorLogo>
        {/* vertical line */}
        <VerticalLine></VerticalLine>
        {/* globe icon */}
        <GlobeIcon src={GlobeImg} alt="globe icon" />
        {/* bangladesh text */}
        <BangladeshText>Bangladesh.</BangladeshText>
      </NavbarContainerLeft>
      {/* navbar right */}
      <NavbarContainerRight>
        <Home>Home</Home>
        <About>About</About>
        <Services>Services</Services>
        <Pricing>Pricing</Pricing>
        <NotificationIcon src={NotificationImg} alt="notification icon" />
        <ProfilePicIcon src={ProfilePicImg} alt="profile pic icon" />
      </NavbarContainerRight>
    </NavbarContainer>
  );
};

export default Navbar;
