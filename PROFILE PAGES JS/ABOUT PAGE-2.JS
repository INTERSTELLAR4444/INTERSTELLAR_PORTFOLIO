const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
  if (aboutTabs) {
    aboutTabs[0].click();
  }
});

aboutTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    aboutTabs.forEach((a) => a.classList.remove("active"));
    tab.classList.add("active");

    aboutContent.forEach((c) => c.classList.remove("active"));

    document.getElementById(tab.dataset.section).classList.add("active");

    if (tab.dataset.section === "experience") {
      const experiences = document.querySelector(".experience-list");

      const experienceList = [
        {
          id: 1,
          date: "2️⃣0️⃣2️⃣3️⃣ - 2️⃣0️⃣2️⃣4️⃣",
          position: "𝕱𝖗𝖔𝖓𝖙𝖊𝖓𝖉 𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗",
          company: "𝕄𝕚𝕟𝕕𝕤𝕥𝕒𝕪 𝕋𝕖𝕔𝕙𝕟𝕠𝕝𝕠𝕘𝕪",
          details: "𝔅𝔲𝔦𝔩𝔱 𝔯𝔢𝔰𝔭𝔬𝔫𝔰𝔦𝔳𝔢 𝔞𝔫𝔡 𝔬𝔭𝔱𝔦𝔪𝔦𝔷𝔢𝔡 𝔘ℑ𝔰 𝔲𝔰𝔦𝔫𝔤 ℜ𝔢𝔞𝔠𝔱.𝔧𝔰 𝔞𝔫𝔡 𝔗𝔞𝔦𝔩𝔴𝔦𝔫𝔡 ℭ𝔖𝔖. ℭ𝔬𝔩𝔩𝔞𝔟𝔬𝔯𝔞𝔱𝔢𝔡 𝔴𝔦𝔱𝔥 𝔟𝔞𝔠𝔨𝔢𝔫𝔡 𝔱𝔢𝔞𝔪𝔰 𝔱𝔬 𝔦𝔫𝔱𝔢𝔤𝔯𝔞𝔱𝔢 𝔄𝔓ℑ𝔰 𝔞𝔫𝔡 𝔦𝔪𝔭𝔯𝔬𝔳𝔢 𝔲𝔰𝔢𝔯 𝔢𝔵𝔭𝔢𝔯𝔦𝔢𝔫𝔠𝔢.",
        },
        {
          id: 2,
          date: "2️⃣0️⃣2️⃣2️⃣ - 2️⃣0️⃣2️⃣3️⃣", 
          position: "𝕸𝕰𝕽𝕹 𝕾𝖙𝖆𝖈𝖐 𝕴𝖓𝖙𝖊𝖗𝖓",
          company:  "𝕋𝕖𝕔𝕙ℕ𝕠𝕧𝕒 𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤",
          details: "𝔚𝔬𝔯𝔨𝔢𝔡 𝔬𝔫 𝔣𝔲𝔩𝔩-𝔰𝔱𝔞𝔠𝔨 𝔴𝔢𝔟 𝔞𝔭𝔭𝔩𝔦𝔠𝔞𝔱𝔦𝔬𝔫𝔰 𝔲𝔰𝔦𝔫𝔤 𝔱𝔥𝔢 𝔐𝔈ℜ𝔑 𝔰𝔱𝔞𝔠𝔨. 𝔊𝔞𝔦𝔫𝔢𝔡 𝔥𝔞𝔫𝔡𝔰-𝔬𝔫 𝔢𝔵𝔭𝔢𝔯𝔦𝔢𝔫𝔠𝔢 𝔦𝔫 𝔞𝔲𝔱𝔥𝔢𝔫𝔱𝔦𝔠𝔞𝔱𝔦𝔬𝔫, ℜ𝔈𝔖𝔗 𝔄𝔓ℑ𝔰, 𝔞𝔫𝔡 𝔐𝔬𝔫𝔤𝔬𝔇𝔅 𝔰𝔠𝔥𝔢𝔪𝔞𝔰.",
        },
        {
          id: 3,
          date: "2️⃣0️⃣2️⃣1️⃣ - 2️⃣0️⃣2️⃣2️⃣",
          position: "𝕱𝖗𝖊𝖊𝖑𝖆𝖓𝖈𝖊 𝖂𝖊𝖇 𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗",
          company: "𝕊𝕖𝕝𝕗-𝔼𝕞𝕡𝕝𝕠𝕪𝕖𝕕",
          details: "𝔇𝔢𝔳𝔢𝔩𝔬𝔭𝔢𝔡 𝔠𝔲𝔰𝔱𝔬𝔪 𝔴𝔢𝔟𝔰𝔦𝔱𝔢𝔰 𝔣𝔬𝔯 𝔩𝔬𝔠𝔞𝔩 𝔟𝔲𝔰𝔦𝔫𝔢𝔰𝔰𝔢𝔰 𝔲𝔰𝔦𝔫𝔤 ℌ𝔗𝔐𝔏, ℭ𝔖𝔖, 𝔍𝔞𝔳𝔞𝔖𝔠𝔯𝔦𝔭𝔱, 𝔞𝔫𝔡 𝔚𝔬𝔯𝔡𝔓𝔯𝔢𝔰𝔰. 𝔉𝔬𝔠𝔲𝔰𝔢𝔡 𝔬𝔫 𝔭𝔢𝔯𝔣𝔬𝔯𝔪𝔞𝔫𝔠𝔢, 𝔖𝔈𝔒, 𝔞𝔫𝔡 𝔪𝔬𝔟𝔦𝔩𝔢-𝔣𝔦𝔯𝔰𝔱 𝔡𝔢𝔰𝔦𝔤𝔫.",
        },
      ];

      const experienceContent = experienceList
        .map((ele) => {
          return `
            <div class="experience-box" key="${ele?.id}">
              <h4>${ele?.date}</h4>
              <h3>${ele?.position}</h3>

              <div class="company-name">
                <span></span>
                <p>${ele?.company}</p>
              </div>

              <p>${ele?.details}</p>
            </div>
        `;
        })
        .join("");

      if (experiences) {
        experiences.innerHTML = experienceContent;
      }
    } else if (tab.dataset.section === "education") {
      const education = document.querySelector(".education-list");

      const educationList = [
        {
          id: 1,
          date: "2️⃣0️⃣2️⃣2️⃣ - 2️⃣0️⃣2️⃣6️⃣",
          degree: "𝔹𝕒𝕔𝕙𝕖𝕝𝕠𝕣 𝕠𝕗 𝕋𝕖𝕔𝕙𝕟𝕠𝕝𝕠𝕘𝕪 (𝔼ℂ𝔼)",
          institution: "𝕵𝖆𝖞𝖕𝖊𝖊 𝖀𝖓𝖎𝖛𝖊𝖗𝖘𝖎𝖙𝖞 𝖔𝖋 𝕰𝖓𝖌𝖎𝖓𝖊𝖊𝖗𝖎𝖓𝖌 𝕬𝖓𝖉 𝕿𝖊𝖈𝖍𝖓𝖔𝖑𝖔𝖌𝖞, 𝕲𝖚𝖓𝖆 𝕸𝕻.",
          details: "𝔖𝔱𝔲𝔡𝔦𝔢𝔡 𝔠𝔬𝔯𝔢 𝔰𝔲𝔟𝔧𝔢𝔠𝔱𝔰 𝔩𝔦𝔨𝔢 𝔇𝔞𝔱𝔞 𝔖𝔱𝔯𝔲𝔠𝔱𝔲𝔯𝔢𝔰, 𝔚𝔢𝔟 𝔇𝔢𝔳𝔢𝔩𝔬𝔭𝔪𝔢𝔫𝔱, 𝔞𝔫𝔡 𝔒𝔭𝔢𝔯𝔞𝔱𝔦𝔫𝔤 𝔖𝔶𝔰𝔱𝔢𝔪𝔰. 𝔅𝔲𝔦𝔩𝔱 𝔪𝔲𝔩𝔱𝔦𝔭𝔩𝔢 𝔞𝔠𝔞𝔡𝔢𝔪𝔦𝔠 𝔭𝔯𝔬𝔧𝔢𝔠𝔱𝔰 𝔲𝔰𝔦𝔫𝔤 𝔍𝔞𝔳𝔞𝔖𝔠𝔯𝔦𝔭𝔱 𝔞𝔫𝔡 𝔱𝔥𝔢 𝔐𝔈ℜ𝔑 𝔰𝔱𝔞𝔠𝔨.",
        },
        {
          id: 2,
          date: "2️⃣0️⃣2️⃣0️⃣ - 2️⃣0️⃣2️⃣2️⃣",
          degree: "ℍ𝕚𝕘𝕙𝕖𝕣 𝕊𝕖𝕔𝕠𝕟𝕕𝕒𝕣𝕪 𝔼𝕕𝕦𝕔𝕒𝕥𝕚𝕠𝕟 (ℍ𝕊ℂ - 𝕞𝕒𝕥𝕙𝕤)",
          institution: "𝕿𝖎𝖑𝖆𝖐 𝖕𝖚𝖇𝖑𝖎𝖈 𝕾𝖊𝖓𝖎𝖆𝖗 𝕾𝖊𝖈𝖔𝖓𝖉𝖆𝖗𝖞 𝕾𝖈𝖍𝖔𝖔𝖑 , 𝕶𝖔𝖙𝖆 𝕽𝕵.",
          details: "𝔉𝔬𝔠𝔲𝔰𝔢𝔡 𝔬𝔫 𝔓𝔥𝔶𝔰𝔦𝔠𝔰, ℭ𝔥𝔢𝔪𝔦𝔰𝔱𝔯𝔶, 𝔞𝔫𝔡 𝔐𝔞𝔱𝔥𝔢𝔪𝔞𝔱𝔦𝔠𝔰. 𝔇𝔢𝔳𝔢𝔩𝔬𝔭𝔢𝔡 𝔞 𝔰𝔱𝔯𝔬𝔫𝔤 𝔣𝔬𝔲𝔫𝔡𝔞𝔱𝔦𝔬𝔫 𝔦𝔫 𝔩𝔬𝔤𝔦𝔠𝔞𝔩 𝔱𝔥𝔦𝔫𝔨𝔦𝔫𝔤 𝔞𝔫𝔡 𝔭𝔯𝔬𝔟𝔩𝔢𝔪-𝔰𝔬𝔩𝔳𝔦𝔫𝔤.",
        },
        {
          id: 3,
          date: "2️⃣0️⃣1️⃣0️⃣ - 2️⃣0️⃣2️⃣0️⃣",
          degree: "𝕊𝕖𝕔𝕠𝕟𝕕𝕒𝕣𝕪 𝕊𝕔𝕙𝕠𝕠𝕝 ℂ𝕖𝕣𝕥𝕚𝕗𝕚𝕔𝕒𝕥𝕖 (𝕊𝕊ℂ)",
          institution: "𝕸𝖆𝖓𝖙𝖍𝖆𝖓 𝕾𝖈𝖍𝖔𝖔𝖑, 𝕶𝖔𝖙𝖆 𝕽𝕵.",
          details: "ℭ𝔬𝔪𝔭𝔩𝔢𝔱𝔢𝔡 𝔟𝔞𝔰𝔦𝔠 𝔰𝔠𝔥𝔬𝔬𝔩𝔦𝔫𝔤 𝔴𝔦𝔱𝔥 𝔡𝔦𝔰𝔱𝔦𝔫𝔠𝔱𝔦𝔬𝔫. 𝔄𝔠𝔱𝔦𝔳𝔢𝔩𝔶 𝔭𝔞𝔯𝔱𝔦𝔠𝔦𝔭𝔞𝔱𝔢𝔡 𝔦𝔫 𝔠𝔬𝔪𝔭𝔲𝔱𝔢𝔯 𝔠𝔩𝔲𝔟𝔰 𝔞𝔫𝔡 𝔱𝔢𝔠𝔥-𝔯𝔢𝔩𝔞𝔱𝔢𝔡 𝔢𝔳𝔢𝔫𝔱𝔰.",
        },
      ];

      const educationContent = educationList
        .map((ele) => {
          return `
            <div class="experience-box" key="${ele?.id}">
              <h4>${ele?.date}</h4>
              <h3>${ele?.degree}</h3>

              <div class="company-name">
                <span></span>
                <p>${ele?.institution}</p>
              </div>

              <p>${ele?.details}</p>
            </div>
        `;
        })
        .join("");

      if (education) {
        education.innerHTML = educationContent;
      }
    } else if (tab.dataset.section === "skills") {
      const skills = document.querySelector(".skill-list");

      const skillList = [
        {
          id: 1,
          name: "HTML - Hyper Text Markup Language",
          icon: "ASSETS/HTML.png",
        },
        {
          id: 2,
          name: "CSS - Cascading Style Sheet",
          icon: "ASSETS/CSS.png",
        },
        {
          id: 3,
          name: "JavaScript",
          icon: "ASSETS/JAVASCRIPT.png",
        },
        {
          id: 4,
          name: "MongoDB",
          icon: "ASSETS/MANGODB.png",
        },
        {
          id: 5,
          name: "Bootstrap",
          icon: "ASSETS/BOOTSTRAP.png",
        },
        {
          id: 6,
          name: "Node JS",
          icon: "ASSETS/NODEJS.png",
        },
        {
          id: 7,
          name: "React JS",
          icon: "ASSETS/REACTJS.png",
        },
        {
          id: 8,
          name: "PYTHON",
          icon: "ASSETS/PYTHON.png",
        },
        {
          id: 9,
          name: "C++",
          icon: "ASSETS/C++.png",
        },
        {
          id: 10,
          name: "C",
          icon: "ASSETS/C.png",
        },
        {
          id: 11,
          name: "JAVA",
          icon: "ASSETS/JAVA.png",
        },
        {
          id: 12,
          name: "APP DEVELOPMENT",
          icon: "ASSETS/APP-DEVELOPMENT.png",
        },
        {
          id: 13,
          name: "WEB DEVELOPMENT",
          icon: "ASSETS/WEB-DEVELOPMENT.png",
        },
      ];

      const skillContent = skillList
        .map((ele) => {
          return `
            <div class="skill-box" key=${ele?.id}>
              <img 
              src=${ele?.icon}
              alt="${ele?.name}"
              title="${ele?.name}"
              loading="lazy"/>
            </div>
        `;
        })
        .join("");

      if (skills) {
        skills.innerHTML = skillContent;
      }
    } else if (tab.dataset.section === "about-me") {
      const myInfo = document.querySelector(".my-info");

      const infoList = [
        {
          id: 1,
          key: "ꪀꪖꪑꫀ : ",
          value: "я𝒶𝕛𝐞sђ 𝕝𝐎đ𝔥α",
        },
        {
          id: 2,
          key: "ᥴꪮꪊꪀꪻ᥅ꪗ : ",
          value: "ᶤภᗪ𝔦α",
        },
        {
          id: 3,
          key: "ρꪖᦓᦓ꠸ꪮꪀꪖꪻꫀ : ",
          value: "ωᗴβ-ＤẸ𝐕€𝓁Ỗ卩м𝐄几𝕥 ⅋ ᗩρｐ-𝔻𝒆ᵛ𝐄𝓵ㄖ𝔭ᵐ€ᑎ𝕋",
        },
        {
          id: 4,
          key: "ꫀ᥊ρꫀ᥅꠸ꫀꪀᥴꫀ : ",
          value: "３+ 𝕞𝕆ℕ𝕋Ⓗs",
        },
        {
          id: 5,
          key: "ꪖᦔᦔ᥅ꫀᦓᦓ : ",
          value: "Ａ𝓦卂η , ŕⒶģⓗ๏ＧａⓇħ , ĞᵘŇＡ ᗰᵖ.",  
        },
      ];

      const infoContent = infoList
        .map((ele) => {
          return `
            <div class="info-box" key=${ele?.id}>
              <span>${ele?.key}</span>
              <span>${ele?.value}</span>
            </div>
        `;
        })
        .join("");

      if (myInfo) {
        myInfo.innerHTML = infoContent;
      }
    }
  });
});
