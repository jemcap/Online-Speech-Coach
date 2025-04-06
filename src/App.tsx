import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import Progress from "./pages/Progress";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/practice" element={<Practice />} />
            <Route path="/progress" element={<Progress />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
