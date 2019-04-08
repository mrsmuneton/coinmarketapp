
    function mutateBottomLeftData(numCXVariable,numCYVariable){
        
      console.log("mutate bottom right data start", dataset);

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
      
    function addBottomLeftCenterBranch(){

        let bottomLeftCenterBranch = [numCXVariable-300, 0, 0, numCYVariable+300];
        var size = Object.size(dataset);


        function checkDatasetOne (){   

            for (let i = 0; i < size; i++) {
                if (      
                    ((dataset[i].value[0]+dataset[i].value[2] )== (bottomLeftCenterBranch[0]+bottomLeftCenterBranch[2]))
                &&  ((dataset[i].value[0]+dataset[i].value[2] ) == (bottomLeftCenterBranch[1]+bottomLeftCenterBranch[3])) ){
                    return true;
                     } else{
                  return false;}   
                 }
                }
           
            if (checkDatasetOne(bottomLeftCenterBranch)==false){
                var lastKeyValue = dataset[dataset.length - 1].key;
                dataset.push({
                       key: lastKeyValue + 1,
                       value: bottomLeftCenterBranch
                   });
                   return dataset;
                    }        
                   else{


                 var size = Object.size(dataset);
    
                       for (var i = 0; i < size; i++) { 
                           
                        if((dataset[i].value[1]+dataset[i].value[3] ) >= (bottomLeftCenterBranch[1]+bottomLeftCenterBranch[3])){
                        let position = dataset[i].value[3]+300;
                        dataset[i].value[3] = position;
                       }}
    
                       for (var i = 0; i < size; i++) {    
                           if((dataset[i].value[0]+dataset[i].value[2] ) >= 
                           (bottomLeftCenterBranch[0]+bottomLeftCenterBranch[2])){                   
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
        

    function addBottomLeftTopBranch(){

        let bottomLeftTopBranch = [numCXVariable-300, 0,0, numCYVariable];
        var size = Object.size(dataset);

            function checkDatasetTwo (){   
                for (let i = 0; i < size; i++) {
                    if (      
                        ((dataset[i].value[0]+dataset[i].value[2] )== 
                        (bottomLeftTopBranch[0]+bottomLeftTopBranch[2]))
                    &&  ((dataset[i].value[1]+dataset[i].value[3] ) == 
                    (bottomLeftTopBranch[1]+bottomLeftTopBranch[3])) ){
                        return true;
                         } else{
                      return false;}   
                     }
                   }

        if (checkDatasetTwo(bottomLeftTopBranch,dataset)==false){
            var lastKeyValue = dataset[dataset.length - 1].key;
            dataset.push({
                   key: lastKeyValue + 1,
                   value: bottomLeftTopBranch
               });
               return dataset;
                }        
                    else{

                        for (var i = 0; i < size; i++) { 
                           
                            if((dataset[i].value[0]+dataset[i].value[2] ) >= 
                            (bottomLeftTopBranch[0]+bottomLeftTopBranch[2])){
                            let position = dataset[i].value[0]+300;
                            dataset[i].value[0] = position;
                           }}

                        var lastKeyValue = dataset[dataset.length - 1].key;
                           dataset.push({
                           key: lastKeyValue + 1,
                           value: bottomRightLeftBranch
                       });
                       return dataset;
                    }}



    function addBottomLeftRightBranch(){

        let bottomLeftRightBranch = [numCXVariable, 0,0,numCYVariable+300];
        var size = Object.size(dataset);

    function checkDatasetThree (){   
              
        for (let i = 0; i < size; i++) {
            if (      
                ((dataset[i].value[0]+dataset[i].value[2] )== (bottomLeftRightBranch[0]+bottomLeftRightBranch[2]))
            &&  ((dataset[i].value[0]+dataset[i].value[2] ) == (bottomLeftRightBranch[1]+bottomLeftRightBranch[3])) ){
                return true;
                 } else{
              return false;}   
             }
           }

        if (checkDatasetThree(bottomLeftRightBranch,dataset)==false){
            var lastKeyValue = dataset[dataset.length - 1].key;
            dataset.push({
                   key: lastKeyValue + 1,
                   value: bottomLeftRightBranch
               });
               return dataset;
                    }       
                     else{
                        for (var i = 0; i < size; i++) { 
                            if((dataset[i].value[0]+dataset[i].value[2] ) >= 
                            (bottomLeftTopBranch[0]+bottomLeftTopBranch[2])){
                            let position = dataset[i].value[2]+300;
                            dataset[i].value[2] = position;
                           }}

                        var lastKeyValue = dataset[dataset.length - 1].key;
                           dataset.push({
                           key: lastKeyValue + 1,
                           value: bottomLeftTopBranch
                       });
                       return dataset;
                    }}




                function checkLeft(){
                    let bottomLeftCenterBranch = [numCXVariable-300, 0, 0, numCYVariable+300]; 
                    var size = Object.size(dataset);
                if((bottomLeftCenterBranch[0]+bottomLeftCenterBranch[2] <= 0)){


                    for (var i = 0; i < size; i++) {    
                        if((dataset[i].value[0]+dataset[i].value[2] ) >= 
                        (bottomLeftCenterBranch[0]+bottomLeftCenterBranch[2])){                   
                     let position = dataset[i].value[2]+300;
                     dataset[i].value[2] = position;
                    }}
                
                    return dataset;
                }}

  
        addBottomLeftCenterBranch();
        addBottomLeftTopBranch();
        addBottomLeftRightBranch();
        checkLeft();
        return dataset;
    }
        

