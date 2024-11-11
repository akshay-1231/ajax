'use strict'
 //dom event listner
document.getElementById('btn1').addEventListener('click',function(){
// alert("button 1 clicked");
var xmlhttp =new XMLHttpRequest();
console.log(xmlhttp);
console.log(xmlhttp.readyState);
//if readystate 0-request not initalize.0=initial value
console.log(xmlhttp.status);

xmlhttp.onreadystatechange = function(){
    console.log(xmlhttp.readyState,xmlhttp.status);
    if(xmlhttp.readyState ==4 && xmlhttp.status ==200){
        console.log(xmlhttp.responseText);
        var res=JSON.parse(xmlhttp.responseText);
        console.log(res);
         //dom manupulation
         //short circuit operator
        res&&res.length>0&&res.forEach(function(v,i) {
             console.log(v,i);
             var divtag =document.createElement("div");
             var imgtag=document.createElement("img");
             var h2tag=document.createElement("h2");
             var ptag=document.createElement("p");
            imgtag.src=v.image;
            h2tag.innerHTML=v.price;
            ptag.innerHTML=v.title;
            divtag.className='col-xl-3 text-center';
            imgtag.className="img-fluid";
             divtag.append(imgtag,h2tag,ptag);
             document.querySelector("#row").append(divtag);
        });
    }
    //1-works when opeen method initiated and request has been setup
};
xmlhttp.open("GET","https://fakestoreapi.com/products");
//open method allow to conect or heelp to perforn feching data from server

xmlhttp.send();  //send request to server and resystate will become 2.
  //3-request its in progress mode.
  //4- request cycle complted.
});