
    function addRightCenterBranch(numCXVariable,numCYVariable){

       let rightCenterBranch = [ 300, numCYVariable-300, numCXVariable,0 ];
        var key = function(d) {
            return d.key;
        };
        function checkDatasetOne (){   
            let datalength = dataset.length;  
            for (let i = 0; i < datalength; i++) {
                if (      
                    
                    ((dataset[i].value[0]+dataset[i].value[2] )== (rightCenterBranch[0]+rightCenterBranch[2]))
                &&  ((dataset[i].value[1]+dataset[i].value[3]) == (rightCenterBranch[1]+rightCenterBranch[3])) ){
                    return true;
                     }
                  return false;   
                 }
             
               }
            if (checkDatasetOne(rightCenterBranch)==false){
                var lastKeyValue = dataset[dataset.length - 1].key;
                dataset = dataset.concat({
                        key: lastKeyValue + 1,
                        value: rightCenterBranch
                    });
                    return dataset;
                    }        
                   else{ 
                            let a = dataset.slice();//get old data set
                            let b = [0,300,300,0];//variable im going to change it by
                             newDataset = a.map(function(x,i){   
                                 if ((dataset[i].value[0]+dataset[i].value[1]+dataset[i].value[2]+dataset[i].value[3]) 
                                 >= (rightCenterBranch[0]+rightCenterBranch[1]+rightCenterBranch[2]+rightCenterBranch[3]) ){
                                     return x.map(function(y,j){
                                         return y+b[0][j];
                                     });
                                 }else {return x;}  //eachtime values are 
                                                //greater that or equal to it
                             });        
                    dataset=[];
                    dataset = newDataset.slice();
                            
				    var lastKeyValue = dataset[dataset.length - 1].key;
                    dataset = dataset.concat({
                        key: lastKeyValue + 1,
                        value: rightCenterBranch
                    });

                 // dataset = dataset.concat(rightCenterBranch);
                   return dataset;
                   }
                  
            }