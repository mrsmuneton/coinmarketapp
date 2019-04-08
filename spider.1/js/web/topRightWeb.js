function topRightWeb(){
    var CXVariable = d3.select(this).style("left");
    var numCXVariable = parseInt(CXVariable, 10);
     
    var CYVariable = d3.select(this).style("top");
    var numCYVariable = parseInt(CYVariable, 10);

    let idName = d3.select(this).attr("id").slice(6);
    clicked.push(idName);

    mutateTopRightData(numCXVariable,numCYVariable,dataset);
    
    drawWeb(dataset);
    //needs to be a check to see how many datapoints to add. 
    
    addTopRightNodes(dataset);
    
        return dataset;
                        }