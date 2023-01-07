import React from "react";
import { Button, Gap } from "../Components";
import { useNavigate } from "react-router-dom";

const BlogItem = (props) => {
  const {image, title, name, date, body} = props
  const navigate = useNavigate()
  return (
    <div className="blog-item">
      <img className="image-thumb" src={image} alt="post" />
      <div className="content-detail">
        <p className="title">{title}</p>
        <p className="author">{name} - {date}</p>
        <p className="body">{body}</p>
        <Gap height={20} />
        <Button title="view more..." onClick={() => navigate('/detail-blog')} />
      </div>
    </div>
  );
};

export default BlogItem;
