// Lista de Hobbies
document.getElementById("insertItemHobbies").addEventListener("click", function(event){
    event.preventDefault();
  
    var input = document.getElementById("inputHobbies");
  
    var rawText = document.createTextNode(input.value);
    var li = document.createElement("LI");
    li.appendChild(rawText);
    document.getElementById("hobbieList").appendChild(li);
  
    input.value = "";
  });
  
  // Lista de Class
  document.getElementById("addLearn").addEventListener("click", function(event){
    event.preventDefault();
  
    var input = document.getElementById("inputLearn");
  
    var rawText = document.createTextNode(input.value);
    var li = document.createElement("LI");
    li.appendChild(rawText);
    document.getElementById("classList").appendChild(li);
  
    input.value = "";
  });