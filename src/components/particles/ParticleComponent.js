import React from "react";
import Particles from "react-particles-js";

export default (props) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
    }}
  >
    <Particles
      params={{
        particles: {
          number: {
            value: 125,
            density: {
              enable: true,
              value_area: 100000
            }
          },
          color: {
            value: `${props.color}`
          },
          shape: {
            type: "polygon",
            stroke: {
              width: 2,
              color: `${props.color}`
            },
            polygon: {
              nb_sides: 4
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.3,
            random: false,
            anim: {
              enable: false,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 1.5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: true
            }
          },
          line_linked: {
            enable: true,
            distance: 50,
            color: `${props.color}`,
            opacity: 0.3,
            width: 0.5
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: false
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  </div>
);
