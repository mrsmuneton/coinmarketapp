
   function mutateTopLeftData(numCXVariable, numCYVariable){

    console.log(mutateTopLeftData);
    var key = function(d) {
        return d.key; };
        
    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
    
    function addLeftCenterBranch(){
       
        let leftCenterBranch = [numCXVariable-300, numCYVariable-300, 0, 0];
        var size = Object.size(dataset);
        
        function checkDatasetOne (){   
            
            for (let i = 0; i < size; i++) {
                if (          
                    ((dataset[i].value[0]+dataset[i].value[2] )== (leftCenterBranch[0]+leftCenterBranch[2]))
                &&  ((dataset[i].value[1]+dataset[i].value[3]) == (leftCenterBranch[1]+leftCenterBranch[3])) ){
                    return true;
                     }   
                 }return false;
               }

               if (checkDatasetOne(leftCenterBranch)==false){
              var lastKeyValue = dataset[dataset.length - 1].key;
                 dataset.push({
                        key: lastKeyValue + 1,
                        value: leftCenterBranch
                    });
                    return dataset;
                    }                
               else{ 
               var size = Object.size(dataset);

              for (var i = 0; i < size; i++) { 
                  
               if((dataset[i].value[1]+dataset[i].value[3] ) >= (leftCenterBranch[1]+leftCenterBranch[3])){
                
               let position = dataset[i].value[1]+300;
               dataset[i].value[1] = position;
              }}

              for (var i = 0; i < size; i++) {    
                  if((dataset[i].value[0]+dataset[i].value[2] ) >= (leftCenterBranch[0]+leftCenterBranch[2])){                
               
               let position = dataset[i].value[0]+300;
               dataset[i].value[0] = position;
              }}

              var lastKeyValue = dataset[dataset.length - 1].key;
              dataset.push({
                     key: lastKeyValue + 1,
                     value: leftCenterBranch
                 });
                 return dataset;
               }
               
            }        
            
                   



            function addLeftRightBranch(){

                let leftRightBranch = [numCXVariable-300, numCYVariable-300,300,0];
                var size = Object.size(dataset);

                function checkDatasetTwo (){   
                 
                    for (let i = 0; i < size; i++) {
                        if (
                            ((dataset[i].value[0]+dataset[i].value[2] )=== (leftRightBranch[0]+leftRightBranch[2]))
                        &&  ((dataset[i].value[1]+dataset[i].value[3]) == (leftRightBranch[1]+leftRightBranch[3])) ){
                            return true;
                             
                             }
                         }return false;
                       }
                       
        if (checkDatasetTwo(leftRightBranch,dataset)==false){ 
            var lastKeyValue = dataset[dataset.length - 1].key;
            dataset.push({
                   key: lastKeyValue + 1,
                   value: leftRightBranch
               });
               return dataset;
                    } 
                    else{
                        for (i=0; i<size; i++){
                        if ( (dataset[i].value[1]+dataset[i].value[3] ) >= (leftRightBranch[1]+leftRightBranch[3]))
                         {
                            let position = dataset[i].value[1]+300;
                            dataset[i].value[1] = position;
                                                                     //greater that or equal to it
                             }}


                             var lastKeyValue = dataset[dataset.length - 1].key;
                             dataset.push({
                                    key: lastKeyValue + 1,
                                    value: leftRightBranch
                                });
                                return dataset;
                    }
                }
    
        function addLeftBottomBranch(){
                    let leftBottomBranch = [numCXVariable-300, numCYVariable-300,0,300];
                    var size = Object.size(dataset);
                    function checkDatasetThree (){ 
                                for (var i = 0; i < size; i++) {  if (    
                                    ((dataset[i].value[0]+dataset[i].value[2] )=== (leftBottomBranch[0]+leftBottomBranch[2]))
                                    &&  ((dataset[i].value[1]+dataset[i].value[3]) == (leftBottomBranch[1]+leftBottomBranch[3])) ){
                                        return true;
                                         }
                                     }return false;
                                   }

                if (checkDatasetThree(leftBottomBranch,dataset)==false){
                                   var lastKeyValue = dataset[dataset.length - 1].key;
                                    dataset.push({
                                    key: lastKeyValue + 1,
                                    value: leftBottomBranch
                                });
                                return dataset;
                                    }       
                                 else{
                                        for (i=0; i<size; i++){
                                        if ( (dataset[i].value[0]+dataset[i].value[2] ) >=
                                         (leftBottomBranch[0]+leftBottomBranch[2]))
                                         {
                                            let position = dataset[i].value[0]+300;
                                            dataset[i].value[0] = position;
                                                                                     //greater that or equal to it
                                             }}
                
                
                                             var lastKeyValue = dataset[dataset.length - 1].key;
                                             dataset.push({
                                                    key: lastKeyValue + 1,
                                                    value: leftBottomBranch
                                                });
                                                return dataset;                
                                    }
                                }
                     
    
    //these are basic if staments if the object is on the outer egdges of everything. this needs to be a function. 
    function checkHeight(){
       var size = Object.size(dataset);
    let leftCenterBranch = [numCXVariable-300, numCYVariable-300, 0, 0];
    if((leftCenterBranch[1]+leftCenterBranch[3] <= 300)){
                for (var i = 0; i < size; i++) {                    
                       
                    let position = dataset[i].value[1]+300;
                    dataset[i].value[1] = position;
                }
            return dataset;
        }
        }

        function checkLeft(){
            var size = Object.size(dataset);
        let leftCenterBranch = [numCXVariable-300, numCYVariable-300, 0, 0];     
    if((leftCenterBranch[0]+leftCenterBranch[2] <= 0)){
        for (var i = 0; i < size; i++) {    
            if((dataset[i].value[0]+dataset[i].value[2] ) >= 
            (leftCenterBranch[0]+leftCenterBranch[2])){                   
         let position = dataset[i].value[0]+300;
         dataset[i].value[0] = position;
        }}
    return dataset;
}}

    
    addLeftCenterBranch();
    addLeftRightBranch();
    addLeftBottomBranch();
    checkHeight();
    checkLeft();
    return dataset;
   
} 