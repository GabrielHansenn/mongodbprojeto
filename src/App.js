import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header"; // Importe o componente Header
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Comments from "./pages/Comments";

const App = () => {
  return (
    <Router>
      <Header />  {/* Incluindo o Header globalmente */}
      <div className="content">
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/comments/:postId" element={<Comments />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
