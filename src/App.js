import PreviewPlayer from "./components/PreviewPlayer";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app h-[100vh] w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<PreviewPlayer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
