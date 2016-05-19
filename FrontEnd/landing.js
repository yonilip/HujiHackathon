/**
 * Created by yonilip on 5/19/16.
 */


function insertResults(resultsArray) {
    var index;
    for (index = 0; index < resultsArray.length; ++index) {
        $(' <div id="resultTemplate">' +
                '<div class="row container">' +
                    '<img src="'+ resultsArray[index].image+'" class="img-responsive" alt="Responsive image">' +
                '</div>' +
                '<div class="row">' +
                    '<div class="col-md-3 panel panel-default">' +
                '<div class="panel-body">' +
                    resultsArray[index].price +
                    '</div>' +
                '</div>' +
                '<div class="col-md-6 panel panel-default">' +
                    '<div class="panel-body">' +
                        resultsArray[index].grade +
                    '</div>' +
                '</div>' +
                '<div class="col-md-3 panel panel-default">' +
                    '<div class="panel-body">' +
            ' <span class="badge">'+resultsArray[index].reviews+'</span>' +
                     '<p>Reviews</p>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="row">' +

            '</div>' +
            '</div>'
        ).append(); //TODO check where to append to
    }
}




$(document).ready( function() {

    $("#searchButton").click(fdatetimepickerunction(){
        var data ={}; //TODO can enter default values here
        data.dest = $("#dest").val();
        data.date = $("#datetimepicker4").val(); //TODO make null
        data.interetst = $("#intrests").val(); //TODO make sure this will bring all the li as object (?)
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
                $("#firstPageAbout").hide(); //TODO here we should switch to 2nd page
                insertResults(data);
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console
                    .log("HTTP Request Failed");
            })
            .always(function() { //TODO probably del this
                /* ... */
            });


    });
});
