var prjCount = 0;

$ = (e) => {
  return document.querySelector(e);
};

$$ = (e) => {
  return document.querySelectorAll(e);
};

const userInfo = {
  name: "RUPINDER PAL SINGH",
  address: "rupindervirdi96@gmail.com",
  phone: "+1(438)998-1746",
  about:
    " Versatile full-stack web developer with a passion for creating seamless user experiences. Skilled in both front-end and back-end technologies, I thrive on problem-solving and delivering high-quality solutions. Committed to staying updated with the latest trends for innovative and efficient web development. ",
};

const testimonials = [
  {
    author: "Gagandeep Singh",
    profession: "Managing Director at Enrage Tech",
    img: "./assets/2.jfif",
    message: `He was a great asset for our company. The clients always appreciated his design and the functionality of the websites designed by him. He is a hard working person who is commited to deadlines and also is good human being.`,
  },
  {
    author: "Roneet Kumar",
    profession: "Front End Engineer at Morgan Stanley",
    img: "./assets/1.jfif",
    message: `Rupinder is a dear friend with whom i had pleasure to
    work on various exciting projects while we were completing our post graduate diploma at
    LaSalle College.
    He is super fun to work with and a great team player, moreover he is a skilled
    programmer and has an eye for attention to detail.
    I can happily recommend Rupinder for Full-stack Software development roles.`,
  },
  {
    author: "Lucio Santilli",
    profession: "Lecturer at Collège LaSalle",
    img: "./assets/3.jfif",
    message: `I was pleased to have Rupinder in one of my classes. During that class, he was always curious, responsible, respectful and was not shy to ask relevant questions. He excelled in the class. I strongly recommend him for any academic or professional setting.`,
  },
];

const education = [
  {
    course: "PG Diploma in Web Programming",
    institute: "College Lasalle",
    location: "Quebec, Canada",
    year: "2020",
    learnings: [
      "React",
      "Tailwind",
      "Advanced - OOPS",
      "Web-development",
      "Database",
      "Web-server applications",
      "Algorithms and programming",
    ],
    logo: "Lasalle.png",
  },
  {
    course: "Bachelors in Computer Science",
    institute: "Guru Nanak Dev University",
    location: "Amritsar, India",
    year: "2017",
    learnings: [
      "Operating systems",
      "OOPS",
      "Javascript",
      "Web development",
      "Database",
    ],
    logo: "Gndu.png",
  },
];

const experience = [
  {
    position: "Front End Web Developer",
    company: "LGS, an IBM company (BELL) - Canada",
    duration: "Jan 2022 - Present",
    logo: "lgsLogo.jpg",
    details: `I am working on a part of a web application to change from MVC code to a react application. I am working on development of various features new and existing. Working with multiple repositories on Bitbucket. Rest of my responsibilities include:<br/>
     • Developing new user-facing features.<br/>
     • Updating Jira trackers for agile environment and team management<br/>
     • Writing efficient code for flexibility and agility of the product.<br/>
     • Assuring that all user input is validated before submitting to back-end<br/>
     • Solving high scale defects in existing applications.<br/>
     • Working with a pretty complex source code handled on bitbucket using Github.<br/>
     • Collaborating with all team members and stakeholders<br/>`,
  },
  {
    position: "Front End Web Developer",
    company: "Enrage Tech - India",
    duration: "2015 - 2018",
    logo: "EnrageTechLogo.jpg",
    details: `I was responsible for implementing visual elements that were visible from the computer users vantage point within various web applications. I combined the art of design with the science of programming.<br/>
    Rest of my tasks included:<br/>
     • Develop new user-facing features<br/>
     • Build reusable code and libraries for future use<br/>
     • Ensure the technical feasibility of UI/UX designs<br/>
     • Optimize application for maximum speed and scalability<br/>
     • Assure that all user input is validated before submitting to back-end<br/>
     • Collaborate with other team members and stakeholders`,
  },
];

