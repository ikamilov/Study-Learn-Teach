function show_function(divId,inhtmText) 
     {  
        var x = document.getElementById(divId).style.display; 

        if(x=="block")
        {
          document.getElementById(divId).style.display = "none";
          document.getElementById(inhtmText).innerHTML="<u>Show More...</u>";
        }
       if(x=="none")
       {
          document.getElementById(divId).style.display = "block";
          document.getElementById(inhtmText).innerHTML="<u>Hide</u>";
        }
     }
