import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogHomepage from "./Pages/BlogHomepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogHomepage />} />
      </Routes>
    </Router>
  );
}

export default App;
