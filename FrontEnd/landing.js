/**
 * Created by yonilip on 5/19/16.
 */
var curSearchResults;

function insertResults(resultsArray) {
    var index;
    var resultContainer = $("#iterationResults");
    var list = [];
    for (index = 0; index < resultsArray.length; ++index) {
        console.log("resultTemplate"+index.toString());
       list.push($(' <div id="resultTemplate'+index.toString()+'" class="profile-wrapper row">' +
                '<div class="row" id="imageResult">' +
               '<div class="col-md-12">' +
                    '<img src="'+ resultsArray[index].mainImg+'" alt="Responsive image">' + //TODO this should have some fixed size
           '</div>' +
                '</div>' +

           '<div class="row" >' +
           //'<div class="panel panel-default" style=" border: 0; background-color: rgba(65, 65, 65, 0.4); height: 282px; width: 318px;">' +
           '<div class="row">' +
           '<div class="col-md-4 col-md-offset-4" >' +
           '<div class="row">' +
           '<div class="col-md-4 panel panel-default">' +
           '<div class="panel-body" id="pricePanel">' +
           resultsArray[index].price +
           '</div>' +
           '</div>' +
           '<div class="col-md-4 panel panel-default">' +
           '<div class="panel-body">' +
           '<img src="https://getlocal1.rapidapi.io/rankingpng.png" class="img-responsive" alt="Responsive image">' +
           '</div>' +
           '</div>' +
           '<div class="col-md-4 panel panel-default">' +
           '<div class="panel-body" id="numRev">' +
           '<span class="badge">'+resultsArray[index].numReviews +'</span>' +
           '<p>Reviews</p>' +
           '</div>' +
           '</div>' +
           '</div>' +
           '</div>' +
           '</div>' +
           '</div>' +
           '</div>' +

            '<div class="row">' +

            '</div>' +
            '</div>'
       )); //TODO check where to append to
    }
    resultContainer.append(list);

    $(".profile-wrapper").unbind().click(function(){
        num = $(this).attr('id').replace('resultTemplate','');
        console.log(num);
        console.log(curSearchResults[num]);
        $('#iterationResults').hide();
        $("#firstPageAbout").hide();
        $(".jumbotron").hide();
        makeProfilePage(num);
        //$('html, body').
    });
}

var endOfFunc =
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +

    '<div class="container row col-md-12">' +
    '<div class="col-md-3"></div>' +
    '<div class="col-md-6">' +
'<div class="row featurette">' +
'<h2 class="featurette-heading">About Me</h2>' +
'<h4 class="featurette-text">'+'This book is a record of a pleasure trip. If it were a record of a solemn' +
'scientific expedition, it would have about it that gravity, that profundity, and that impressive' +
'incomprehensibility which are so proper to works of that kind, and withal so attractive.' +
'I offer no apologies for any departures from the usual style of travel-writing that may be charged' +
'against me—for I think I have seen with impartial eyes, and I am sure I have written at least honestly,' +
'whether wisely or not.</h4>' +
'</div>' +
'<div class="row">' +
'<div id="Carousel" class="carousel slide" style=" height:450px; width: 450px; margin: 0 auto">' +
'<ol class="carousel-indicators">' +
'<li data-target="#Carousel" data-slide-to="0" class="active"></li>' +
'<li data-target="#Carousel" data-slide-to="1"></li>' +
'<li data-target="#Carousel" data-slide-to="2"></li>' +
'</ol>' +

'<div class="carousel-inner">' +
'<div class="item active">' +
'<img src="https://getlocal1.rapidapi.io/1jpg.jpg" alt="Slide 1">' +
'</div>' +
'<div class="item">' +
'<img src="https://getlocal1.rapidapi.io/2jpg.jpg" alt="Slide 2">' +
'</div>' +
'<div class="item">' +
'<img src="https://getlocal1.rapidapi.io/3jpg.jpg" alt="Slide 3">' +
'</div>' +
'</div>' +

'<a class="left carousel-control" href="#Carousel" data-slide="prev">' +
'<span class="glyphicon glyphicon-chevron-left"></span>' +
'</a>' +
'<a class="right carousel-control" href="#Carousel" data-slide="next">' +
'<span class="glyphicon glyphicon-chevron-right"></span>' +
'</a>' +
'</div>' +
'</div>' +

'<div class="row featurette">' +
'<h2 class="featurette-heading">About My Tour</h2>' +
'<h4 class="featurette-text">For months the great pleasure excursion to Europe and the Holy Land was chatted' +
'about in the newspapers everywhere in America and discussed at countless firesides. It was a novelty in' +
'the way of excursions—its like had not been thought of before, and it compelled that interest which' +
'attractive novelties always command. It was to be a picnic on a gigantic scale.' +
'It was a brave conception; it was the offspring of a most ingenious brain. It was well advertised, but' +
'it hardly needed it: npnthe bold originality, the extraordinary character, the seductive nature,' +
'and the vastness of the enterprise provoked comment everywhere and advertised it in every' +
'household in the land. Who could read the program of the excursion without longing to make one' +
'of the party? I will insert it here. It is almost as good as a map. </h4>' +

'</div>' +
'</div>' +
'<div class="col-md-3"></div>' +

'<div class="row">' +
'<div class="col-md-4 col-md-offset-4">' +
'<button type="button" class="btn btn-primary btn-lg btn-block">Message</button>' +
'</div>' +
'</div>' +

