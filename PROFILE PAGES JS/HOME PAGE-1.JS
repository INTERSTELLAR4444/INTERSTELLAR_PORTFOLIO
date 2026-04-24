const toggle = document.getElementById("menu-toggle");

toggle.addEventListener("change", () => {
  toggle.checked = true;
  document.body.classList.remove("no-scroll");
});

const words = [
  "₱ⱧłⱠØ₴Ø₱ⱧɆⱤ",
  "₮ⱤØɄ฿ⱠɆ₴ⱧØØ₮ɆⱤ",
  "₩Ɇ฿ ĐɆVɆⱠØ₱ɆⱤ",
  "Ɇ₦₲ł₦ɆɆⱤ",
  "₳₱₱ ĐɆVɆⱠØ₱ɆⱤ",
  "₮Ɇ₵Ⱨ₦ł₵ł₳₦",
];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex == currentWord.length) {
      isDeleting = true;
      setTimeout(type, nextWordDelay);
    } else {
      setTimeout(type, typingDelay);
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex == 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, erasingDelay);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) type();
});

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    navlinks.forEach((l) => l.classList.remove("active"));

    link.classList.add("active");

    const tabName = link.dataset.tab;

    tabs.forEach((tab) => {
      if (tab.id === tabName) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });

    if (link.dataset.tab === "services") {
      const serviceList = [
        {
          id: 1,
          icon: "ph-code",
          text: "𝖂𝖊𝖇𝖘𝖎𝖙𝖊 𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖒𝖊𝖓𝖙",
          para: "𝕀 𝕓𝕦𝕚𝕝𝕕 𝕣𝕖𝕤𝕡𝕠𝕟𝕤𝕚𝕧𝕖 𝕒𝕟𝕕 𝕞𝕠𝕕𝕖𝕣𝕟 𝕨𝕖𝕓𝕤𝕚𝕥𝕖𝕤 𝕦𝕤𝕚𝕟𝕘 𝕥𝕙𝕖 𝕝𝕒𝕥𝕖𝕤𝕥 𝕥𝕖𝕔𝕙𝕟𝕠𝕝𝕠𝕘𝕚𝕖𝕤 𝕝𝕚𝕜𝕖 ℍ𝕋𝕄𝕃, ℂ𝕊𝕊, 𝕁𝕒𝕧𝕒𝕊𝕔𝕣𝕚𝕡𝕥, ℝ𝕖𝕒𝕔𝕥, 𝕒𝕟𝕕 𝕄𝔼ℝℕ 𝕤𝕥𝕒𝕔𝕜.",
        },
        {
          id: 2,
          icon: "ph-paint-brush",
          text: "𝖀𝖃/𝖀𝕴 𝕯𝖊𝖘𝖎𝖌𝖓",
          para:"ℂ𝕦𝕤𝕥𝕠𝕞 𝕞𝕠𝕓𝕚𝕝𝕖 𝕒𝕡𝕡𝕤 𝕗𝕠𝕣 𝔸𝕟𝕕𝕣𝕠𝕚𝕕 𝕒𝕟𝕕 𝕚𝕆𝕊 𝕦𝕤𝕚𝕟𝕘 ℝ𝕖𝕒𝕔𝕥 ℕ𝕒𝕥𝕚𝕧𝕖 𝕒𝕟𝕕 𝔼𝕩𝕡𝕠, 𝕕𝕖𝕤𝕚𝕘𝕟𝕖𝕕 𝕥𝕠 𝕡𝕣𝕠𝕧𝕚𝕕𝕖 𝕖𝕩𝕔𝕖𝕝𝕝𝕖𝕟𝕥 𝕌𝕀/𝕌𝕏 𝕒𝕟𝕕 𝕡𝕖𝕣𝕗𝕠𝕣𝕞𝕒𝕟𝕔𝕖.",
        },
        {
          id: 3,
          icon: "ph-trend-up",
          text: "𝕾𝕰𝕺 𝕺𝖕𝖙𝖎𝖒𝖎𝖟𝖆𝖙𝖎𝖔𝖓",
          para: "𝕀 𝕚𝕞𝕡𝕣𝕠𝕧𝕖 𝕨𝕖𝕓𝕤𝕚𝕥𝕖 𝕧𝕚𝕤𝕚𝕓𝕚𝕝𝕚𝕥𝕪 𝕠𝕟 𝕤𝕖𝕒𝕣𝕔𝕙 𝕖𝕟𝕘𝕚𝕟𝕖𝕤 𝕨𝕚𝕥𝕙 𝕠𝕡𝕥𝕚𝕞𝕚𝕫𝕖𝕕 𝕤𝕥𝕣𝕦𝕔𝕥𝕦𝕣𝕖, 𝕜𝕖𝕪𝕨𝕠𝕣𝕕𝕤, 𝕒𝕟𝕕 𝕡𝕖𝕣𝕗𝕠𝕣𝕞𝕒𝕟𝕔𝕖 𝕓𝕖𝕤𝕥 𝕡𝕣𝕒𝕔𝕥𝕚𝕔𝕖𝕤.",
        },
        {
          id: 4,
          icon: "ph-palette ",
          text: "𝕲𝖗𝖆𝖕𝖍𝖎𝖈 𝕯𝖊𝖘𝖎𝖌𝖓",
          para: "𝕆𝕗𝕗𝕖𝕣𝕚𝕟𝕘 𝕖𝕩𝕡𝕖𝕣𝕥 𝕒𝕕𝕧𝕚𝕔𝕖 𝕒𝕟𝕕 𝕤𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤 𝕗𝕠𝕣 𝕥𝕖𝕔𝕙 𝕡𝕣𝕠𝕛𝕖𝕔𝕥𝕤, 𝕙𝕖𝕝𝕡𝕚𝕟𝕘 𝕚𝕟𝕕𝕚𝕧𝕚𝕕𝕦𝕒𝕝𝕤 𝕒𝕟𝕕 𝕤𝕥𝕒𝕣𝕥𝕦𝕡𝕤 𝕨𝕚𝕥𝕙 𝕡𝕣𝕠𝕛𝕖𝕔𝕥 𝕡𝕝𝕒𝕟𝕟𝕚𝕟𝕘 𝕒𝕟𝕕 𝕤𝕥𝕒𝕔𝕜 𝕕𝕖𝕔𝕚𝕤𝕚𝕠𝕟𝕤.",
        },
        {
          id: 5,
          icon: "ph-video",
          text: "𝕸𝖊𝖓𝖙𝖔𝖗𝖘𝖍𝖎𝖕 &amp; 𝕿𝖗𝖆𝖎𝖓𝖎𝖓𝖌",
          para: "ℙ𝕖𝕣𝕤𝕠𝕟𝕒𝕝 𝕞𝕖𝕟𝕥𝕠𝕣𝕤𝕙𝕚𝕡 𝕗𝕠𝕣 𝕓𝕖𝕘𝕚𝕟𝕟𝕖𝕣𝕤 𝕥𝕠 𝕒𝕕𝕧𝕒𝕟𝕔𝕖𝕕 𝕝𝕖𝕒𝕣𝕟𝕖𝕣𝕤 𝕚𝕟 𝕨𝕖𝕓 𝕕𝕖𝕧𝕖𝕝𝕠𝕡𝕞𝕖𝕟𝕥, 𝕚𝕟𝕔𝕝𝕦𝕕𝕚𝕟𝕘 𝕝𝕚𝕧𝕖 𝕔𝕠𝕕𝕚𝕟𝕘 𝕤𝕖𝕤𝕤𝕚𝕠𝕟𝕤 𝕒𝕟𝕕 𝕔𝕒𝕣𝕖𝕖𝕣 𝕘𝕦𝕚𝕕𝕒𝕟𝕔𝕖.",
        },
        {
          id: 6,
          icon: "ph-camera",
          text: "𝓟𝓱𝓸𝓽𝓸𝓰𝓻𝓪𝓹𝓱𝔂",
          para: "𝔼𝕟𝕕-𝕥𝕠-𝕖𝕟𝕕 𝕕𝕖𝕝𝕚𝕧𝕖𝕣𝕪 𝕠𝕗 𝕗𝕣𝕖𝕖𝕝𝕒𝕟𝕔𝕖 𝕡𝕣𝕠𝕛𝕖𝕔𝕥𝕤 — 𝕗𝕣𝕠𝕞 𝕡𝕝𝕒𝕟𝕟𝕚𝕟𝕘 𝕥𝕠 𝕕𝕖𝕡𝕝𝕠𝕪𝕞𝕖𝕟𝕥 — 𝕨𝕚𝕥𝕙 𝕢𝕦𝕒𝕝𝕚𝕥𝕪 𝕒𝕤𝕤𝕦𝕣𝕒𝕟𝕔𝕖 𝕒𝕟𝕕 𝕡𝕠𝕤𝕥-𝕝𝕒𝕦𝕟𝕔𝕙 𝕤𝕦𝕡𝕡𝕠𝕣𝕥.",
        },
      ];

      const services = document.getElementsByClassName("service-list");

      const innerContent = serviceList
        .map((l) => {
          return `
          <div class="box">
              <div class="head-icons">
                <i class="ph ${l?.icon}"></i>

                <span>
                  <i class="ph ph-arrow-down-right"></i>
                </span>
              </div>

              <h3>${l?.text}</h3>
              <span id="spacer"></span>
              <p>
                ${l?.para}
              </p>
          </div>
          `;
        })
        .join("");

      Array.from(services).forEach((ele) => {
        ele.innerHTML = innerContent;
      });
    }

    toggle.checked = false;
  });
});
