/**
 * Created by yonilip on 5/19/16.
 */


function insertResults(resultsArray) {
    var index;
    var resultContainer = $("#iterationResults");
    var list = [];
    for (index = 0; index < resultsArray.length; ++index) {
       list.push($(' <div id="resultTemplate" class="col-md-10 col-md-offset-1">' +
                '<div class="row container">' +
                    '<img src="'+ resultsArray[index].mainImg+'" class="img-responsive" alt="Responsive image">' + //TODO this should have some fixed size
                '</div>' +
                '<div class="row">' +
                    '<div class="col-md-3 panel panel-default">' +
                '<div class="panel-body">' +
                    resultsArray[index].price +
                    '</div>' +
                '</div>' +
                '<div class="col-md-6 panel panel-default">' +
                    '<div class="panel-body">' +
                      '<img src="'+ resultsArray[index].rating+'" class="img-responsive" alt="Responsive image">' + //TODO this should have some fixed size
                    '</div>' +
                '</div>' +
                '<div class="col-md-3 panel panel-default">' +
                    '<div class="panel-body">' +
            ' <span class="badge">'+resultsArray[index].numReviews +'</span>' +
                     '<p>Reviews</p>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="row">' +

            '</div>' +
            '</div>'
        )); //TODO check where to append to
    }
    resultContainer.append(list);
}




$(document).ready( function() {
    $("#datetimepicker4").datetimepicker({'format':'YYYY-MM-DD'});
    $("#searchButton").click(function(){
        var data ={}; //TODO can enter default values here
        data.city = $("#dest").val();
        data.date = $("#datetimepicker4").val(); //TODO make null
        //data.interetst = $("#intrests").val(); //TODO make sure this will bring all the li as object (?)

        var selectedGroups  = new Array();
        $(".checkbox input:checked").each(function() {
            selectedGroups.push($(this).val());
            console.log($(this).val());
        });

        data.interests = selectedGroups[0];

        console.log(data);
        jQuery.ajax({
                url: "http://getlocal1.rapidapi.io/db",
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                data: data
            })
            .done(function(data, textStatus, jqXHR) {
                console.log("HTTP Request Succeeded: " + jqXHR.status);
                console.log(data);
                $("#firstPageAbout").hide(); //TODO here we should switch to 2nd page
                //data = [{'mainImg':'11','price':'', 'rating':'', 'numReviws':''}];
                insertResults(data);
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console
                    .log("HTTP Request Failed");
                $("#firstPageAbout").hide(); //TODO here we should switch to 2nd page
                //data = [{'mainImg':'11','price':'', 'rating':'', 'numReviws':''}, {'mainImg':'11','price':'', 'rating':'', 'numReviws':''}, {'mainImg':'11','price':'', 'rating':'', 'numReviws':''}];
                insertResults(data);
            })
            .always(function() { //TODO probably del this
                /* ... */
            });


    });
});
