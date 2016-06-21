var d = new Date();

document.getElementById("time").innerHTML = "&nbsp; &nbsp;"+  d.toLocaleTimeString(navigator.language, {hour: '2-digit',minute:'2-digit'});

$(document).ready(function(){
    $('#test').keyup(function(event){
        if(event.keyCode == 13)
        {
            $('#search').click();
        }

    }),
    $('#search').click(function(){
   var title = document.getElementById("test").value;    
 var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=5&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
 var call='&callback=?';
 $.getJSON(api+title+call,function(data){
     var init="";
     var it="";
     var datatab;
     var page = 'https://en.wikipedia.org/?curid=';
     if(data.query)
     {
         datatab=data.query.pages;
     $.each(datatab,function(i,v){
         //init += "<tr><td><a href='"+page+ +v.pageid+"' target='_blank'>"+v.title+"</a></td></tr><tr><td>"+v.extract+"</td></tr>";
          init +="<ul><li><a target='_blank' href='"+page+ +v.pageid+"'><strong><h2>"+v.title+"</h2></strong><p>"+v.extract+"</p></a></li></ul>";
          
     })    
     //$('#datain').html(init);
     $('.ini').html(init);    
     } 
     else{
         var error = "<h1><strong> SORRY ! NOT FOUND</strong> </h1>";
         $('.ini').html(error);
     }
 });
    })


    })

