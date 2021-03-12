import logo from './logo.svg';
import './App.css';
import LikeCode from './components/LikeCode/LikeCode';
import APICall from './components/APICall/APICall';
import MailDetail from './components/MailDetail/MailDetail';
import MealFinder from './components/MealFinder/MealFinder';



function App() {

  return (
    <div className="App">
      <MealFinder/>
      <MailDetail/>
      <APICall/>
     <LikeCode/>
     
    </div>
  );
}

export default App;
