
    function drawWeb(dataset){   

        
        var clicked = d3.selectAll("dialog")//Select all circles
                                   .data(dataset);

                                           
                       //this keeps all the circles with their old id's 
                     clicked.enter()  //then it updates everything
                            .append("dialog")
                            .attr("class","bar")
                            .attr("id", function(d,i){
                                 return "circle" +i; 
                                 })
                                 .style("padding-right", "50px")
                                 .style("top", function(d, i) {		//Set new x position, based on the updated xScale
                                   
                                     return (d.value[1]+d.value[3])+"px";
                                                      })
                                  .style("left", function(d, i) {
                                    		//Set new x position, based on the updated xScale
                                                        return (d.value[0]+d.value[2])+"px";
                                                      })  
                  .merge(clicked)				//Merges the enter selection with the update selection
                      .transition()				//Initiate a transition on all elements in the update selection (all rects)
                      .duration(1500)
                      .attr("class","bar")
                      .attr("id", function(d,i){
                        return "circle" +i; 
                        })
                      .style("top", function(d, i) {		//Set new x position, based on the updated xScale
                       
                         return (d.value[1]+d.value[3])+"px";
                                          })
                      .style("left", function(d, i) {
                        		//Set new x position, based on the updated xScale
                                            return (d.value[0]+d.value[2])+"px";
                                          });
                                          
    
stickySilk();
console.log("this is whats been clicked",clicked);
console.log("this is where NEWQUERY STARTS");
newQuery();
return dataset;

}