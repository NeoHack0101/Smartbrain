import React, { Component } from "react";
import Particles from "react-particles-js";
import "./Myparticles.css";

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    },
    move: {
      enable: true,
      out_mode: "bounce"
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: false,
        mode: "grab"
      },
      onclick: {
        enable: false,
        mode: "repulse"
      }
    }
  }
};

class Myparticles extends Component {
  render() {
    return <Particles className="particles" params={particlesOptions} />;
  }
}

export default Myparticles;
