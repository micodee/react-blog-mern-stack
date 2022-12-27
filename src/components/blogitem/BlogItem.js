import React from "react";
import { RegisterBg } from "../../img/Img";

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          deleniti ad ipsa vel accusamus est delectus ipsam, sapiente nostrum,
          autem nesciunt odit, eos sequi similique totam atque fuga minima ab!
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
