//  typing Animation config code 

 new TypeIt("#simpleUsage", {
    strings: "Harishkumar N",
    speed: 50,
    waitUntilVisible: true,
}).go();



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
    <div class="bg-[#66686c36] p-10 flex justify-items-center item-center w-32 h-34 rounded-md hover:bg-orange-400 m-4">
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