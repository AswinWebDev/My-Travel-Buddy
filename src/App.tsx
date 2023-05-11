import Header from "./components/Header";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const App = () => {
  const AppContainer = styled.div`
    padding: 20px 9rem;
    @media (max-width: 1200px) {
      padding: 20px 0rem;
    }
  `;
  return (
    <AppContainer>
      <Navbar />
      <Header />
    </AppContainer>
  );
};

export default App;
