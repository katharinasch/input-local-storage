import './App.css';
import { useEffect, useState} from 'react'


function App() {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem("value");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [agreed, setAgreed] = useState(())


  useEffect(() => {
    // This effect uses the `value` variable,
    // so it "depends on" `value`.
    console.log(value);
    localStorage.setItem("value", JSON.stringify(value));
  }, [value])  // pass `value` as a dependency
  return (
    <div className="App">
      <header className="App-header">
      <div className="mb-3 pt-0">
        <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Placeholder" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm text-black border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
      </div>

      </header>
    </div>
  );
}

export default App;
