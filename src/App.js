import PreviewPlayer from "./components/PreviewPlayer";
import Detail from "./pages/details/Detail";
import Login from "./pages/login/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="app h-[100vh] w-full">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/preview" element={<PreviewPlayer/>}/>
              <Route path="/detail" element={<Detail/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
