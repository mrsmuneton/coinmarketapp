function stickySilk(){
    console.log("this is where the sticky silk function Starts");
    selection =[];
    selection = document.getElementsByClassName("bar");
    var potentialGhosts = selection.length; 
    var trapped=0;

    var i; 
        while (trapped < 4 ){
            //querysearch array
            section=document.getElementById("circle"+trapped);
            if (section.hasChildNodes()){ 
               trapped++;
                }else{section.innerHTML+= '<img class="img-thumbnail" src="'+querysearch[trapped][0]+'" />'; 
            trapped++; 
            
                }
    }

    for (i = 4; i < (potentialGhosts); i++) { 
    section =document.getElementById("circle"+i);
    if (section.hasChildNodes()){ 
        trapped++;
         }else{
             if (querysearch.length<potentialGhosts){
                trapped++;
             }else{
            section.innerHTML+= '<img class="img-thumbnail" src="'+querysearch[trapped][0]+'" />'; 
     trapped++; }
    }    
        }
    console.log("end of sticky silk");
}
    