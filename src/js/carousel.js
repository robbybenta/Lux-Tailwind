import { addClass, removeClass } from "./utils-class";
const carouselId = document.getElementById("carousel");
const carouselItems = carouselId.getElementsByClassName("flex")[0];
const carouselContainer = carouselId.getElementsByClassName("container")[0];

function carouselCal() {
  const carouselOffset = carouselContainer.getBoundingClientRect().left;
  carouselItems.style.paddingLeft = `${carouselOffset - 16}px`;
  carouselItems.style.paddingRight = `${carouselOffset - 16}px`;
}
function slide(wrapper, items) {
  let posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    itemToShow = 4,
    slides = items.getElementsByClassName("card"),
    slidesLength = slides.length,
    slideSize = items.getElementsByClassName("card")[0].offsetWidth,
    index = 0,
    allowShift = true

    wrapper.classList.add("loaded")
    items.onmousedown=dragStart;
    items.addEventListener("touchstart",dragStart);
    items.addEventListener("touchend",dragEnd);
    items.addEventListener("touchmove",dragAction);
    items.addEventListener("transitionend",checkIndex);

    function dragStart(e){
        e=e||window.event
        e.preventDefault();
        posInitial=items.offsetLeft
        if(e.type=="touchstart"){
            console.log(e.touches)
            posX1=e.touches[0].clientX
        }
        else{
            posX1=e.clientX;
            document.onmouseup=dragEnd
            document.onmousemove=dragAction
        }

    }
    function dragAction(e){
        e=e||window.event
        if(e.type=="touchmove"){
            posX2=posX1-e.touches[0].clientX
            posX1=e.touches[0].clientX
        }else{
            posX2=posX1-e.clientX
            posX1=e.clientX
        }
        items.style.left=`${items.offsetLeft-posX2}px`
    }

}
if (carouselId) {
  slide(carouselId, carouselItems);
  window.addEventListener("load", carouselCal);
  window.addEventListener("resize", carouselCal);
}
