var img_col = document.querySelectorAll(".row div");
let drillImg = document.querySelector("#drills-img");
let mobilityImg = document.querySelector("#mobility-img");
let strengthImg = document.querySelector("#strength-img");
let arrowIcons = document.querySelectorAll("i");

img_col.forEach(image =>{
    
    image.addEventListener("mouseover", function(){
            if(this.getAttribute("id") === "drills-img"){
            drillImg.setAttribute("class","col-lg-6");
            mobilityImg.setAttribute("class","col-lg-3");
            strengthImg.setAttribute("class","col-lg-3");
        }
        else if(this.getAttribute("id") === "mobility-img"){
            drillImg.setAttribute("class","col-lg-3");
            mobilityImg.setAttribute("class","col-lg-6");
            strengthImg.setAttribute("class","col-lg-3");
        }
        else{
            drillImg.setAttribute("class","col-lg-3");
            mobilityImg.setAttribute("class","col-lg-3");
            strengthImg.setAttribute("class","col-lg-6");
        }
        this.lastElementChild.classList.add("visible");
   })
    })

 img_col.forEach(image => {
    image.addEventListener("mouseout",function(){
        this.lastElementChild.classList.remove("visible");
    })
 })
