import styled from "styled-components";
import leftArrowImg from "../assets/icons/leftArrow.svg";
import rightArrowImg from "../assets/icons/rightArrow.svg";
// places image //
import place1Img from "../assets/pageThree/place1.svg";
import place2Img from "../assets/pageThree/place2.svg";
import place3Img from "../assets/pageThree/place3.svg";
import place4Img from "../assets/pageThree/place4.svg";
import place5Img from "../assets/pageThree/place5.svg";
import place6Img from "../assets/pageThree/place6.svg";
// places icons //
import locationImg from "../assets/pageThree/location.svg";

const PageThreeContainer = styled.div`
  margin-top: 170px;
  @media (max-width: 1200px) {
    margin-top: 50px;
  }
`;
const PageThreeTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  /* identical to box height */

  /* #0F222B */

  color: #0f222b;
  text-align: center;
`;
const PageThreeSub = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;

  color: #0f222b;
  text-align: center;
  margin-top: 20px;
`;
const PopularPlacesContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;
const PopularPlacesText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  /* identical to box height */

  /* #0F222B */

  color: #0f222b;
`;
const ArrowBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const ArrowLeftBox = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
const ArrowRightBox = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
const PlacesFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 30px;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;
const PlacesItemBox = styled.div`
  position: relative;
`;
const PlacesImg = styled.img`
  max-width: 100%;
`;
const PlacesItemTextBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 10%;
  left: 10%;
  gap: 15px;
  align-items: center;
`;
const PlacesItemIcon = styled.img``;

const PlacesItemText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;

  /* #0F222B */

  color: #0f222b;
`;
const PageThree = () => {
  return (
    <PageThreeContainer>
      <PageThreeTitle>Let our experts plan your trip</PageThreeTitle>
      <PageThreeSub>
        Lorem Ipsum is simply dummy text of the printing and
        <br /> typesetting industry.
      </PageThreeSub>
      <PopularPlacesContainer>
        <PopularPlacesText>Popular Places</PopularPlacesText>
        <ArrowBoxContainer>
          <ArrowLeftBox src={leftArrowImg} alt="left arrow button" />
          <ArrowRightBox src={rightArrowImg} alt="right arrow button" />
        </ArrowBoxContainer>
      </PopularPlacesContainer>
      <PlacesFlexContainer>
        <PlacesItemBox>
          <PlacesImg src={place1Img} alt="place 1" />
          <PlacesItemTextBox>
            <PlacesItemIcon src={locationImg} alt="location icon" />
            <PlacesItemText>80 Wood St. Glen Ellyn, IL 60137</PlacesItemText>
          </PlacesItemTextBox>
        </PlacesItemBox>
        <PlacesItemBox>
          <PlacesImg src={place2Img} alt="place 2" />
          <PlacesItemTextBox>
            <PlacesItemIcon src={locationImg} alt="location icon" />
            <PlacesItemText>515 Jefferson St. Helotes, TX 78023</PlacesItemText>
          </PlacesItemTextBox>
        </PlacesItemBox>
        <PlacesItemBox>
          <PlacesImg src={place3Img} alt="place 3" />
          <PlacesItemTextBox>
            <PlacesItemIcon src={locationImg} alt="location icon" />
            <PlacesItemText>21 Pineknoll Ave. Greensboro, NC.</PlacesItemText>
          </PlacesItemTextBox>
        </PlacesItemBox>
        <PlacesItemBox>
          <PlacesImg src={place4Img} alt="place 4" />
          <PlacesItemTextBox>
            <PlacesItemIcon src={locationImg} alt="location icon" />
            <PlacesItemText>SE. Nichols Ave. Halethorpe, MD</PlacesItemText>
          </PlacesItemTextBox>
        </PlacesItemBox>
        <PlacesItemBox>
          <PlacesImg src={place5Img} alt="place 5" />
          <PlacesItemTextBox>
            <PlacesItemIcon src={locationImg} alt="location icon" />
            <PlacesItemText>Vine Court East Stroudsburg</PlacesItemText>
          </PlacesItemTextBox>
        </PlacesItemBox>
        <PlacesItemBox>
          <PlacesImg src={place6Img} alt="place 6" />
          <PlacesItemTextBox>
            <PlacesItemIcon src={locationImg} alt="location icon" />
            <PlacesItemText>Southampton Drive Avon Lake</PlacesItemText>
          </PlacesItemTextBox>
        </PlacesItemBox>
      </PlacesFlexContainer>
    </PageThreeContainer>
  );
};

export default PageThree;
