/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS('particles-js',{
    "particles": {
      "number": {
        "value": 400,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 500,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "bubble": {
          "distance": 400,
          "size": 4,
          "duration": 0.3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  })
//  typing Animation config code 

 new TypeIt("#simpleUsage", {
    strings: "Harishkumar N",
    speed: 50,
    waitUntilVisible: true,
}).go();

// for cursor
new kursor({
    removeDefaultCursor: true,
    type: 1,
     color: '#ea580c'
})
const carddata = [
    {
        icone:"./assets/img/icone/html-5.png",
        // name:"Html"
    },
    {
        icone:"./assets/img/icone/css-3.png",
        // name:"css"
    },
    {
        icone:"./assets/img/icone/js.png",
        // name:"css"
    },
    {
        icone:"./assets/img/icone/python.png",
      
    },
    {
        icone:"./assets/img/icone/icons8-express-js-96.png",
      
    },
    {
        icone:"./assets/img/icone/icons8-golang-96.png",
      
    },
    {
        icone:"./assets/img/icone/icons8-material-ui-96.png",
      
    },
    {
        icone:"./assets/img/icone/icons8-mongodb-96.png",
      
    },
    {
        icone:"./assets/img/icone/icons8-mysql-96.png",
      
    },
    {
        icone:"./assets/img/icone/icons8-nodejs-96.png",
      
    },
    {
        icone:"./assets/img/icone/icons8-python-96.png",
      
    },
    {
        icone:"./assets/img/icone/icons8-react-native-96.png",
      
    },
    {
        icone:"./assets/img/icone/icons8-tailwindcss-96.png",
      
    },
    {
        icone:"./assets/img/icone/icons8-typescript-96.png",
      
    },
    {
        icone:"./assets/img/icone/icons8-ubuntu-96.png",
      
    },
    {
        icone:"./assets/img/icone/icons8-bootstrap-96.png",
      
    },
    {
        icone:"./assets/img/icone/icons8-figma-48.png",
      
    },
    {
        icone:"./assets/img/icone/nextjs.svg",
      
    },
    

]
// const carddata = [
//     { name: "JavaScript", level: "Advanced", icon: "js-icon" },
//     { name: "React", level: "Advanced", icon: "react-icon" },
//     { name: "Node.js", level: "Intermediate", icon: "nodejs-icon" },
//     { name: "HTML", level: "Expert", icon: "html-icon" },
//     { name: "CSS", level: "Expert", icon: "css-icon" },
//     { name: "MongoDB", level: "Intermediate", icon: "mongodb-icon" }
//   ];
  

// const card = `<h1 class="text-white">${data.name}</h1>`

$(document).ready(function(){

   
//     for (let i =0;i < carddata.length;i++){
//         $("#skills").append(card)
//     }
    carddata.map((data,index)=>{
   $("#skills").append(`
    <div class="bg-[#66686c36] p-10 flex justify-items-center item-center w-32 h-34 rounded-md hover:bg-orange-600 m-4">
    <img src=${data.icone} class="w-16 h-16">

    </div>`)
    })
// carddata.map((data, index) => {
//     $("#skills").append(`
//       <div class="skill-card">
//         <h1 class="text-white">${data.name}</h1>
//         <p class="text-gray-400">${data.level}</p>
//         <i class="skill-icon ${data.icon}"></i> <!-- Icon class -->
//       </div>
//     `);
//   });

})