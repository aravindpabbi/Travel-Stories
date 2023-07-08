import { useEffect, useState } from 'react';
import './App.css';
import { Spinner } from './components/Spinner';

function App() {
  const [spinner,setSpinner] = useState(true);
  useEffect(() => {
    setSpinner(true)
  },[])
  return (
    
    <div className="App">
      <header className="App-header">
        {
          spinner ? <Spinner/> : <p>Site has been loaded</p>
        }
      </header>
    </div>
  );
}

export default App;
