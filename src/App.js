import { useState } from 'react';
import './App.css';
import Intro from './Intro.js';
import Main from './Main';

function App() {

  const [nextPage, setNextPage] = useState(false)

  const gotoNextPage = () => setNextPage(true)

  return (
    <div>
      {nextPage ? <Main/> : <Intro gotoNextPage={gotoNextPage}></Intro>}
    </div>
  );
}

export default App;
