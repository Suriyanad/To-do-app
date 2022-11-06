import React from "react";
import "./Footer.scss";
import Github from "../../assets/icons/github.png";

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="footer__column">
        <span className="footer__title">Todo App</span>
        <br></br>
        <span className="footer__text"><h4> Team Members :</h4><ol><li>Ganesh</li> <li>Srinivasan</li> <li>Suriyanad</li></ol></span>
      </div>
      <div className="footer__column">
      <span className="footer__text">Ganesh&emsp; Srinivasan&ensp;  Suriyanad</span>
        <div className="footer__icons">
          <a href="https://github.com/GaneshV21" target="_blank" rel="noreferrer">
            <img className="footer__icon" src={Github} alt="Github Icon" />
            <span className="footer__text">   .   </span>
          </a>
          <a href="https://github.com/srinimas" target="_blank" rel="noreferrer">
            <img className="footer__icon" src={Github} alt="Github Icon" />
            <span className="footer__text">.  .  .</span>
            
          </a>
          <a href="https://github.com/Suriyanad" target="_blank" rel="noreferrer">
            <img className="footer__icon" src={Github} alt="Github Icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
