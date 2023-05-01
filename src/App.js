
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./style/style.css"
import Add from "./components/pages/Add";
import Books from "./components/pages/Books";
import Update from "./components/pages/Update";

function App() {
  return (
      <div className="App">
     <BrowserRouter>
     <Routes>

      <Route path="/books" element={<Books/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/edit/:id" element={<Update/>}/>
     </Routes>
     </BrowserRouter>
      </div>
  );
}

export default App;
