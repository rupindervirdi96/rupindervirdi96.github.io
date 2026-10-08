/* =========================================================
   Content — edit these objects to update the site
   ========================================================= */

const userInfo = {
  about:
    "Senior Front-End Developer with extensive experience building scalable, high-performing applications using React, Redux, and modern JavaScript frameworks. Skilled at transforming complex requirements into intuitive, seamless user experiences. Adept at leading projects, mentoring developers, and collaborating with cross-functional teams to deliver innovative solutions. Passionate about staying ahead of industry trends and driving excellence in web development.",
};

const professions = [
  "#SeniorFrontEndDeveloper",
  "#FullStackWebDeveloper",
  "#DesignEnthusiast",
  "#Teacher",
];

const experience = [
  {
    position: "Front End Web Developer",
    company: "LGS, an IBM company (Bell)",
    location: "Canada",
    duration: "Jan 2022 — Present",
    logo: "lgsLogo.jpg",
    summary:
      "Migrating part of a large web application from MVC to React, and building new and existing features across multiple Bitbucket repositories.",
    details: [
      "Developing new user-facing features.",
      "Updating Jira trackers for an agile environment and team management.",
      "Writing efficient code for flexibility and agility of the product.",
      "Ensuring all user input is validated before it reaches the back end.",
      "Solving high-scale defects in existing applications.",
      "Working within a complex source code base managed on Bitbucket.",
      "Collaborating with team members and stakeholders.",
    ],
  },
  {
    position: "Front End Web Developer",
    company: "Enrage Tech",
    location: "India",
    duration: "2015 — 2018",
    logo: "EnrageTechLogo.jpg",
    summary:
      "Implemented the visual elements users see and interact with across many web applications — combining the art of design with the science of programming.",
    details: [
      "Developed new user-facing features.",
      "Built reusable code and libraries for future use.",
      "Ensured the technical feasibility of UI/UX designs.",
      "Optimised applications for maximum speed and scalability.",
      "Validated all user input before submitting to the back end.",
      "Collaborated with other team members and stakeholders.",
    ],
  },
];

const projects = [
  {
    name: "Ember & Bun",
    category: "E-commerce · Featured project",
    desc: "An end-to-end demo storefront, from browsing the menu and ordering online to test checkout and live order tracking. Products, accounts, and orders use demo data.",
    tags: ["Online storefront", "Test checkout", "Live order tracking"],
    link: "https://store-git-demo-rupindervirdi96s-projects.vercel.app/",
    featured: true,
  },
  {
    name: "Mingle",
    category: "Social web app",
    img: "./assets/mingle.png",
    desc: "A social network inspired by Facebook, with a familiar design and many of the same core features.",
    tags: ["Community", "Social"],
    link: "https://mingle-app-virdi.onrender.com/",
  },
  {
    name: "StreetSaver",
    category: "Civic tech",
    img: "./assets/streetSaver.png",
    desc: "An application that helps communities report and improve the condition of their roads.",
    tags: ["Community", "Road safety"],
    link: "https://street-saver.onrender.com/",
  },
  {
    name: "Hangman",
    category: "Browser game",
    img: "./assets/hangman.png",
    desc: "The classic game rebuilt in React with a fresh design — add your own categories and register your score on the wall of fame.",
    tags: ["React", "Game", "Leaderboard"],
    link: "https://rupindervirdi96.github.io/hangman",
  },
  {
    name: "TypeTest",
    category: "Typing practice",
    img: "./assets/typetest.png",
    desc: "A typing application to test and improve your typing speed.",
    tags: ["Practice", "Speed test"],
    link: "https://rupindervirdi96.github.io/typing-test",
  },
];

const skills = [
  {
    group: "Front end",
    items: [
      { name: "React", icon: "React.svg" },
      { name: "Next.js", icon: "Next.svg" },
      { name: "Vue.js", icon: "Vue.png" },
      { name: "Angular", icon: "Angular.png" },
      { name: "HTML", icon: "HTML.png" },
      { name: "CSS", icon: "CSS.png" },
      { name: "SCSS", icon: "Sass.png" },
      { name: "Tailwind", icon: "Tailwind.png" },
    ],
  },
  {
    group: "Back end & data",
    items: [
      { name: "Node.js", icon: "Node.png" },
      { name: "MongoDB", icon: "MongoDB.png" },
      { name: "SQL", icon: "sql.png" },
      { name: "Firebase", icon: "Firebase.png" },
    ],
  },
  {
    group: "Design",
    items: [
      { name: "Figma", icon: "Figma.png" },
      { name: "Adobe XD", icon: "AdobeXD.png" },
    ],
  },
  {
    group: "Workflow",
    items: [
      { name: "Git", icon: "Git.png" },
      { name: "GitHub", icon: "github.png", invert: true },
      { name: "Bitbucket", icon: "bitbucket.png" },
    ],
  },
];

