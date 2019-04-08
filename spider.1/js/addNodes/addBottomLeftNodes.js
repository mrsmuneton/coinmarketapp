function addBottomLeftNodes(dataset){
    let newBottomLeftCircle = d3.select("#circle"+ ( dataset.length -3))
                        .style("background-color","purple")
                        .on("click", bottomLeftWeb)
                        .style("display","block")
                        .attr("class", "shadow");
    
    let newBottomTopLeftCircle = d3.select("#circle"+ ( dataset.length -2))
                        .style("background-color","green")
                        .on("click", topLeftWeb)
                        .style("display","block")
                        .attr("class", "shadow");
    let newBottomRightCircle = d3.select("#circle"+ ( dataset.length -1))
                        .style("background-color","yellow")
                        .on("click", bottomRightWeb)
                        .style("display","block")
                        .attr("class", "shadow");
    }