const skills = [
  {
    cat_name: "WEB_TECHS",
    skills: [
      { name: "REACT.js", percentage: "90", icon: "./assets/React.svg" },
      { name: "TAILWIND", percentage: "65", icon: "./assets/Tailwind.png" },
      { name: "NEXT.js", percentage: "85", icon: "./assets/Next.svg" },
      { name: "VUE.js", percentage: "85", icon: "./assets/Vue.png" },
      { name: "SCSS", percentage: "75", icon: "./assets/Sass.png" },
      { name: "ANGULAR.js", percentage: "85", icon: "./assets/Angular.png" },
      { name: "HTML", percentage: "95", icon: "./assets/HTML.png" },
      { name: "CSS", percentage: "75", icon: "./assets/CSS.png" },
      { name: "NODE.js", percentage: "89", icon: "./assets/Node.png" },
      { name: "MONGO-DB", percentage: "75", icon: "./assets/MongoDB.png" },
      { name: "SQL", percentage: "84", icon: "./assets/sql.png" },
      { name: "FIREBASE", percentage: "80", icon: "./assets/Firebase.png" },
      { name: "FIGMA", percentage: "70", icon: "./assets/Figma.png" },
      { name: "ADOBE XD", percentage: "65", icon: "./assets/AdobeXD.png" },
      { name: "GITHUB", percentage: "90", icon: "./assets/github.png" },
      { name: "BITBUCKET", percentage: "90", icon: "./assets/bitbucket.png" },
      { name: "GIT", percentage: "88", icon: "./assets/Git.png" },
    ],
  },
];

const projects = [
  {
    name: "MINGLE",
    img: "./assets/mingle.png",
    desc: "Mingle is a website similar to facebook providing some important features as facebook. This app has similar design to facebook and some of the features are same too.",
    link: "https://mingle-app-virdi.onrender.com/",
  },
  {
    name: "STREETSAVER",
    img: "./assets/streetSaver.png",
    desc: "Street saver is an application that could be a help to the society to improve the condition of roads.",
    link: "https://street-saver.onrender.com/",
  },
  {
    name: "HANGMAN",
    img: "./assets/hangman.png",
    desc: "The classic game made with react providing a great design and additional features on the way. Like anyone can add additional categories and register their score to the wall of fame.",
    link: "https://rupindervirdi96.github.io/hangman",
  },
  {
    name: "TYPETEST",
    img: "./assets/typetest.png",
    desc: "The typing application to test and improve your typing speed.",
    link: "https://rupindervirdi96.github.io/typing-test",
  },
];

//Initialize User
$(".name").innerText = userInfo.name;
$(".info").innerText = userInfo.about;

var y = 0;

//Add Skills
const createSkill = (skill) => {
  const newSkill = `
  <div class="skill" data-aos="fade-bottom">
  <div class="name">${skill.name} <img src=${skill?.icon} /></div>
  </div>`;
  return newSkill;
};

const createCats = (cat, skills) => {
  const skillCat = `
  <div class="skillCat">
  ${skills.map((skill) => createSkill(skill)).join("")}
  </div>`;
  return skillCat;
};

skills.map((skill) => {
  $(".skills").innerHTML += createCats(skill.cat_name, skill.skills);
});

//Initialize Education
education.map((edu) => {
  $(".education-list").innerHTML += `
  <div class="education">
    <div class="edu-details">  
      <div>
        <span class="course">${edu.course}</span>
        <span class="institute">${edu.institute} - ${edu.location}</span>
        <span class="year">${edu.year}</span>
      </div>
      <img src="./assets/${edu.logo}" alt="">
    </div>
    <div class="learnings">
    ${edu.learnings
      .map((learning) => `<div class="learning">${learning}</div>`)
      .join("")}
    </div>
  </div>`;
});

//Initialize Work
experience.map((work) => {
  $(".work-list").innerHTML += `
  <div class="work">
  <div class="work-details">  
  <div>
  <span class="position">${work.position}</span>
  <span class="company">${work.company}</span>
  <span class="duration">${work.duration}</span>
  </div>
  <img src="./assets/${work.logo}" height="80px" width="80px" alt="">
</div>
<p class="details-work details-work-hide">${work.details}</p>
<img class="reveal-icon" src="./assets/revealArrow.png" />
</div>
`;
});

