import { Route, Routes } from "react-router-dom";
import Countries from "./Components/Countries";
import Header from "./Components/Header";
import Teams from "./Components/Teams";

function App() {
  return (
    
    <div className="App">
      <Header />
      <Routes>
        <Route path="/teams" element={<Teams />} />
        <Route path="/countries" element={<Countries />} />
        <Route path='/leagues' element={<div>leagues</div>} />
        <Route path='/matches' element={<div>matches</div>} />
      </Routes>
    </div>
  );
}

export default App;
