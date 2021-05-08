//selecting all required elements
const gallery = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".bi"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = ()=>{//once window is loaded
    for(let i=0; i < gallery.length; i++){
        totalImg.textContent = gallery.length;
        let newIndex = i; //passing i value to newIndex variable
        let clickImgIndex;
       gallery[i].onclick = ()=>{
           
           clickImgIndex = newIndex; //passing clicked image index to clickImgIndex variable
           console.log(i);
           function preview(){
            currentImg.textContent = newIndex+1;
               let selectedImgUrl = gallery[newIndex].querySelector("img").src; //getting user clicked image url
               previewImg.src = selectedImgUrl; //passing user clicked url to previewing source
               
           }
             
           //let's work on left and right button
           const prevBtn = document.querySelector(".prev");
           const nextBtn = document.querySelector(".next");
           if(newIndex == 0){
            prevBtn.style.display = "none";
           }
           if(newIndex >= gallery.length - 1){
            nextBtn.style.display = "none";

           }
           prevBtn.onclick = ()=>{
               newIndex--; //decrement newIndex
               if(newIndex == 0){
                   preview();
                   prevBtn.style.display = "none";

               }else{
                preview(); //calling again above function to update image
                nextBtn.style.display = "block";

               }
              
           }

           nextBtn.onclick = ()=>{
            newIndex++; //increment newIndex
            if(newIndex >= gallery.length - 1){
                preview();
                nextBtn.style.display = "none";

            }else{
             preview(); //calling again above function to update image
             prevBtn.style.display = "block";

            }
           
        }

           preview(); //calling the above function
           previewBox.classList.add("show");
           shadow.style.display = "block";
           document.querySelector("body").style.overflow = "hidden";

           closeIcon.onclick = ()=>{
               newIndex = clickImgIndex; //assigning user first clicked img index to newIndex varaible
               prevBtn.style.display = "block";
               nextBtn.style.display = "block";
               previewBox.classList.remove("show");
               shadow.style.display = "none";
               document.querySelector("body").style.overflow = "auto";



           }
       }
    
    }
}