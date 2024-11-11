'use strict';
 //ready event only applay when html tag suceesfully loaded
$(document).ready(function(){
     $('button').click(function(){
       // alert("Button clicked");
       $.ajax({
        type : "GET",
        url :"https://restcountries.com/v3.1/all",
        success : function(data){
           /// console.log(data);
      
        $.each(data,function(i,v){
            console.log(i,v);
            console.log(v.flags.png,v.name.common);
            $('#row').append(`
                <div class='col-3 text-center'>
                    <img src="${v.flags.png}" class="img-fluid">
                    <h4>${v.name.common}</h4>
                </div>
           `);
        });
        },
        error : function(){
            var errormsg= console.log("API failed");
        },
        
       });
     });
});
