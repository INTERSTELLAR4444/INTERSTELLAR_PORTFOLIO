const projectList = [
  {
    id: 1,
    number: "01",
    title: "Ꭵ几𝐭𝑒ŕ丂ᵗｅ𝕝ℓάＲ ｐᗝяŤ𝒇σ𝓵𝕀ᗝ ώε𝐁𝓢𝔦𝓽𝑒 𝔻乇ＳＩ𝓖𝓝",
    description: "𝕬 𝖒𝖔𝖉𝖊𝖗𝖓 𝖗𝖊𝖘𝖕𝖔𝖓𝖘𝖎𝖛𝖊 𝖕𝖔𝖗𝖙𝖋𝖔𝖑𝖎𝖔 𝖜𝖊𝖇𝖘𝖎𝖙𝖊 𝖘𝖍𝖔𝖜𝖈𝖆𝖘𝖎𝖓𝖌 𝖕𝖗𝖔𝖏𝖊𝖈𝖙𝖘, 𝖘𝖐𝖎𝖑𝖑𝖘, 𝖆𝖓𝖉 𝖈𝖔𝖓𝖙𝖆𝖈𝖙 𝖋𝖊𝖆𝖙𝖚𝖗𝖊𝖘 𝖜𝖎𝖙𝖍 𝖘𝖒𝖔𝖔𝖙𝖍 𝖆𝖓𝖎𝖒𝖆𝖙𝖎𝖔𝖓𝖘 𝖆𝖓𝖉 𝖈𝖑𝖊𝖆𝖓 𝖀𝕴 𝖉𝖊𝖘𝖎𝖌𝖓 𝖋𝖔𝖗 𝖉𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗𝖘.",
    techStack: ["ꫝꪻꪑꪶ ,", "ᥴᦓᦓ ,", "꠹ꪖꪜꪖᦓᥴ᥅꠸ρꪻ ,", "꠸ᥴꪮꪀᦓ"],
    image: "ASSETS/PROJECT-IMAGE-1.png",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    number: "02",
    title: "𝔢ᵛⓔＮｔ 𝐫𝓔爪ĮŇ𝓓𝑒𝔯 αⓟρ-ⓓε𝕧ｅｌσρⓂ𝒆η𝕋", 
    description: "𝕬 𝖒𝖔𝖇𝖎𝖑𝖊 𝖊𝖛𝖊𝖓𝖙 𝖗𝖊𝖒𝖎𝖓𝖉𝖊𝖗 𝖆𝖕𝖕 𝖙𝖍𝖆𝖙 𝖍𝖊𝖑𝖕𝖘 𝖚𝖘𝖊𝖗𝖘 𝖘𝖈𝖍𝖊𝖉𝖚𝖑𝖊 𝖙𝖆𝖘𝖐𝖘, 𝖘𝖊𝖙 𝖓𝖔𝖙𝖎𝖋𝖎𝖈𝖆𝖙𝖎𝖔𝖓𝖘, 𝖆𝖓𝖉 𝖒𝖆𝖓𝖆𝖌𝖊 𝖉𝖆𝖎𝖑𝖞 𝖆𝖈𝖙𝖎𝖛𝖎𝖙𝖎𝖊𝖘 𝖊𝖋𝖋𝖎𝖈𝖎𝖊𝖓𝖙𝖑𝖞 𝖜𝖎𝖙𝖍 𝖆 𝖘𝖎𝖒𝖕𝖑𝖊 𝖎𝖓𝖙𝖊𝖗𝖋𝖆𝖈𝖊.",
    techStack: ["𝐝α𝓡Ⓣ ,", "Ｆ𝕃ⓤⓉᵗᵉя ,", "ĴⒶνᵃ"],
    image: "ASSETS/PROJECT-IMAGE-2.jpeg",
    liveLink: "#",
    githubLink: "#",
  },
];

const projectContainer = document.querySelector(".projects");

let currentIndex = 0;

const renderProject = (index) => {
  const project = projectList[index];

  const isFirst = index === 0;
  const isLast = index === projectList.length - 1;

  projectContainer.innerHTML = `
    <div class="project-info">
        <h3>${project.number}</h3>
        <h4>${project.title}</h4>
        <p>${project.description}</p>

        <div class="tech-stack">
            ${project.techStack.map((tech) => `<span>${tech}</span>`).join("")}
        </div>

        <hr />

        <div class="links">
          <a href="${project.liveLink}">
            <i class="ph ph-arrow-right"></i>
          </a>
          <a href="${project.githubLink}">
            <i class="ph ph-github-logo"></i>
          </a>
        </div>
    </div>

    <div class="carousel">
        <img src="${project.image}" alt="${project.title}" />

        <div class="arrows">
          <a href="#" id="previous" class="${isFirst ? "disabled-btn" : ""}">
            <i class="ph ph-caret-left"></i>
          </a>

          <a href="#" id="next" class="${isLast ? "disabled-btn" : ""}">
            <i class="ph ph-caret-right"></i>
          </a>
        </div>
    </div>
  `;

  const prevBtn = document.getElementById("previous");
  const nextBtn = document.getElementById("next");

  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (currentIndex > 0) {
      currentIndex--;
      renderProject(currentIndex);
    }
  });

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (currentIndex < projectList.length - 1) {
      currentIndex++;
      renderProject(currentIndex);
    }
  });
};

if (projectContainer) {
  renderProject(currentIndex);
}