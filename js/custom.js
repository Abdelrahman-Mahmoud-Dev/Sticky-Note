function createNodes(noteTitle,noteBody){
    // ==> create Elements Stick Note
 
      var noNodes = document.getElementById("no-notes"),
         li = document.createElement("li"),
          a = document.createElement("a"),
          h2 = document.createElement("h2"),
          p = document.createElement("p"),
          buttonx = document.createElement("button"),
          txtTitle = document.createTextNode(noteTitle),
          txtBody = document.createTextNode(noteBody);
noNodes.classList.add("hidden")         
buttonx.classList.add("delete");
  // ==> append Elements to their parents
document.getElementById("notes").appendChild(li);
    li.appendChild(a)
    a.appendChild(buttonx);
    a.appendChild(h2);
    a.appendChild(p);
    //a.setAttribute("href","#")
    h2.appendChild(txtTitle);
    buttonx.appendChild(document.createTextNode("X"));
    p.appendChild(txtBody);
}
// funtion create Stick Note 
function createNote(){
    let noteTitle = document.getElementById("new-note-title").value,
        noteBody = document.getElementById("new-note-body").value; 
        if(noteTitle===""&&noteBody===""){

            alert ("write anything")
        }else{

    document.getElementById("new-note-title").value = "";
    document.getElementById("new-note-body").value = "";
    
    // call function that create Elements Stick Note 
    createNodes(noteTitle,noteBody);
    
    // loop by forEach on button(delete stick note) and put event click to delete stick note
    let ul = document.getElementById("notes"),
        noNodes = document.getElementById("no-notes"),
        buton = document.querySelectorAll("a button");
    buton.forEach(e => {
         e.addEventListener("click",function(e){   
           
         //this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
         //when click button delete(child element) ==>it remove parent element(sticky note)
           this.parentElement.parentElement.remove()
            if(ul.children.length===0){
                noNodes.classList.remove("hidden")
            }
        })

    });
}
}
// when click on create button call back func creatNote
document.querySelector(".btn").addEventListener("click",createNote)
