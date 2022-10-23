import './App.css';
import Main from './components/main/Main';
import BottomSlider from "./components/bottomSlider/BottomSlider";
import Winers from "../src/components/winers/Winers";
import News from './components/news/News';
import Boxes from './components/boxes/Boxes';

function App() {
  return (
    <>
      <Main />
      <BottomSlider />
      <Winers />
      <News />
      <Boxes />
    </>
  );
}

export default App;
