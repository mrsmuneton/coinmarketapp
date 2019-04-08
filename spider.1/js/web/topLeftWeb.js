
function topLeftWeb(){

     console.log("top left web is working");
    
    
    var CXVariable = d3.select(this).style("left");
    var numCXVariable = parseInt(CXVariable, 10);
     
    var CYVariable = d3.select(this).style("top");
    var numCYVariable = parseInt(CYVariable, 10);
    
    let idName = d3.select(this).attr("id").slice(6);
    clicked.push(idName);

    mutateTopLeftData(numCXVariable,numCYVariable);
    //needs a check to see how many dataspoints to add
        drawWeb(dataset);  
    addTopLeftNodes(dataset);
                    return dataset;
                   }  
    