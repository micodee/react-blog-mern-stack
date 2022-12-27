import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsFacebook, BsInstagram, BsTelegram, BsDiscord, BsGithub } from "../../img/Icon";
import { LogoMi } from "../../img/Img";

const Icon = ({icon, link}) => {
  return (
    <div className="icon-wrapper">
      <Link to={link} className="icon-medsos">{icon}</Link>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img src={LogoMi} alt="logo" />
        </div>
        <div className="social-wrapper">
          <Icon link={"/"} icon={<BsFacebook alt="facebook"/>} />
          <Icon link={"/"} icon={<BsTwitter alt="twitter" />} />
          <Icon link={"/"} icon={<BsInstagram alt="instagram" />} />
          <Icon link={"/"} icon={<BsTelegram alt="telegram" />} />
          <Icon link={"/"} icon={<BsDiscord alt="telegram" />} />
          <Icon link={"/create-blog"} icon={<BsGithub alt="github" />} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
