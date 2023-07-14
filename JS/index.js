// RESPONSIVE NAVBAR 

const mobile_nav = document.querySelector(".mobile-nav-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click', () => {
  headerElem.classList.toggle('active')
})




// portfolio tabbed component 

const p_btns = document.querySelector(".port-btns")
const p_btn = document.querySelectorAll(".port-btn")
const p_img_elem = document.querySelectorAll(".img-overlay")

p_btns.addEventListener('click', (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) => curElem.classList.remove("port-btn-active"));

  p_btn_clicked.classList.add("port-btn-active");


  // to find data attribute 
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.port-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("port-img-not-active"));

  img_active.forEach((curElem) => curElem.classList.remove("port-img-not-active"));

});



// SCROLL BUTTON 

const herosection = document.querySelector(".section-hero");

const footerelement = document.querySelector(".section-footer")

const scrollelement = document.createElement("div");
scrollelement.classList.add("scrolltop-style");

scrollelement.innerHTML = ` <ion-icon name="arrow-up-outline" class="scroll-top" ></ion-icon>`;

footerelement.after(scrollelement);

const scrolltop = () => {
  herosection.scrollIntoView({ behavior: "smooth" });
}
scrollelement.addEventListener("click", scrolltop)




// DATA NUMBER 

const countnum = document.querySelectorAll(".count-heading");

const speed = 200;

countnum.forEach((curElem) => {

  const updateNumber = () => {

    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber)

    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum);

    const incrementNumber = Math.trunc(targetNumber / speed);
    // console.log(incrementNumber);

    if (initialNum < targetNumber) {
      curElem.innerText = initialNum + incrementNumber;

      setTimeout(updateNumber, 10);
    }


  };

  updateNumber();
});

