import styled from "styled-components";
import travellerImg from "../assets/PageTwo/traveller.svg";

const PageTwoContainer = styled.div`
  margin-top: 150px;
  display: flex;
  gap: 47px;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 0px;
    align-items: center;
  }
`;
//   left container //
const PageTwoLeftContainer = styled.div`
  flex: 1;
`;
const PageTwoImage = styled.img`
  max-width: 100%;
`;
//   right container //
const PageTwoRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;
`;
const PageTwoRightContainerTitle = styled.div`
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
const PageTwoRightContainerSub = styled.div`
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
const PageTwo = () => {
  return (
    <PageTwoContainer>
      <PageTwoLeftContainer>
        <PageTwoImage src={travellerImg} alt="traveller" />
      </PageTwoLeftContainer>
      <PageTwoRightContainer>
        <PageTwoRightContainerTitle>
          A life without journeys is one not lived at all
        </PageTwoRightContainerTitle>
        <PageTwoRightContainerSub>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </PageTwoRightContainerSub>
        <ExploreNow>Explore Now</ExploreNow>
      </PageTwoRightContainer>
    </PageTwoContainer>
  );
};

export default PageTwo;