const education = [
  {
    course: "PG Diploma in Web Programming",
    institute: "Collège LaSalle",
    location: "Québec, Canada",
    year: "2020",
    logo: "Lasalle.png",
    learnings: [
      "React",
      "Tailwind",
      "Advanced OOP",
      "Web development",
      "Databases",
      "Web server applications",
      "Algorithms & programming",
    ],
  },
  {
    course: "Bachelor's in Computer Science",
    institute: "Guru Nanak Dev University",
    location: "Amritsar, India",
    year: "2017",
    logo: "Gndu.png",
    learnings: ["Operating systems", "OOP", "JavaScript", "Web development", "Databases"],
  },
];

const testimonials = [
  {
    author: "Gagandeep Singh",
    profession: "Managing Director at Enrage Tech",
    img: "./assets/2.jfif",
    message:
      "He was a great asset for our company. The clients always appreciated his design and the functionality of the websites designed by him. He is a hard working person who is committed to deadlines and also is a good human being.",
  },
  {
    author: "Roneet Kumar",
    profession: "Front End Engineer at Morgan Stanley",
    img: "./assets/1.jfif",
    message:
      "Rupinder is a dear friend with whom I had the pleasure to work on various exciting projects while we were completing our post graduate diploma at LaSalle College. He is super fun to work with and a great team player, moreover he is a skilled programmer and has an eye for attention to detail. I can happily recommend Rupinder for full-stack software development roles.",
  },
  {
    author: "Lucio Santilli",
    profession: "Lecturer at Collège LaSalle",
    img: "./assets/3.jfif",
    message:
      "I was pleased to have Rupinder in one of my classes. During that class, he was always curious, responsible, respectful and was not shy to ask relevant questions. He excelled in the class. I strongly recommend him for any academic or professional setting.",
  },
];

/* =========================================================
   Helpers
   ========================================================= */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* =========================================================
   Render
   ========================================================= */

$(".about-text").textContent = userInfo.about;
$(".year").textContent = new Date().getFullYear();

// Tech marquee (duplicated so the loop is seamless)
const allSkills = skills.flatMap((g) => g.items.map((s) => s.name));
const marqueeRun = allSkills.map((s) => `<span>${s}</span><i>✦</i>`).join("");
$(".marquee-track").innerHTML = marqueeRun + marqueeRun;

// Experience
$(".timeline").innerHTML = experience
  .map(
    (job) => `
    <li class="job reveal">
      <div class="job-when mono">${job.duration}</div>
      <article class="job-card">
        <header class="job-head">
          <img class="job-logo" src="./assets/${job.logo}" alt="" width="52" height="52" loading="lazy" />
          <div>
            <h3>${job.position}</h3>
            <p class="job-company">${job.company} · ${job.location}</p>
          </div>
        </header>
        <p class="job-summary">${job.summary}</p>
        <details class="job-details">
          <summary>Responsibilities <span aria-hidden="true">+</span></summary>
          <ul>${job.details.map((d) => `<li>${d}</li>`).join("")}</ul>
        </details>
      </article>
    </li>`
  )
  .join("");

// Projects
const storePreview = `
  <div class="store-preview" aria-hidden="true">
    <div class="store-topbar">
      <span class="store-logo"><b>◉</b> Ember <em>&amp;</em> Bun</span>
      <span class="store-nav">Menu · Deals · Sign in</span>
      <span class="store-bag">Bag <b>0</b></span>
    </div>
    <div class="store-hero">
      <span class="store-badge">Demo store · Now taking orders</span>
      <strong>Smashed fresh.<br /><em>Delivered hot.</em></strong>
      <span class="store-copy">Made to order, from our grill to your door.</span>
      <span class="store-order">Order now ↗</span>
    </div>
    <div class="store-menu">
      <span><i>🍔</i> House burgers</span>
      <span><i>🍟</i> Crispy sides</span>
      <span><i>🥤</i> Thick shakes</span>
    </div>
  </div>`;

