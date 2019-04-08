function addTopLeftNodes(dataset){
    
    let newTopLeftCircle = d3.select("#circle"+ ( dataset.length -3))
            .style("background-color","green")
            .on("click", topLeftWeb)
            .style("display","block").attr("class", "shadow");
    
    let newTopRightCenterCircle = d3.select("#circle"+ ( dataset.length -2))
                                    .style("background-color","red")
                                    .on("click", topRightWeb)
                                    .style("display","block").attr("class", "shadow");
    let newBottomRightCenterCircle = d3.select("#circle"+ ( dataset.length -1))
                                    .style("background-color","purple")
                                    .on("click", bottomLeftWeb)
                                    .style("display","block").attr("class", "shadow");
    
                                 
    }