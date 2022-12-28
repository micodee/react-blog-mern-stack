import React from "react";
import { Gap, Link } from "../../components/Components";
import { RegisterBg } from "../../img/Img";
import { useNavigate } from "react-router-dom";

const DetailBlog = () => {
  const navigate = useNavigate()
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" loading="lazy"/>
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <Gap height={20} />
      <p className="blog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam ullam consequatur soluta nam nihil ipsum, quis asperiores. In optio eveniet deserunt id cumque ab illo recusandae minima, nobis nostrum voluptatibus pariatur, repudiandae corrupti? Alias minima obcaecati repellat quisquam neque error! Odit consequatur repudiandae, natus eligendi doloremque aspernatur molestiae quasi impedit minima perferendis quis voluptatibus, incidunt est corrupti rem, a assumenda maxime veniam iure itaque inventore aut. Laudantium quos officia, corporis repellendus maxime consectetur ipsam similique suscipit, odit inventore ab!</p>
      <Gap height={20} />
      <Link title="Kembali ke Home" onClick={() => navigate('/')} />
      <Gap height={40} />
    </div>
  );
};

export default DetailBlog;
