// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Hi, I'm Tharindu",
  middleName: "Darshana",
  lastName: "Software developer",
  message: " I can help you solve a problem,build a product or grow existing project. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/1234Tharindu",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/tharindudarshana.dehipitiya/",
    },
    //{
      //image: "fa-instagram",
      //url: "https://www.instagram.com/hashirshoaeb/",
   // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/Tharindu Darshana/",
    },
   // {
     // image: "fa-twitter",
      //url: "https://www.twitter.com/hashirshoaeb/",
    //},
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/dehipitiya.png"),
  imageSize: 375,
  message:
    "My name is Tharindu Darshana Dehipitiya. I’m a undergraduate of University of sri Jayewardenepura  with a degree in Bachelor of science in information Technology. I am much interested in developing new things which excite me a lot.",
  //resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "1234Tharindu", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Work",
  message:
    "I have lot of experience about it field .So,I worked several companies and get huge knowledge and experience ",
  images: [
    { 
      img: require("../editable-stuff/l.png"), 
      //label: "First slide label", 
      //paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/b.png"), 
      //label: "Second slide label", 
      //paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/download.png"), 
      //label: "First slide label", 
      //paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },

  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 60 },
   // { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    //{ name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    //{ name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    //{ name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact",
  message:
    " if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "dehipitiya055@gmail.com /+94725632145"
};

const experiences = {
  show: true,
  heading: "Here are some of my Experiences",
 
  data: [
    {
      role: 'App Development',// Here Add Company Name
      //companylogo: require('../assets/img/one.jpg'),
      
      date: 'I also have knowledge of React Native development and have experience in building android  application.',
    },
    {
      role: 'Web Development',
      //companylogo: require('../assets/img/boeing.png'),
      date: ' I am full stack web developer(MERN) and build website using HTML,CSS,javascript,Reactjs.I have also good grasp on Node and Nosql(MongoDb).',
    },
    {
      role: 'UI/UX Designer',
      //companylogo: require('../assets/img/boeing.png'),
      date: 'UI/UX is interesting file in my life.',
    },
    {
      role: 'Other interest',
      //companylogo: require('../assets/img/boeing.png'),
      date: ' I also have decent hand in developing website with wordpress.Github are my other fields of interest.',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
