    function mutateTopRightData(numCXVariable,numCYVariable){ 
      
      
        //key function
        var key = function(d) {
            return d.key;       };
            //returns object size function
        Object.size = function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };
        // Get the size of an object
      console.log("mutatetoprightdata start", dataset);
        



    function addRightCenterBranch(){


        let rightCenterBranch = [ 300, numCYVariable-300, numCXVariable,0 ];
        var size = Object.size(dataset);

        function checkDatasetOne (){   
      
            for (let i = 0; i < size; i++) {
                if (          
                    ((dataset[i].value[0]+dataset[i].value[2] )== (rightCenterBranch[0]+rightCenterBranch[2]))
                &&  ((dataset[i].value[1]+dataset[i].value[3]) == (rightCenterBranch[1]+rightCenterBranch[3])) ){
                    return true;
                     }
                    
                 }return false;}
               

               //actual function part 
            if (checkDatasetOne(rightCenterBranch)==false){
                console.log("check one returned false");
                var lastKeyValue = dataset[dataset.length - 1].key;
                 dataset.push({
                        key: lastKeyValue + 1,
                        value: rightCenterBranch
                    });
                    return dataset;
                    }        

                   else{
                        console.log("check one returned true");
                    var size = Object.size(dataset);

                   for (var i = 0; i < size; i++) { 
                       
                    if((dataset[i].value[1]+dataset[i].value[3] ) >= (rightCenterBranch[1]+rightCenterBranch[3])){
                     
                    let position = dataset[i].value[1]+300;
                    dataset[i].value[1] = position;
                   }}

                   for (var i = 0; i < size; i++) {    
                       if((dataset[i].value[0]+dataset[i].value[2] ) >= (rightCenterBranch[0]+rightCenterBranch[2])){                
                    
                    let position = dataset[i].value[2]+300;
                    dataset[i].value[2] = position;
                   }}

                   var lastKeyValue = dataset[dataset.length - 1].key;
                   dataset.push({
                          key: lastKeyValue + 1,
                          value: rightCenterBranch
                      });
                      return dataset;

                }

            }

    function addRightLeftBranch(){
            
        let rightLeftBranch = [0,numCYVariable-300,numCXVariable, 0];
            var size = Object.size(dataset);

            function checkDatasetTwo (){   
                 
                for (let i = 0; i < size; i++) {
                    if ( 
                        ((dataset[i].value[0]+dataset[i].value[2] )== (rightLeftBranch[0]+rightLeftBranch[2]))
                    &&  ((dataset[i].value[1]+dataset[i].value[3]) == (rightLeftBranch[1]+rightLeftBranch[3])) ){
                        return true;
                         } else {return false;}
                     }
                   }

            //function part

        if (checkDatasetTwo(rightLeftBranch)==false){

            var lastKeyValue = dataset[dataset.length - 1].key;
                     dataset.push({
                    key: lastKeyValue + 1,
                    value: rightLeftBranch
                });
                    return dataset;
                    } 
                    else{
                        
                   for (var i = 0; i < size; i++) {
                       
                    if ((dataset[i].value[1]+dataset[i].value[3] ) >= (rightLeftBranch[1]+rightLeftBranch[3])){
                    
                    let position = dataset[i].value[1]+300;
                    dataset[i].value[1] = position;
                   }}

                    dataset=[];
                    dataset = newDataset.slice();
                    var lastKeyValue = dataset[dataset.length - 1].key;
                dataset = dataset.concat({
                        key: lastKeyValue + 1,
                        value: rightLeftBranch
                    });         
                    return dataset;
                    }
                }





                

    function addRightBottomBranch(){
    let rightBottomBranch = [300,numCYVariable,numCXVariable, 0];  
    var size = Object.size(dataset);

    function checkDatasetThree (){   
                 
                for (var i = 0; i <size ; i++) {                 
                    if (    
                        ((dataset[i].value[0]+dataset[i].value[2] )== (rightBottomBranch[0]+rightBottomBranch[2]))
                    &&  ((dataset[i].value[1]+dataset[i].value[3]) == (rightBottomBranch[1]+rightBottomBranch[3])) ){
                        return true;
                         }else{return false;}
                     }
                   }


        if (checkDatasetThree(rightBottomBranch,dataset)==false){
            var lastKeyValue = dataset[dataset.length - 1].key;
            dataset.push({
                    key: lastKeyValue + 1,
                    value: rightBottomBranch
                });
                    return dataset;
                    }       
                     else{
                        for (var i = 0; i < size; i++) {
                       
                            if ((dataset[i].value[0]+dataset[i].value[2] ) >= (rightLeftBranch[0]+rightLeftBranch[2])){
                            console.log((dataset[i].value[1]+300));    
                            let position = dataset[i].value[1]+300;
                            dataset[i].value[1] = position;
                           }}
        
                            
               
                    var lastKeyValue = dataset[dataset.length - 1].key;
               dataset.push({
                        key: lastKeyValue + 1,
                        value: rightBottomBranch
                    });          
                    return dataset;
                    }
                }

    function shiftDown(){
        
        let rightCenterBranch = [ 300, numCYVariable-300, numCXVariable,0 ];
        var size = Object.size(dataset);

        if((rightCenterBranch[1]+rightCenterBranch[3] <= 0)){
           
                for (var i = 0; i < size; i++) {                    
                       
                    let position = dataset[i].value[1]+300;
                    dataset[i].value[1] = position;
                }
            return dataset;
        }};

        addRightCenterBranch();
        console.log("after addright center funtion",dataset);
        addRightLeftBranch();
        console.log("after addright left funtion",dataset);
        addRightBottomBranch();
        console.log("after right bottom funtion",dataset);
        shiftDown();
        console.log("after shift down funtion",dataset);
        

        console.log("this is the final dataset for mutate top right data",dataset);
        return dataset;
    }
        
        
