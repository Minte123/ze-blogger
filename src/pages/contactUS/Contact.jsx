import React from "react";
import emailjs from "@emailjs/browser";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";


import "./Contact.css";

//const SERVICE_ID = "service_9tx1fam";
//const TEMPLATE_ID = "template_9m0ahfq";
//const USER_ID = "NNsXG2hJujR8UrYuP";

const App = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_9tx1fam", "template_9m0ahfq", e.target, "NNsXG2hJujR8UrYuP")
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: " Thank you! We'll be in touch soon."
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
  <div style={{"background-color":"snow", "margin-top":"32px", "padding-left":"50px","max-height": "900px" }}>
   <div className="contact"style={{"margin-top":"50px"}}>
          
            <h1 className="display-4 mb-4">Contact Us</h1>
            <hr></hr>
            </div>
    <div className="App" style={{"background-color":"ghostwhite", "margin-top":"50px"}}>
      
      <Form onSubmit={handleOnSubmit}>
      <h3 className="color_sec py-4">Get in touch</h3>
      <br/>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          style = {{
          icon:"mail",
          iconPosition:"left",
          }}
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          style={{
          icon:"user circle",
          iconPosition:"left",
          padding: "7px"
        }}
        />
        
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <Button type='submit' style = {{color:"black",cursor: "pointer",width: "30%","margin-top": "1rem"}}><strong>Submit</strong></Button>
      </Form>
    </div>
    <br/>
    <br/>
    <div className="sidebarItem">
        <span className="sidebarTitle"><h2><strong style={{"font-family":"sans-serif"}}>FOLLOW US</strong></h2></span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com/groups/0minte.DMC0"  onClick={() => {
          alert("Redirecting to Facebook");
        }} > 
          <i className="sidebarIcon fab fa-facebook-square"> </i> </a> 
          <a href="https://twitter.com/mgr_minte"  onClick={() => {
          alert("Redirecting to Twitter");
        }} > 
          <i className="sidebarIcon fab fa-twitter-square"></i> </a>

          <a href="https://www.pinterest.com/Minte_DMC"  onClick={() => {
          alert("Redirecting to Pinterest");
        }} > 
          <i className="sidebarIcon fab fa-pinterest-square"></i> </a>

          <a href="https://www.instagram.com/sixdotnetmint/"  onClick={() => {
          alert("Redirecting to Instagram");
        }} > 
          <i className="sidebarIcon fab fa-instagram-square"></i></a>
        </div>
      </div>
    </div>
  );
}

export default App;