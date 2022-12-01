import React from "react";
import {FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa";

const Aboutus = () => {
  return (
    <div style={{backgroundColor: "ghostwhite", height:"800px","align-items":"center","justify-content": "center"}}>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="image" style={{display: "block","margin-left": "auto" , "margin-right": "auto",width: "20%"}}>
              <img  src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg" alt="" />
            </div>
            <br/>

            
              <h3 className="mini-title"style={{"text-align":"center"}}>
                "WHAT MAKE US INSPIRED FOR THIS BLOG".!
              </h3>
              <br/>
              <h1 className="main-heading" style={{"text-align":"center"}}>The way of each step!</h1>
              </div>
              </div>
              <br/>
              <p style={{"font-family":"serif", "font-variant": "small-caps", "font-weight": "9000px","width":"60em", "text-align":"center","margin-left":"180px"}}> This is the webpage application named <strong>Ze Blogger</strong> the purpose of this blog application is to post personal opinions, events, advertising business and others, So this makes all the people know every activity that runs around themselves, And it has the best benefit for us and users in this account and other people, related with this, There is so many blog page such as <strong>Midum.com</strong>, <strong>Blogger.com</strong>,  <strong>Wix.com</strong> and others, So according to them we try to do some activities in our blog web page application. To mention This Blog Webpage Application is the portfolio project required by <strong>Holberton School</strong>. </p>
              <br/>
              
              <br/>
              <br/>
              <div className="devs" style={{"text-align":"center",display: "block","margin-left": "auto" , "margin-right": "auto",width: "18%"}}>
                <hr></hr>
                <span><strong>Developer/<a href=" https://github.com/Minte123/blog_app">Project</a></strong></span>
                <hr></hr>
        <div className="sidebarSocial" style={{"white-spacing":"nowrap"}}>
          <a href="https://github.com/Minte123"  onClick={() => {
          alert("Redirecting to Github");
        }} > <FaGithub className="icons github"style={{"margin-right":"15px"}}/> </a> 
          <a href="https://twitter.com/mgr_minte"  onClick={() => {
          alert("Redirecting to Twitter");
        }} > <FaTwitter className="icons twitter" style={{"margin-right":"15px"}}/> </a>

          <a href="https://www.linkedin.com/in/mintesnot-bekele-018b301bb/"  onClick={() => {
          alert("Redirecting to Linkedin");
        }} > <FaLinkedin className="icons linkedin" style={{"margin-right":"10px"}}/> </a>

          <a href="https://www.instagram.com/sixdotnetmint/"  onClick={() => {
          alert("Redirecting to Instagram");
        }} ><i className="sidebarIcon fab fa-instagram-square"></i></a>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Aboutus;