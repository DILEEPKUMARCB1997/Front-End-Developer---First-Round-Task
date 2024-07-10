import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work1 from "./Components/Work1";
import Work2 from "./Components/Work2";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="work1" element={<Work1 />} />
          <Route path="work2" element={<Work2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
