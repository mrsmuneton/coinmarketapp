function newQuery(){
    console.log("this is inside NEW QUERY");
    console.log(clicked.length);
    if (clicked.length>5){
        let value1 = clicked[0];
        let value2 = clicked[1];
        console.log()
        let value3 = clicked[2];
        let value4 = clicked[3];
        let value5 = clicked[4];
        console.log(value2);

        let paragraph =[]
        paragraph.push(querysearch[value1][1]);
        paragraph.push(querysearch[value3][1]);
        paragraph.push(querysearch[value2][1]);
        paragraph.push(querysearch[value4][1]);
        paragraph.push(querysearch[value5][1]);

        paragraph.push(querysearch[value1][2]);
        paragraph.push(querysearch[value3][2]);
        paragraph.push(querysearch[value2][2]);
        paragraph.push(querysearch[value4][2]);
        paragraph.push(querysearch[value5][2]);
       
        let newParagraph = paragraph.join();
        let symbolRegex = /\W/ig;
        let newerParagraph = newParagraph.replace(symbolRegex, " ");
        let wordMatch = /(\w+)/ig;
        let matchingWord = newerParagraph.match(wordMatch);
        var bigWords = [];
        for (i=0; i<matchingWord.length;i++){
            if(matchingWord[i].length>2){
                bigWords.push(matchingWord[i]);
            }
        }

        var noArticle = [];
        var varThe = /the/ig;
        var varAnd = /and/ig;
        var varWith = /with/ig;
        var varObject = /object/ig
        var varNbsp = /nbsp/ig
        for (i=0; i<bigWords.length;i++){
            if(varThe.test(bigWords[i]) == false && varAnd.test(bigWords[i]) == false
             && varWith.test(bigWords[i]) ==false  && varObject.test(bigWords[i])==false
             && varNbsp.test(bigWords[i])==false){
                noArticle.push(bigWords[i]);
            }
        }
        console.log("no article", noArticle);
     
   var ranking = [];
        for (i=0;i<noArticle.length;i++){

            for (b=i+1; b<noArticle.length; b++){
                let theWord = noArticle[i].toLowerCase();
                let theCheck = noArticle[b].toLowerCase();
                if (theWord==theCheck){
                    ranking.push(theWord);
                }
            }
        }

        console.log("ranking", ranking);
        let searchTerms =[];

        for(i=0;i<terms.length;i++){
        let count = 0;
          for (b=i+1;b<terms.length;b++){
            if(terms[i] == terms[b]){
                count++;                                                                                                                                    }
                                     }
          searchTerms.push([terms[i],count]);
                                    }    
        let finalFour = [];
        
        for (i=0;i<searchTerms.length;i++){
          for(b=0; b<searchTerms.length;b++){
            if (searchTerms[i][0]==searchTerms[b][0]){
              searchTerms.splice(b,1);
            }
          }
        }
        console.log(searchTerms);
        
        let ordered = searchTerms.sort(function(a,b){
          return b[1] - a[1];
        });
        console.log("this is ordered",ordered);
        
        for (i=0;i<ordered.length;i++){
          for(b=i+1; b<ordered.length;b++){
            if (ordered[i][0]==ordered[b][0]){
              console.log("its a match!");
              console.log(ordered[i][0],ordered[b][0]);
              ordered.splice(b,1);
            }
          }
        }
        
        /* var replace = "regex";
        var re = new RegExp(replace,"g");
        mystring".replace(re, "newstring"); */
        
        finalFour.push(ordered[0]);
        finalFour.push(ordered[1]);
        finalFour.push(ordered[2]);
        finalFour.push(ordered[3]);
        clicked.shift();
        clicked.shift();
        clicked.shift();
        clicked.shift();
        clicked.shift();
        console.log("this is the final four",finalFour);
        console.log("this is clicked should be cleared", clicked);
        keywords.push(finalFour);
        console.log(keywords);

        

    }

}