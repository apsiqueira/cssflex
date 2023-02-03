
let  buttonMenu = document.querySelector("button");

let menu =document.createElement("div");
menu.innerHTML="<a>Home</a><a>Sobre</a><a>Produtos</a><a>Contatos</a>";
menu.classList.add("menu")

buttonMenu.appendChild(menu);
menu.style.display="none";



buttonMenu.addEventListener(
  "click",function(){
    if(menu.style.display==="none"){
      menu.style.display="flex";

    }
    else{
      menu.style.display="none";

    }

    
  
   
    
  


  }
)