'<footer>' +
'<p class="pull-right"><a href="#">Back to top</a></p>' +
'<p style="margin-left:20px ">&copy; 2016 HujiHackathon </p>' +
'</footer>' +

'</div>';

function makeProfilePage(num) {
    var profileContainer = $('#profilePage');

    profileContainer.append($('<div class="row" style=" height: 620px; margin: 0 auto">' +
        '<div class="jumbotron" style="background-image: url('+curSearchResults[num].mainImg+');" id="thirdImage">' + //TODO change image
        '<div class="container">' +
        '<div class="row" id="coverPhoto">' +
        '<div id="coverInfo">' +
        '<div class="row" id="coverQuote" style=" float: left; height: 120px; width: 312px; margin: 50px">' +
        '<div class="panel panel-default" style=" border: 0; background-color: rgba(65, 65, 65, 0.4); height: 120px; width: 312px;">' +
        '<div class="panel-body" style="color: #ffffff">' +
        curSearchResults[num].selfQuote + //TODO change this?
    '</div>' +
    '</div>' +
    '</div>' +

    '<div class="row" id="coverData" style=" float: right; height: 282px; width: 318px; margin: 50px ">' +
        '<div class="panel panel-default" style=" border: 0; background-color: rgba(65, 65, 65, 0.4); height: 282px; width: 318px;">' +
        '<div class="row">' +
        '<div class="col-md-4 col-md-offset-4" style="margin-top:20px; height: 70px; color: #ffffff">' +
        curSearchResults[num].price +
        '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-md-4 col-md-offset-4" style="height: 70px; color: #ffffff">' +
        curSearchResults[num].rating +
        '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-md-12">' +
        '<a class="btn btn-primary" href="#" role="button" id="topMessageButton">Message</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
    '<div class="row" >' +
        '<div class="jumbotron" style=" height: 314px; background-color: #414141; padding-top: 10px;margin: 0 auto">' +
        '<div class="container">' +
        '<div class="col-md-6 col-md-offset-3">' +
        '<div class="row">' +
        '<div class="col-md-4 col-md-offset-4">' +
        '<h4 style="color:#ffffff; font-weight: bold; ">'+curSearchResults[num].name+'</h4>' +
    '</div>' +
    '</div>' +
    '<div class="row">' +
        '<div class="col-md-3">' +
        '<h5 style="color: #039BE5"><img src="'+'https://getlocal1.rapidapi.io/reviewpng.png'+'" style="margin-right: 5px">'+curSearchResults[num].numReviews+' Reviews</h5>' +
    '</div>' +
    '<div class="col-md-3">' +
        '<h5 style="color: #F57F17 "><img src="https://getlocal1.rapidapi.io/good_reviewpng.png" style="margin-right: 5px">'+curSearchResults[num].numPosReviews+' Positive</h5>' +
    '</div>' +
    '<div class="col-md-4">' +
        '<h5 style="color: #A6A6A6 "><img src="https://getlocal1.rapidapi.io/workpng.png" style=" margin-right: 5px; ">'+curSearchResults[num].occupation+'</h5>' +
        '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-md-6">' +
        '<h5 style="color: #A6A6A6 "><img src="https://getlocal1.rapidapi.io/languagespng.png" style=" margin-right: 5px">'+curSearchResults[num].languages+'</h5>' +
    '</div>' +
    '<div class="col-md-5">' +
        '<h5 style="color: #A6A6A6 "><img src="https://getlocal1.rapidapi.io/locationpng.png" style="  margin-right: 5px"> '+curSearchResults[num].city+', ' +curSearchResults[num].country +'</h5>' +
    '</div>' +
    '</div>' +
    '<div class="row">' +
        '<div class="col-md-4">' +
        '<h5 style="color: #A6A6A6 "><img src="https://getlocal1.rapidapi.io/genderpng.png" style="  margin-right: 10px">'+curSearchResults[num].age+', '+curSearchResults[num].gender+'</h5>'

    ));

    profileContainer.append(endOfFunc);
    checkSwap(num);
}

/*
assume left key link to the prv profile
 */
var checkSwap = (function (curIndex, leftKeyAttr, rightKeyAttr){
    if(curIndex != 0) {
        $('#LArrow').visible();
        $('#LArrow').unbind().click(function () {
            // call display profile method param = curIndex-1
            makeProfilePage(curIndex-1);
        });
    }
    if(curIndex != curSearchResults.length)
    {
        $('#RArrow').visible();
        $('#RArrow').unbind().click(function(){
            // call display profile method param = curIndex+1
            makeProfilePage(curIndex+1);
        });
    }

});

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
                url: "https://getlocal1.rapidapi.io/db",
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                data: data
            })
            .done(function(data, textStatus, jqXHR) {
                console.log("https Request Succeeded: " + jqXHR.status);
                console.log(data);
                $("#firstPageAbout").hide(); //TODO here we should switch to 2nd page
                $(".jumbotron").hide();
                //$("#searchBar").toggle();
                //data = [{'mainImg':'11','price':'', 'rating':'', 'numReviws':''}];
                insertResults(data);
                curSearchResults = data;
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console
                    .log("https Request Failed");
                $("#firstPageAbout").hide(); //TODO here we should switch to 2nd page
                //data = [{'mainImg':'11','price':'', 'rating':'', 'numReviws':''}, {'mainImg':'11','price':'', 'rating':'', 'numReviws':''}, {'mainImg':'11','price':'', 'rating':'', 'numReviws':''}];
                insertResults(data);
            })
            .always(function() { //TODO probably del this
                /* ... */
            });


    });
});

