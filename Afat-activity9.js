$(document).ready(function() {

$("a").click(function(){
    var url = "/json_files/" +this.id+ ".json";
$.getJSON(url, function(data){
    $.each(data, function() {
        $.each(this, function(key,value){
            
            $("#list").append(
                "Month:" + value.month + "<br>"+
                "Title:" + value.title + "<br>"+
                "Speaker:"+ value.speaker+ "<br>"+
                "Image:" +" <img src="+  value.image  + ">"  + "<br>"+
                "Text:" + value.text + "<br>"
            );
          
            
        });

    });
      
});
$("#list").empty(); 
});

/*
$("#sampson").click(function(){
    $.getJSON("json_files/sampson.json", function(data){
        $.each(data, function() {
            $.each(this, function(key,value){
                $("#list").append(
                    "Month:" + value.month + "<br>"+
                    "Title:" + value.title + "<br>"+
                    "Speaker:"+ value.speaker+ "<br>"+
                    
                    "Image:" +" <img src="+ value.image + ">" 
                     + "<br>"+
                    "Text:" + value.text + "<br>"
                );
            });
        }); 
    });
    $("#list").empty(); 
    });
 
*/


}); // end ready