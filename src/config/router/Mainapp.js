import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "../../components/Components";
import { CreateBlog, DetailBlog, Home } from "../../pages/Pages";

const Mainapp = () => {
  return (
    <div className="main-app-wrapper">
        <Header />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="detail-blog" element={<DetailBlog />} />
        </Routes>
      </div>
        <Footer />
    </div>
  );
};

export default Mainapp;
