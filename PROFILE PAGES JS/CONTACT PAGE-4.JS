const media = document.querySelector(".contact-media");

const contactList = [
  {
    id: 1,
    icon: "ph ph-phone-call",
    name: "℘hׁׅ֮ᨵׁׅꪀׁׅꫀׁׅܻ",
    value: "+9️⃣1️⃣ 7️⃣0️⃣8️⃣9️⃣0️⃣4️⃣9️⃣7️⃣0️⃣4️⃣",
    href: "tel:+917089049704",
  },
  {
    id: 2,
    icon: "ph ph-envelope",
    name: "ꫀׁׅܻ- ꩇׁׅ݊ɑׁׅ֮ꪱׁׅᥣׁׅ֪", 
    value: "𝕚𝕟𝕥𝕖𝕣𝕤𝕥𝕖𝕝𝕝𝕒𝕣𝕨𝕖𝕒𝕜𝕤𝕔𝕚𝕖𝕟𝕥𝕚𝕤𝕥@𝕘𝕞𝕒𝕚𝕝.𝕔𝕠𝕞",
    href: "mailto:interstellarweakscientist@gmail.com",
  },
  {
    id: 3,
    icon: "ph ph-map-pin-area",
    name: "ᝯׁᨵׁׅυׁׅꪀׁׅtׁׅꭈׁׅᨮ꫶ׁׅ֮",
    value: "꠸ꪀᦔ꠸ꪖ",
    href: "#",
  },
];

const contactContent = contactList
  .map((ele) => {
    return `
    <div class="media" key="${ele?.id}">
        <span>
            <i class="${ele?.icon}"></i>
        </span>

        <div class="contact-value">
            <p>${ele?.name}</p>
            <a href="${ele?.href}">${ele?.value}</a>
        </div>
    </div>
    `;
  })
  .join("");

if (media) media.innerHTML = contactContent;

const sendBtn = document.querySelector("#send-msg");

const originalText = sendBtn.innerHTML;
const originalStyles = {
  backgroundColor: sendBtn.style.backgroundColor,
  color: sendBtn.style.color,
  border: sendBtn.style.border,
  boxShadow: sendBtn.style.boxShadow,
};

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    sendBtn.innerHTML = "Sending...";
    sendBtn.style.backgroundColor = "gray";
    sendBtn.style.color = "white";
    sendBtn.style.border = "none";
    sendBtn.style.boxShadow = "none";
    sendBtn.disabled = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !phone || !message) {

      sendBtn.innerHTML = originalText;
      Object.assign(sendBtn.style, originalStyles);
      sendBtn.disabled = false;

      return Toastify({
        text: "All fields are required !",
        duration: 3000,
        gravity: "top",
        position: "center",
        close: true,
        style: {
          background: "rgb(206, 16, 16)",
        },
      }).showToast();
    }

   emailjs
  .send("service_4k8cvdk", "template_dmetgdw", {
    name,
    email,
    phone,
    message,
  })
      .then(
        () => {
          Toastify({
            text: "Message Sent !",
            duration: 3000,
            gravity: "top",
            position: "center",
            close: true,
            style: {
              background: "rgb(9, 222, 38)",
            },
          }).showToast();

          setTimeout(() => {
            sendBtn.innerHTML = originalText;
            Object.assign(sendBtn.style, originalStyles);
            sendBtn.disabled = false;
          }, 2000);
        },
        (error) => {
          console.log("FAILED...", error);

          Toastify({
            text: "Message Failed. Try again.",
            duration: 3000,
            gravity: "top",
            position: "center",
            close: true,
            style: {
              background: "rgb(206, 16, 16)",
            },
          }).showToast();

          sendBtn.innerHTML = originalText;
          Object.assign(sendBtn.style, originalStyles);
          sendBtn.disabled = false;
        }
      );
  });