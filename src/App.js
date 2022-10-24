import './App.css';
import Main from './components/main/Main';
import BottomSlider from "./components/bottomSlider/BottomSlider";
import Winers from "../src/components/winers/Winers";
import News from './components/news/News';
import Boxes from './components/boxes/Boxes';
import ColumnNews from './components/columnNews/ColumnNews';
import OurInstitutes from "./components/ourInstitutes/OurInstitutes";
import SanSport from './components/sansport/SanSport';
import Coopearate from './components/cooperate/Coopearate';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Main />
      <BottomSlider />
      <Winers />
      <News />
      <Boxes />
      <ColumnNews />
      <OurInstitutes />
      <SanSport />
      <Coopearate />
      <Footer />
    </>
  );
}

export default App;
