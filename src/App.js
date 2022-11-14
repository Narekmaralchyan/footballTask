import { Route, Routes } from "react-router-dom";
import Clubs from "./Components/Clubs";
import Header from "./Components/Header";

function App() {
  return (
    
    <div className="App">
      <Header />
      <Routes>
        <Route path="/teams" element={<Clubs />} />
        <Route path="/countries" element={<Clubs />} />
        <Route path='/leagues' element={<div>leagues</div>} />
        <Route path='/matches' element={<div>matches</div>} />
      </Routes>
    </div>
  );
}

export default App;
