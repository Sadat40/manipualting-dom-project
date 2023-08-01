let imageButton= document.getElementById("img-button");
let paraButton=document.getElementById("p-button");
let imgDiv=document.getElementById("img-div");
let pDiv=document.getElementById("p-div");;
imageButton.onclick=function(){
    pDiv.style.display="none";
    imgDiv.style.display="block";
    let newImg=document.createElement("img");
    newImg.src="joker.png";
    newImg.style.width="100px";
    newImg.style.height="100px";
    imgDiv.appendChild(newImg);
}

paraButton.onclick=function(){
    imgDiv.style.display="none";
    pDiv.style.display="block";
    const para= document.createElement("p");
    para.innerText="It's to the point where not being basic is basic";
    para.style.backgroundColor="black";
    para.style.color="white";
    pDiv.appendChild(para);
}