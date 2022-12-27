import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateBlog, DetailBlog, Home} from "../../pages/Pages";

const Mainapp = () => {
  return (
    <div>
      <p>header</p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="detail-blog" element={<DetailBlog />} />
        </Routes>
      <p>footer</p>
    </div>
  );
};

export default Mainapp;
