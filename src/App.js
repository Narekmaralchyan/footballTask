import { Route, Routes } from "react-router-dom";
import Clubs from "./Components/Clubs";
import Countries from "./Components/Countries";
import Header from "./Components/Header";
import Leagues from "./Components/Leagues";

function App() {
  return (
    
    <div className="App">
      <Header />
      <Routes>
        <Route path="/teams" element={<Clubs />} />
        <Route path="/countries" element={<Countries />} />
        <Route path='/leagues' element={<Leagues />} />
        <Route path='/matches' element={<div>matches</div>} />
      </Routes>
    </div>
  );
}

export default App;
