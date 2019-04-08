
function mutateBottomRightData(numCXVariable,numCYVariable){

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
          

          
             
        function addBottomRightCenterBranch(){
    
            let bottomRightCenterBranch = [ 300, 300, numCXVariable,numCYVariable ];
           var size = Object.size(dataset);
            function checkDatasetOne (){
                for (let i = 0; i < size; i++) {
                    if (      
                        ((dataset[i].value[0]+dataset[i].value[2] )== (bottomRightCenterBranch[0]+bottomRightCenterBranch[2]))
                    &&  ((dataset[i].value[0]+dataset[i].value[2] ) == (bottomRightCenterBranch[1]+bottomRightCenterBranch[3])) ){
                        return true;
                         } else{
                      }   
                     }return false; 
                 
                   }
                if (checkDatasetOne(bottomRightCenterBranch)==false){
                        var lastKeyValue = dataset[dataset.length - 1].key;
                 dataset.push({
                        key: lastKeyValue + 1,
                        value: bottomRightCenterBranch
                    });
                    return dataset;
                        }        
                       else{

                   var size = Object.size(dataset);
    
                       for (var i = 0; i < size; i++) { 
                           
                        if((dataset[i].value[1]+dataset[i].value[3] ) >= (bottomRightCenterBranch[1]+bottomRightCenterBranch[3])){
                        let position = dataset[i].value[3]+300;
                        dataset[i].value[3] = position;
                       }}
    
                       for (var i = 0; i < size; i++) {    
                           if((dataset[i].value[0]+dataset[i].value[2] ) >= (bottomRightCenterBranch[0]+bottomRightCenterBranch[2])){                   
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




                          
    
        function addBottomRightLeftBranch(){
    
            let bottomRightLeftBranch = [300,0,numCXVariable,numCYVariable];
            var size = Object.size(dataset);

                function checkDatasetTwo (){     
                    for (let i = 0; i < size; i++) {
                        if (
                             ((dataset[i].value[0]+dataset[i].value[2])== (bottomRightLeftBranch[0]+bottomRightLeftBranch[2]))
                        &&  ((dataset[i].value[1]+dataset[i].value[3]) == (bottomRightLeftBranch[1]+bottomRightLeftBranch[3])) ){
                            return true;
                             }
                         }
                     return false;
                       }
    
            if (checkDatasetTwo(bottomRightLeftBranch,dataset)==false){
                       var lastKeyValue = dataset[dataset.length - 1].key;
                        dataset.push({
                        key: lastKeyValue + 1,
                        value: bottomRightLeftBranch
                    });
                    return dataset;
                        } 
                        else{


                            for (var i = 0; i < size; i++) { 
                           
                                if((dataset[i].value[1]+dataset[i].value[3] ) >= 
                                (bottomRightLeftBranch[1]+bottomRightLeftBranch[3])){
                                let position = dataset[i].value[3]+300;
                                dataset[i].value[3] = position;
                               }}

                            var lastKeyValue = dataset[dataset.length - 1].key;
                               dataset.push({
                               key: lastKeyValue + 1,
                               value: bottomRightLeftBranch
                           });
                           return dataset;
                        }}

    
    
        function addBottomRightTopBranch(){
    
            let bottomRightTopBranch = [0,300,numCYVariable,numCXVariable];
            var size = Object.size(dataset);
    
        function checkDatasetThree (){   

                    for (var i = 0; i < size; i++) {                 
                        if (    
                            ((dataset[i].value[0]+dataset[i].value[2])== (bottomRightTopBranch[0]+bottomRightTopBranch[2]))
                        &&  ((dataset[i].value[1]+dataset[i].value[3]) == (bottomRightTopBranch[1]+bottomRightTopBranch[3])) ){
                            return true;
                             }
                         }
                     return false;
                       }
    
            if (checkDatasetThree(bottomRightTopBranch,dataset)==false){
                       

                        var lastKeyValue = dataset[dataset.length - 1].key;
                        dataset.push({
                        key: lastKeyValue + 1,
                        value: bottomRightTopBranch
                    });
                    return dataset;
                        }       
                         else{

                            for (var i = 0; i < size; i++) { 
                           
                                if((dataset[i].value[0]+dataset[i].value[2] ) >= 
                                (bottomRightTopBranch[0]+bottomRightTopBranch[2])){
                                let position = dataset[i].value[2]+300;
                                dataset[i].value[2] = position;
                               }}

                            var lastKeyValue = dataset[dataset.length - 1].key;
                               dataset.push({
                               key: lastKeyValue + 1,
                               value: bottomRightTopBranch
                           });
                           return dataset;
                        }}
                          
    
    
                    
    
      
            addBottomRightCenterBranch();
           addBottomRightLeftBranch();
           addBottomRightTopBranch();
            console.log("MUTATE BOTTOM RIGHT DATA COMPLETE",dataset);
            return dataset;
        }
 