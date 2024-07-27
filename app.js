let btn=document.querySelector("button");
let inp=document.querySelector("input");
let list=document.querySelector("ul");
 
btn.addEventListener("click",function(){
    // console.log("button clicked");
    let item=document.createElement("li");
    item.innerText=inp.value;
    inp.value="";
    console.log(item.innerText);
    list.append(item);
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    item.append(delbtn);
});
list.addEventListener("click",function(event){
   if(event.target.nodeName="BUTTON"){
        let listitem =event.target.parentElement;
        listitem.remove();
   }
})
