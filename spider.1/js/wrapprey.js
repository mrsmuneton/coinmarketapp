function wrapprey(){

   

   console.log('does wrapprey');
    
    inputfield = document.getElementById("queryword");
    submitfield = document.getElementById("querysubmit")
    inputfield.removeAttribute("onfocus");
    inputfield.removeAttribute("click");

     query();

     console.log("keeps going afterquery call");

    rightPincer1 = document.getElementById("animation1");
    rightPincer2 = document.getElementById("animation2");
    rightPincer3 = document.getElementById("animation3");

    leftPincer1 = document.getElementById("animation1b");
    leftPincer2 = document.getElementById("animation2b");
    leftPincer3 = document.getElementById("animation3b");
    
    leg = document.getElementById("rightleg")
        
    leftPincer = document.getElementById("leftPincer");
    rightPincer = document.getElementById("rightPincer");

    
    leftPincer2.removeAttribute("dur", "0s");//
    leftPincer1.removeAttribute("dur", "0s");
    leftPincer3.removeAttribute("dur", "0s");

    rightPincer1.removeAttribute("dur", "0s");
    rightPincer2.removeAttribute("dur", "0s");//
    rightPincer3.removeAttribute("dur", "0s");



    rightPincer.setAttribute("stroke", "black");
    rightPincer.setAttribute("fill", "red");
    leftPincer.setAttribute("stroke", "black");
    leftPincer.setAttribute("fill", "red");
   

 
    rightPincer1.setAttribute("from", "M343,192 q 120,-25 30,15 q 10,-80 -30,-15 z");
    rightPincer1.setAttribute("to", "M313,192 q 150,15 70,5 q 50,-75 -70,-5 z");

    rightPincer2.setAttribute("from", "M313,192 q 150,15 70,5 q 50,-75 -70,-5 z");
    rightPincer2.setAttribute("to", "M240,380 q 85,145 160,-228 q -10,-30 -160,228 z");
    ///
    rightPincer3.setAttribute("from", "M240,380 q 85,145 160,-228 q -10,-30 -160,228 z");
    rightPincer3.setAttribute("to", "M343,192 q 120,-25 30,15 q 10,-80 -30,-15 z");



    leftPincer3.setAttribute("from", "M 258,192 q -120,-25 -30,15 q -10,-80 30,-15 z");
    leftPincer3.setAttribute("to", "M 288,192 q -150,15 -70,5 q -50,-75 70,-5 z");

    leftPincer2.setAttribute("from",  "M 288,192 q -150,15 -70,5 q -50,-75 70,-5 z");
    leftPincer2.setAttribute("to", "M 240,382 q -45,45 -44,-244 q 10,-30 44,244 z");
    ///
    leftPincer1.setAttribute("from",  "M 240,382 q -45,45 -44,-244 q 10,-30 44,244 z");
    leftPincer1.setAttribute("to", "M 258,192 q -120,-25 -30,15 q -10,-80 30,-15 z");



    leftPincer1.setAttribute("dur", ".25s");
    leftPincer2.setAttribute("dur", ".25s");
    leftPincer3.setAttribute("dur", ".25s");

    rightPincer1.setAttribute("dur", ".25s");
    rightPincer2.setAttribute("dur", ".25s");
    rightPincer3.setAttribute("dur", ".25s");

    const funk = () => {
        console.log('builds the freakin web');
        buildWeb(dataset);
    }
    console.log('makes it to the bootm of wrap prey');
    setTimeout(funk,6000);
    
   
}