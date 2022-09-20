let form = document.querySelector("form")
let inp = document.getElementById("inp")
let ul = document.getElementById("ul")
let addbtn=document.getElementById("button-addon2")
let newh1 = document.createElement("h2");
addbtn.addEventListener("click",addvalue)
function addvalue(e){
    if(inp.value==""){
     alert("Please inter task")

    }else{
        let addli= document.createElement("li")
    let inpvalue = inp.value
    addli.className="list-group-item d-flex justify-content-between "
    addli.innerHTML=`<h1>${inpvalue}</h1> <div><button type="button" class="btn btn-warning">Edit</button><button type="button" class="btn btn-danger">Delete</button></div>`
    console.log(inp.value)
    // let removebtn = document.createElement("button")
    // removebtn.innerText="remove"
    // removebtn.className ="btn btn-danger"
    // addli.appendChild(removebtn);
    ul.appendChild(addli)
    newh1.remove()
    inp.value=""
   
    }
   

    
    
}

ul.addEventListener("click",delli);
function delli(e){
   
   if(e.target.className.includes("btn-danger")){
    let li = e.target.parentElement.parentElement 
    console.log("ram ram")
    ul.removeChild(li)
    if(ul.childElementCount=="0"){
        console.log("ram")
    
        newh1.textContent="Please inter your task"
        ul.appendChild(newh1)
    }
   }


   if(e.target.textContent.includes("Edit")){
    
     let h1value = e.target.parentElement.previousElementSibling
     let li = e.target.parentElement.parentElement 
     
     
     let editinpt = document.createElement("input")
     editinpt.className="editinpt"
     editinpt.value = h1value.textContent;
     li.replaceChild(editinpt, h1value)
     
     e.target.textContent="Save"
   }else
     {
        if(e.target.textContent.includes("Save")){
    console.log("hii")
    let h1value = e.target.parentElement.previousElementSibling
    console.log(h1value.value)
    let li = e.target.parentElement.parentElement 
    
    let editinpt = document.createElement("h2")
    editinpt.textContent = h1value.value;
    li.replaceChild(editinpt, h1value)
    e.target.textContent="Edit"
    
        }
   }
}
if(ul.childElement==null){
    console.log("ram")

    newh1.textContent="Please inter your task"
    ul.appendChild(newh1)
}

let alldel = document.querySelector(".alldel");
alldel.addEventListener("click",deleteall);
function deleteall(e){
    ul.innerHTML=""
}