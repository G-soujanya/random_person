let images=['1683813222244.jpg','1683813222256.jpg','1683813222273.jpg','1683813222230.jpg'];
let names=['Soujanya','Suguna','Sindhu','Namitha'];
let img=document.getElementById("r");
let n=document.getElementById("n");
function r(){
    let rn=Math.floor(Math.random()*images.length);
    img.src=images[rn];
    n.textContent=names[rn];
};