import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/index";
import Home from "./Website/Home";
import { Add, Edit, PostInfo, Posts } from "./Posts";
import Gallery from "./Gallery/Gallery";
import ToDo from "./ToDo";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/todo" element={<ToDo />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/posts/:id" element={<PostInfo />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/add" element={<Add />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
