const whyData = [
    {
        icon:"../images/whyUs/w1.png",
        title:"Expert Management",
        subtitle:"generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a",
        "image desc":"man head icon"
    },
    {
        icon:"../images/whyUs/w2.png",
        title:"Secure Investment",
        subtitle:"generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a",
        "image desc":"investment icon"
    },
    {
        icon:"../images/whyUs/w3.png",
        title:" Customer Support",
        subtitle:"generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a",
        "image desc":"setting icon"
    },
    {
        icon:"../images/whyUs/w4.png",
        title:"Market Research",
        subtitle:"generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a",
        "image desc":"market icon"
    },
];

const constainer = document.getElementById("why-section");

constainer.innerHTML = whyData.map(data=>{
    return `<div class="why-section_box">
    <div class="why-section_bg">
      <img src="../images/whyUs/why-bg.png" alt="world's map">
    </div>
    <div class="why-section_detail">
      <div class="why-section_icon">
        <img src=${data.icon} alt=${data["image desc"]}>
      </div>
      <div class="why-section_text">
        <h2>${data.title}</h2>
        <p>${data.subtitle}</p>
      </div>
    </div>
  </div>`
}).join("");