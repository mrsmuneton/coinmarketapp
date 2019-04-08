function query(){
    console.log('begins query');
    
        query = document.getElementById('queryword').value;
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://www.googleapis.com/customsearch/v1?key=AIzaSyBBgzsI6RdzOMe6RmKAOfeo3wFWvYx5h18&cx=005718232593417197296:xuhhbfvnqiy&q='+query+'&callback=hndlr', true);
        xhr.onload = function (){
            if (this.status ==200){
                var user = this.responseText;
                var res = user.slice(22, user.length-2);
                var searchResults = JSON.parse(res);
                console.log(searchResults);
                          
                for (var i = 0; i < 10; i++) {
        var item = searchResults.items[i];

        if( item.pagemap.newsarticle != undefined){
        querysearch.push([item.pagemap.cse_thumbnail[0].src, item.htmlSnippet, item.pagemap.newsarticle]);
        }else{
            if (item.pagemap.metatags.ogdescription != undefined){
                querysearch.push([item.pagemap.cse_thumbnail[0].src, item.htmlSnippet, item.pagemap.metatags[0]['og:description']]);
            }
            else {
                querysearch.push([item.pagemap.cse_thumbnail[0].src, item.htmlSnippet, item.htmlTitle]);
            }
            //do it without the news artlce tag
        }
                    }
                }
            }
        xhr.onerror = function (){
            consolelog('Request Error...');
            }
        xhr.send();
       
  function loadMoreContent(){
    if (querysearch.length<27){
    if (querysearch.length <17 ){
    if (xhr.readyState==4){
    var xhr1 = new XMLHttpRequest();
    xhr1.open('GET','https://www.googleapis.com/customsearch/v1?key=AIzaSyBBgzsI6RdzOMe6RmKAOfeo3wFWvYx5h18&cx=005718232593417197296:xuhhbfvnqiy&q='+query+'&start=11&callback=hndlr', true);
    xhr1.onload = function (){
    if (this.status ==200){
    var user1 = this.responseText;
    var res1 = user1.slice(22, user1.length-2);
    var searchResults1 = JSON.parse(res1);               
        for (var i = 0; i < 10; i++) {
            var item1 = searchResults1.items[i];
    
            if( item1.pagemap.newsarticle != undefined){
            querysearch.push([item1.pagemap.cse_thumbnail[0].src, item1.htmlSnippet, item1.pagemap.newsarticle]);
            }else{
                if (item1.pagemap.metatags.ogdescription != undefined){
                    querysearch.push([item1.pagemap.cse_thumbnail[0].src, item1.htmlSnippet, item1.pagemap.metatags[0]['og:description']]);
                }
                else {
                    querysearch.push([item1.pagemap.cse_thumbnail[0].src, item1.htmlSnippet, item1.htmlTitle]);
                }
                //do it without the news artlce tag
            }
                        }
                            
                            
                            
                            }        }
                 xhr1.onerror = function(){
                  consolelog('Request Error...');
                                          }
                 xhr1.send();
                    console.log(querysearch);
                                 }
          else{ console.log("Request Error..."); }
                                   } 
        else { 
                var xhr2 = new XMLHttpRequest();
                xhr2.open('GET','https://www.googleapis.com/customsearch/v1?key=AIzaSyBBgzsI6RdzOMe6RmKAOfeo3wFWvYx5h18&cx=005718232593417197296:xuhhbfvnqiy&q='+query+'&start=21&callback=hndlr', true);
                xhr2.onload = function (){
                     if (this.status ==200){
                        var user2 = this.responseText;
                        var res2 = user2.slice(22, user2.length-2);
                        var searchResults2 = JSON.parse(res2);
                  
                          for (var i = 0; i < 10; i++) {
                            var item2 = searchResults2.items[i];
                    
                            if( item2.pagemap.newsarticle != undefined){
                            querysearch.push([item2.pagemap.cse_thumbnail[0].src, item2.htmlSnippet, item2.pagemap.newsarticle]);
                            }else{
                                if (item2.pagemap.metatags.ogdescription != undefined){
                                    querysearch.push([item2.pagemap.cse_thumbnail[0].src, item2.htmlSnippet, item2.pagemap.metatags[0]['og:description']]);
                                }
                                else {

                                    querysearch.push([item2.pagemap.cse_thumbnail[0].src, item2.htmlSnippet, item2.htmlTitle]);
                                }
                                //do it without the news artlce tag
                            }
                                        }
                                          }
                                        }
                xhr2.onerror = function(){
                 consolelog('Request Error...');
                                         }
                xhr2.send();
                   console.log(querysearch);
             }
                             }else {console.log('no more');}
} setInterval(loadMoreContent, 4000); }