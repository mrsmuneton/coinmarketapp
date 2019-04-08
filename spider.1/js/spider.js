function spider(onfocus){

console.log("this is doing something");
    
    inputfield = document.getElementById("queryword");
    inputfield.removeEventListener("focus", spider); 

    leftPincer1 = document.getElementById("animation1");
    leftPincer2 = document.getElementById("animation2");
    leftPincer3 = document.getElementById("animation3");

    rightPincer1 = document.getElementById("animation1b");
    rightPincer2 = document.getElementById("animation2b");
    rightPincer3 = document.getElementById("animation3b");

    leftPincer2.removeAttribute("dur", "0s");
    leftPincer1.removeAttribute("dur", "0s");
    leftPincer3.removeAttribute("dur", "0s");

    rightPincer1.removeAttribute("dur", "0s");
    rightPincer2.removeAttribute("dur", "0s");
    rightPincer3.removeAttribute("dur", "0s");

    leftPincer1.setAttribute("dur", ".375s");
    leftPincer2.setAttribute("dur", ".25s");
    leftPincer3.setAttribute("dur", ".25s");

    rightPincer1.setAttribute("dur", ".375s");
    rightPincer2.setAttribute("dur", ".25s");
    rightPincer3.setAttribute("dur", ".25s");

    setInterval(function changeeyes(){

        rightMiniEye1 = document.getElementById("minieyeR1");
        rightMiniEye2 = document.getElementById("minieyeR2");
        rightMiniEye3 = document.getElementById("minieyeR3");
        rightMiniEye4 = document.getElementById("minieyeR4");
        rightMiniEye5 = document.getElementById("minieyeR5");

        leftMiniEye1 = document.getElementById("minieyeL1");
        leftMiniEye2 = document.getElementById("minieyeL2");
        leftMiniEye3 = document.getElementById("minieyeL3");
        leftMiniEye4 = document.getElementById("minieyeL4");
        leftMiniEye5 = document.getElementById("minieyeL5");

        rightMiniEye1.setAttribute("y","157");
        rightMiniEye2.setAttribute("y","142");
        rightMiniEye3.setAttribute("y","149");
        rightMiniEye4.setAttribute("y","170");
        rightMiniEye5.setAttribute("y","162");

        leftMiniEye1.setAttribute("y","145");
        leftMiniEye2.setAttribute("y","150");
        leftMiniEye3.setAttribute("y","160");
        leftMiniEye4.setAttribute("y","165");
        leftMiniEye5.setAttribute("y","172");

        setTimeout(function(){

        rightMiniEye1.setAttribute("y","177");
        rightMiniEye2.setAttribute("y","162");
        rightMiniEye3.setAttribute("y","169");
        rightMiniEye4.setAttribute("y","190");
        rightMiniEye5.setAttribute("y","182");

        leftMiniEye1.setAttribute("y","165");
        leftMiniEye2.setAttribute("y","170");
        leftMiniEye3.setAttribute("y","180");
        leftMiniEye4.setAttribute("y","185");
        leftMiniEye5.setAttribute("y","192");
        }, 1000);

    },3000);

     


}