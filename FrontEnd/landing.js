/**
 * Created by yonilip on 5/19/16.
 */


$(document).ready( function() {

    $('#datetimepicker4').datetimepicker();

 $("#searchButton").click(function(){
     var data ={'dest':""};
     data.dest = $("#dest").val();
        console.log(data);
     jQuery.ajax({
             url: "http://getlocal1.rapidapi.io/search",
             type: "POST",
             contentType: "application/x-www-form-urlencoded",
             data: data
         })
         .done(function(data, textStatus, jqXHR) {
             console.log("HTTP Request Succeeded: " + jqXHR.status);
             console.log(data);
             $("#firstPageAbout").hide();
         })
         .fail(function(jqXHR, textStatus, errorThrown) {
             console
.log("HTTP Request Failed");
             $("#firstPageAbout").hide();
         })
         .always(function() {
             /* ... */
         });


 });
});
