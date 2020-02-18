$(function(){
    $("#go").on("submit", function(e){
        e.preventDefault(); //prevents page reload
        var first = $("#fname").val();
        var last = $("#lname").val();
        var newHTML = '<h1>'+first+' '+last+'</h1>';
        $(".jumbotron").removeClass('d-none').html(newHTML);
        return false; //prevent reload on submit
    })
});