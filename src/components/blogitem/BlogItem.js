import React from "react";
import { RegisterBg } from "../../img/Img";
import { Button, Gap } from "../Components";
import { useNavigate } from "react-router-dom";

const BlogItem = () => {
  const navigate = useNavigate()
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
        <Gap height={20} />
        <Button title="view more..." onClick={() => navigate('/detail-blog')} />
      </div>
    </div>
  );
};

export default BlogItem;
