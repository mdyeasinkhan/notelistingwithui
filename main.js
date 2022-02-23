showNotes()
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy  + '-' + mm + '-' + dd;

const addNoteBtn = document.getElementById("addNoteBtn");
addNoteBtn.addEventListener("click", (e) =>{
    if(addTitle.value == "" || addText.value == ""){
        return alert("Please add note title and details")
    }
})
addNoteBtn.addEventListener("click", function(){
    let addTitle = document.getElementById("addTitle");
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");

    if(notes == null){
        notesObject = [];
    }else{
        notesObject = JSON.parse(notes)
    
    }



    let myObject  = {
        title: addTitle.value,
        text: addText.value
    }
    notesObject.push(myObject);

    localStorage.setItem("notes", JSON.stringify(notesObject));
    addTitle.value = "";
    addText.value = "";
    showNotes()
})

// Show Notes 
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObject = [];
    }else{
        notesObject = JSON.parse(notes);
    }

    let div = "";
    notesObject.forEach(function(element, index){
        div += 
        `
        <div class="noteslist col-md-5">
                            <div class="date"><h5>Date: ${today}</h5> </div>
                            <h3>${element.title} </h3>
                            <img class="img-border" src="img/Rectangle 7.png" alt="">
                            <p>${element.text}</p>
                            <div class="bottom-read d-flex justify-content-between">
                                <div>Read More..</div>
                                <div id="${index}" onclick="deleteNote(this.id)"><img src="img/image 1.png" alt=""></div>
                            </div>
                        </div>
        `
        let notesAll = document.getElementById("notes");
        notesAll.innerHTML = div
    });
    
}

// function deleteNote(index){
//     let notes = localStorage.getItem("notes");
//     if(notes == null){
//         notesObject = [];

//     }else{
//         notesObject = JSON.parse(notes);                               
//     }
//     notesObject.splice(index, 2);
//     localStorage.setItem("notes", JSON.stringify(notesObject));
//     showNotes();
// }

// Function to delete notes 
function deleteNote(index){
    let confirmDel = confirm("You are deleting this note!!!");
    if(confirmDel == true){
        let notes = localStorage.getItem("notes");
        if(notes == null){
            notesObject = [];
        }else{
            notesObject = JSON.parse(notes);
        }

        notesObject.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObject));
        showNotes();
    }
}


// localStorage.clear()