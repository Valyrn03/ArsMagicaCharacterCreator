import { ReactElement, SetStateAction, useState } from 'react'
import './App.css'
import { MagusCreationScreen } from './MagusCreation';
import { CompanionCreationScreen } from './CompanionCreation';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(DefaultScreen);

  function createGrog(){
    setCurrentScreen((): ReactElement => {return <><GrogCreationScreen /> <ResetButton /> </>});
  }

  function createCompanion(){
    setCurrentScreen((): ReactElement => {return <><CompanionCreationScreen /> <ResetButton /> </>});
  }

  function createMagus(){
    setCurrentScreen((): ReactElement => {return <><MagusCreationScreen /> <ResetButton/></>});
  }

  function DefaultScreen(): ReactElement{
    const characterOptions: ReactElement = <div className="characterSelector" id="optionButtons">
    <button onClick={createGrog}>Grog</button>
    <button onClick={createCompanion}>Companion</button>
    <button onClick={createMagus}>Magus</button>
  </div>
    document.getElementById("optionButtons")?.style.setProperty("--pageWidth", window.screen.width.toString());
    return <div className="pageOne">
      <h1 className="itBegins">Ars Magica Character Creator</h1>
      <h2>Character Type</h2>
      {characterOptions}
    </div>;
  }

  function ResetButton(): ReactElement {
    return <button onClick={reset} className="bottom">Reset</button>
  }

  function reset(){
    setCurrentScreen((): ReactElement => {return <DefaultScreen />});
  }

  return(<>
    {currentScreen}
  </>);
}

function GrogCreationScreen(): ReactElement{
  return <div>Why would you make a grog?</div>;
}

{/* <div>
    <h2>Character Type</h2>
    <div className="characterSelector">
      <button onClick={createGrog}>Grog</button>
      <button onClick={createCompanion}>Companion</button>
      <button onClick={createMagus}>Magus</button>
    </div>
  </div> */}