



particlesJS("background", {

    particles: {
        number: {
            value: 15, // Number of particles
            density: {
                enable: true,
                value_area: 300, // Density area
            },
        },

        color: {
            value: "#ffffff", // Particle color

        },
        shape: { 
            type: "triangle", // Shape of particles
        },
        opacity: {
            value: 0.8, // Opacity of particles
            random: true, // Randomize opacity
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },

        size: {
            value: 5, // Size of particles
            random: true, 
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },

        // Connecting lines
        line_linked: {
            enable: true,
            distance: 150, // Distance for linking
            color: "#ffffff", // Line color
            opacity: 0.4, // Line opacity
            width: 1, // Line width
        },

        // Movement of particles
        move: {
            enable: true,
            speed: 2,
            direction: "none", 
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false,
        },
    },
    // Interactivity settings

    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse", 

            },
            onclick: {
                enable: true,
                mode: "push",

            },
            resize: true,

        },

    },

    // Retina display support
    retina_detect: true,
    
})