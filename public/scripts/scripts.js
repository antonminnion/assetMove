$(document).ready(function(){


    $('td.status[value="0"]').closest('tr').css('background-color', '#cceeff');
    $('td.status[value="1"]').closest('tr').css('background-color', '#11ffaa');
    $('td.status[value="2"]').closest('tr').css('background-color', '#ffaaaa');

    $('.approve').click(function(){

        var id = $(this).attr('signalID');
        var res = $(this).attr('signalResult');

        $.get( "update/" + id + "/" + res, function( data ) {


            console.log("Redirecting....");
            $(location).attr('href', '/')
        });
    });


});