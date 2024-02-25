let inputfield = document.querySelector("#myInput");
let classItems = document.querySelectorAll(".classList");

inputfield.addEventListener("input",filterList);

function filterList () {
const filter =  inputfield.value.toLowerCase();

classItems.forEach((item)=>{
  let tex = item.textContent
  if(tex.toLowerCase().includes(filter.toLowerCase())){
    item.style.display = "";
  }else{
    item.style.display = "none";
  }
})
}