$(".projects").innerHTML = projects
  .map((project, i) => {
    const number = String(i + 1).padStart(2, "0");
    const preview = project.featured
      ? storePreview
      : `<img class="project-image" src="${project.img}" alt="Screenshot of ${project.name}" loading="lazy" />`;

    return `
    <article class="project reveal${project.featured ? " project-featured" : ""}">
      <a class="project-preview" href="${project.link}" target="_blank" rel="noopener noreferrer"
        aria-label="Open ${project.name} (opens in a new tab)" tabindex="-1">
        ${preview}
        <span class="project-number mono">${number}</span>
      </a>
      <div class="project-body">
        <p class="project-meta mono">
          <span>${project.category}</span>
          ${project.featured ? '<span class="project-flag">Demo · test data</span>' : ""}
        </p>
        <h3><a href="${project.link}" target="_blank" rel="noopener noreferrer">${project.name}</a></h3>
        <p class="project-desc">${project.desc}</p>
        <ul class="tags" aria-label="Highlights">
          ${project.tags.map((t) => `<li>${t}</li>`).join("")}
        </ul>
        <span class="project-cta" aria-hidden="true">${project.featured ? "Explore the demo store" : "Visit project"} <b>↗</b></span>
      </div>
    </article>`;
  })
  .join("");

// Skills
$(".skill-groups").innerHTML = skills
  .map(
    (group) => `
    <div class="skill-group reveal">
      <h3 class="mono">${group.group}</h3>
      <ul class="skill-list">
        ${group.items
          .map(
            (s) => `
          <li class="skill">
            <img src="./assets/${s.icon}" alt="" width="22" height="22" loading="lazy" ${s.invert ? 'class="invert-dark"' : ""} />
            ${s.name}
          </li>`
          )
          .join("")}
      </ul>
    </div>`
  )
  .join("");

// Education
$(".education-list").innerHTML = education
  .map(
    (edu) => `
    <article class="edu-card reveal">
      <div class="edu-head">
        <img src="./assets/${edu.logo}" alt="" width="56" height="56" loading="lazy" />
        <span class="edu-year mono">${edu.year}</span>
      </div>
      <h3>${edu.course}</h3>
      <p class="edu-where">${edu.institute} · ${edu.location}</p>
      <ul class="tags">${edu.learnings.map((l) => `<li>${l}</li>`).join("")}</ul>
    </article>`
  )
  .join("");

// Testimonials
$(".testimonials").innerHTML = testimonials
  .map(
    (t) => `
    <figure class="quote reveal">
      <span class="quote-mark" aria-hidden="true">“</span>
      <blockquote>${t.message}</blockquote>
      <figcaption>
        <img src="${t.img}" alt="" width="44" height="44" loading="lazy" />
        <span><strong>${t.author}</strong>${t.profession}</span>
      </figcaption>
    </figure>`
  )
  .join("");

/* =========================================================
   Behaviour
   ========================================================= */

// Theme toggle
const root = document.documentElement;
const currentTheme = () =>
  root.dataset.theme ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

$(".theme-toggle").addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
});

// Mobile menu
const menuBtn = $(".menu-toggle");
const nav = $("#site-nav");
const setMenu = (open) => {
  document.body.classList.toggle("menu-open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
};
menuBtn.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
$$("a", nav).forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

// Header shadow once scrolled
const header = $(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Highlight the nav link for the section in view
const navLinks = $$("a", nav);
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`)
      );
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
$$("main section[id]").forEach((s) => sectionObserver.observe(s));

// Reveal on scroll
if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  $$(".reveal").forEach((el) => el.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  $$(".reveal").forEach((el) => revealObserver.observe(el));
}

// Rotating role in the hero
const roleEl = $(".role-word");
if (!prefersReducedMotion) {
  let roleIndex = 0;
  setInterval(() => {
    roleEl.classList.add("out");
    setTimeout(() => {
      roleIndex = (roleIndex + 1) % professions.length;
      roleEl.textContent = professions[roleIndex];
      roleEl.classList.remove("out");
    }, 300);
  }, 2600);
}

// Copy email
const copyBtn = $(".copy-email");
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyBtn.dataset.email);
    copyBtn.textContent = "Copied ✓";
  } catch (e) {
    copyBtn.textContent = copyBtn.dataset.email;
  }
  setTimeout(() => (copyBtn.textContent = "Copy email"), 2000);
});
