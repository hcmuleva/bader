import React from 'react'
import {ReactNavbar} from "react-responsive-animate-navbar";
import {HomeComponent} from "../HomeComponent";
import {ArticlesComponent} from "../ArticlesComponent";
import {AboutComponent} from "../AboutComponent";
import {ContactComponent} from "../ContactComponent";
import logo from '../../logo.svg'
export default function AnimatedNavbar(props) {
    

    return (
        <ReactNavbar
        color="rgb(25, 25, 25)"
        //logo="https://svgshare.com/i/KHh.svg"
        logo={logo}
        menu={[
          { name: "HOME", to: "/", component: HomeComponent },
          { name: "ARTICLES", to: "/articles", component: ArticlesComponent },
          { name: "ABOUT ME", to: "/about", component: AboutComponent },
          { name: "CONTACT", to: "/contact", component: ContactComponent },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nazeh-taha/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
          },
        ]}
      />    )
}
