const smoothScroolAnchor =  document.querySelectorAll("a[href^='#']")
for (let index = 0; index < smoothScroolAnchor.length; index++) {
    const el = smoothScroolAnchor [index];
    el.addEventListener("click",function(ev){
        ev.preventDefault();
        if(document.getElementById(this.getAttribute("href").replace("#","")))
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        })
        
    })
}