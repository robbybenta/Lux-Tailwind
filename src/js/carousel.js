import {addClass,removeClass} from './utils-class'
const carouselId = document.getElementById("carousel")
const carouselItems= carouselId.getElementsByClassName("flex")[0]
const carouselContainer=carouselId.getElementsByClassName("container")[0]

function carouselCal(){
    const carouselOffset=carouselContainer.getBoundingClientRect().left
    carouselItems.style.paddingLeft = `${carouselOffset -16}px`
    carouselItems.style.paddingRight = `${carouselOffset -16}px`
    
}
function slide(wrapper,items){
    let posX1=0, posX2=0, posInitial,posFinal,threshold = 100
}
if(carouselId){
    window.addEventListener("load",carouselCal)
    window.addEventListener("resize",carouselCal)

}