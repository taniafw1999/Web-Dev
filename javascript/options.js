  var x = 1;
  function dropContent(){
    if (x==1)
      {document.getElementById("myDropDown").style.display = "block";
        x=0;
      }
    else
      {document.getElementById("myDropDown").style.display = "none";
          x=1;
      }

  }

  document.getElementById("change").addEventListener("click", response);

  function response(){
      //finds out which element user chooses
      var elem = document.getElementById("page-elem");
      var elemName= elem.options[elem.selectedIndex].value;
      //alert(elemName);

      //finds out which change the user wants
      var opt = document.getElementById("toggle-option");
      var optChoice = opt.options[opt.selectedIndex].value;

      //traverse through DOM
      var elemObjects = document.getElementsByTagName(elemName);

      //apply changes
      if(elemObjects[0]==null && elemName!="")
        alert("element does not exist in this page");
      else{

          if (optChoice == "bigFont")
            for (let i=0; i<elemObjects.length; i++){
              let elemChildren = elemObjects[i].children;
              for (let j=0;j<elemChildren.length;j++)
                elemChildren[j].style.fontSize = "1.25em";
            }

          if (optChoice == "smallFont")
            for (let i=0; i<elemObjects.length; i++){
              let elemChildren = elemObjects[i].children;

              for (let j=0;j<elemChildren.length;j++){
                elemChildren[j].style.fontSize = "0.75em";
              }
            }
          if (optChoice == "theme")
            for (let i=0; i<elemObjects.length; i++)
              elemObjects[i].style.backgroundColor = "green";

          //reload webpage to reverse changes
          if (optChoice == "default")
          for (let i=0; i<elemObjects.length; i++)
              window.location.reload();        
        }
}
