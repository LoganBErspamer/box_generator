import {useState} from "react"
import logo from './logo.svg';
import './App.css';
import Formcom from './componets/Formcom';
import Boxdisplay from './componets/Boxdisplay';

function App() {
const [colorList, setColorList] = useState([])

  const handleNewColor = (newColor) =>{
setColorList([...colorList, newColor])
  }

  return (
    <div>
      <Formcom onNewColor = {handleNewColor}/>
      <Boxdisplay colorList={colorList}/>
    </div>
  );
}

export default App;
