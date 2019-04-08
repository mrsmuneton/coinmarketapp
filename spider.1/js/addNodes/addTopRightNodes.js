function addTopRightNodes(dataset){
    
    console.log("from inside add top right nodes", dataset);
    var key = function(d) {
        return d.key;
    };

    function addNodeOne(){
let newTopLeftCenterCircle = d3.select("#circle"+ ( dataset.length -3))
                                .style("background-color","red")
                                .on("click", topRightWeb)
                                .style("display","block").attr("class", "shadow");;     
    }

    function addNodeTwo(){
                    
let newTopLeftCircle = d3.select("#circle"+ ( dataset.length -2))
                                .style("background-color","green")
                                .on("click", topLeftWeb)
                                .style("display","block").attr("class", "shadow");;
    }

    function addNodeThree(){
let newBottomRightCircle = d3.select("#circle"+ ( dataset.length -1))
                                .style("background-color","orange")
                                .on("click", bottomRightWeb)
                                .style("display","block").attr("class", "shadow");;
    }

   addNodeOne();
   addNodeTwo();
   addNodeThree();
   console.log("after added the top right nodes", dataset);

return dataset;
}