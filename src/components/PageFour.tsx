import styled from "styled-components";
import flyingImg from "../assets/pageFour/flying.svg";

const PageFourContainer = styled.div`
  margin-top: 150px;
  display: flex;
  gap: 47px;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 50px;
    align-items: center;
  }
`;
//   left container //
const PageFourLeftContainer = styled.div`
  flex: 1;
`;
const PageFourImage = styled.img`
  max-width: 100%;
`;
//   right container //
const PageFourRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;
  gap: 40px;
  @media (max-width: 1200px) {
    gap: 20px;
  }
`;
const PageFourRightContainerTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;

  /* #0F222B */

  color: #0f222b;
  @media (max-width: 1200px) {
    font-size: 24px;
    line-height: 36px;
    text-align: center;
  }
`;
const PageFourRightContainerSub = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;

  color: #0f222b;
  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 27px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
  }
`;
const ExploreNow = styled.div`
  background: #ff980f;
  border-radius: 7px;
  max-width: 200px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 173.5%;
  &:hover {
    cursor: pointer;
  }
  /* identical to box height, or 35px */

  /* #0F222B */

  color: #0f222b;
  text-align: center;
  padding: 18px 54px;
  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 173.5%;
    padding: 10px 30px;
    margin: 10px auto;
  }
`;
const PageFour = () => {
  return (
    <PageFourContainer>
      <PageFourRightContainer>
        <PageFourRightContainerTitle>
          Make your Hassle-Free travel plans now!
        </PageFourRightContainerTitle>
        <PageFourRightContainerSub>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </PageFourRightContainerSub>
        <ExploreNow>Explore Now</ExploreNow>
      </PageFourRightContainer>
      <PageFourLeftContainer>
        <PageFourImage src={flyingImg} alt="traveller" />
      </PageFourLeftContainer>
    </PageFourContainer>
  );
};

export default PageFour;
