import styled from "styled-components";
import logoImg from "../assets/footer/logo.svg";
import linkedinImg from "../assets/footer/linkedin.svg";
import twitterImg from "../assets/footer/twitter.svg";
import messengerImg from "../assets/footer/messenger.svg";
import twooImg from "../assets/footer/twoo.svg";

const Container = styled.div`
  margin-top: 110px;
`;
const FooterContainer = styled.div`
  display: flex;
  gap: 60px;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 40px;
  }
`;
//   child 1 //
const FooterChild1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 26px;
`;
const FooterChild1Logo = styled.img`
  max-width: 98px;
`;
const FooterChild1Text = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  letter-spacing: -0.02em;

  /* #0F222B */

  color: #0f222b;
`;
const SocialLogoConatiner = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const LinkidinLogo = styled.img``;
const TwitterLogo = styled.img``;
const MessengerLogo = styled.img``;
const TwooLogo = styled.img``;
//   global styles //
const FooterChildTitleStyle = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  /* identical to box height, or 114% */

  /* #0F222B */

  color: #0f222b;
`;
const FooterChildSubStyle = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* #0F222B */

  color: #0f222b;
`;
// child 2 //
const FooterChild2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 26px;
`;
// child 3 //
const FooterChild3 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 26px;
`;
// child 4 //
const FooterChild4 = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 26px;
`;
// email and subscribe input //
const SubscribeContainer = styled.div`
  max-width: 200px;
  background: #f8f8f8;
  border-radius: 6px;
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 0px;
  }
`;
const EmailInput = styled.input`
  padding: 15px;
  &::placeholder {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 162% */

    letter-spacing: -0.02em;

    color: #212121;

    opacity: 0.2;
  }
`;
const SubscribeButton = styled.button`
  height: 100%;
  padding: 0 20px;
  background: #0f222b;
  border-radius: 6px;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */

  letter-spacing: -0.02em;

  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;
const Child4Sub = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  letter-spacing: -0.02em;

  /* #0F222B */

  color: #0f222b;

  opacity: 0.5;
`;
//   footer line //
const FooterLine = styled.div`
  max-width: 1200px;
  height: 0.5px;
  /* #0F222B */

  background: #0f222b;
  margin-top: 40px;
`;
//   copyright container //
const CopyRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const CopyRightText = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */

  text-align: center;
  letter-spacing: -0.02em;

  /* #0F222B */

  color: #0f222b;
`;
const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <FooterChild1>
          <FooterChild1Logo src={logoImg} alt="logo" />
          <FooterChild1Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </FooterChild1Text>
          <SocialLogoConatiner>
            <LinkidinLogo src={linkedinImg} alt="linkedin" />
            <MessengerLogo src={messengerImg} alt="messenger" />
            <TwitterLogo src={twitterImg} alt="twitter" />
            <TwooLogo src={twooImg} alt="twoo" />
          </SocialLogoConatiner>
        </FooterChild1>
        {/* child 2 */}
        <FooterChild2>
          <FooterChildTitleStyle>Company</FooterChildTitleStyle>
          <FooterChildSubStyle>About Us</FooterChildSubStyle>
          <FooterChildSubStyle>Careers</FooterChildSubStyle>
          <FooterChildSubStyle>Blog</FooterChildSubStyle>
          <FooterChildSubStyle>Pricing</FooterChildSubStyle>
        </FooterChild2>
        {/* child 3 */}
        <FooterChild3>
          <FooterChildTitleStyle>Resources</FooterChildTitleStyle>
          <FooterChildSubStyle>Proposal Template</FooterChildSubStyle>
          <FooterChildSubStyle>Invoice Template</FooterChildSubStyle>
          <FooterChildSubStyle>Tutorial</FooterChildSubStyle>
          <FooterChildSubStyle>How to write a contract</FooterChildSubStyle>
        </FooterChild3>
        {/* child 4 */}
        <FooterChild4>
          <FooterChildTitleStyle>Join Our Newsletter</FooterChildTitleStyle>
          <SubscribeContainer>
            <EmailInput type="email" placeholder="Your email address" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </SubscribeContainer>
          <Child4Sub>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Child4Sub>
        </FooterChild4>
      </FooterContainer>
      <FooterLine />
      <CopyRightContainer>
        <CopyRightText>
          Copyright @ SRSUIUX 2022. All Rights Reserved.
        </CopyRightText>
        <CopyRightText>
          Created by <strong>Aswin Vinod</strong>
        </CopyRightText>
      </CopyRightContainer>
    </Container>
  );
};

export default Footer;