//Initialize Projects
projects.map((project) => {
  $(".projects").innerHTML += `
          <div class="project" style="background-image: url(${project.img})">
            <div class="overlay" >
              <div class="prj-name">${project.name}</div>
              <p class="prj-desc">${project.desc}</p>
              <a target="_blank" href="${project.link}"><img src="./assets/arrowForward.png" /></a>
            </div>
          </div>
  `;
});

//Profession animation
var professions = [
  "#SeniorFrontEndDeveloper",
  "#FullStackWebDeveloper",
  "#DesignEnthusiast",
  "#Teacher",
];

var x = 0;
var sentenceNumber = 0;
var CurrentSentence = professions[sentenceNumber];
var rewind = false;

var intervalWrite = setInterval(write, 100);
var intervalRemove = setInterval(() => {}, 100);

function write() {
  if (x < CurrentSentence.length && !rewind) {
    $(".professionName").innerText += CurrentSentence[x];
    x++;
  } else {
    clearInterval(intervalWrite);
    setTimeout(() => {
      intervalRemove = setInterval(remove, 100);
    }, 400);
  }
}

function remove() {
  if (x > 0) {
    var newSentence = CurrentSentence.split("")
      .slice(0, x - 1)
      .join("");
    $(".professionName").innerText = newSentence;
    x--;
  } else {
    clearInterval(intervalRemove);
    if (sentenceNumber < professions.length - 1) {
      sentenceNumber++;
    } else {
      sentenceNumber = 0;
    }
    CurrentSentence = professions[sentenceNumber];
    intervalWrite = setInterval(write, 100);
  }
}

$(".copyright span").innerText = new Date().getFullYear();

//Testimonials
const createTestimony = (testimony) => {
  const template = `<div class="testimony">
  <div class="details">
    <img src="${testimony.img}"   alt="">
    <div class="about">
      <div class="author">${testimony.author}</div>
      <div class="prof">${testimony.profession}</div>
    </div>
  </div>
<div class="message">"${testimony.message}"</div>
</div>`;
  return template;
};

testimonials.map((testimony) => {
  $(".testimonials").innerHTML += createTestimony(testimony);
});

// document.querySelector(".overlay").onclick = () => console.log("abc");
document
  .querySelectorAll(".work .overlay")
  .forEach((x) =>
    x.addEventListener("onmouseover", () =>
      document.querySelector(".work .overlay").animate({ scrollTop: 0 }, 100)
    )
  );

const detailsRevealBtn = document.querySelectorAll(".reveal-icon");

detailsRevealBtn.forEach(
  (btn, index) =>
    (btn.onclick = () => {
      document.querySelectorAll(".reveal-icon")[index].classList.toggle("hide");

      if (
        document
          .querySelectorAll(".details-work")
          [index].classList.contains("details-work-hide")
      ) {
        document
          .querySelectorAll(".details-work")
          [index].classList.remove("details-work-hide");
        document
          .querySelectorAll(".details-work")
          [index].classList.add("details-work-reveal");
      } else {
        document
          .querySelectorAll(".details-work")
          [index].classList.remove("details-work-reveal");
        document
          .querySelectorAll(".details-work")
          [index].classList.add("details-work-hide");
      }
    })
);

const testimonialss = document.querySelector(".testimonials");
const leftArrow = document.querySelector(".arrowLeft");
const rightArrow = document.querySelector(".arrowRight");

let index = 1;
const totalImages = document.querySelectorAll(".testimony").length;
const imageWidth = document.querySelector(".testimony").offsetWidth + 90; // 300px image width + 40px gap

// Center the first image on load
testimonialss.style.transform = `translateX(-${index * imageWidth}px)`;

rightArrow.addEventListener("click", () => {
  if (index < totalImages - 1) {
    index++;
    updateCarousel();
  }
});

leftArrow.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

function updateCarousel() {
  const centerOffset = ((totalImages - 1) * imageWidth) / 2;
  testimonialss.style.transform = `translateX(calc(${centerOffset}px - ${
    index * imageWidth
  }px))`;
  leftArrow.style.display = index === 0 ? "none" : "block";
  rightArrow.style.display = index === totalImages - 1 ? "none" : "block";
}

// Initial position to center the first image
updateCarousel();
