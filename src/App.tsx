import Header from "./components/Header";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";
import PageFive from "./components/PageFive";
import Footer from "./components/Footer";
import Airplane from "./components/Airplane";
import DottedLine from "./components/DottedLine";

const AppContainer = styled.div`
  padding: 20px 9rem;
  @media (max-width: 1200px) {
    padding: 20px 0rem;
  }
`;
const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Header />
      {/* elements */}
      <Airplane />
      <DottedLine />
      {/* elements */}
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <Footer />
    </AppContainer>
  );
};

export default App;
