/*Attraverso una chiamata ajax all’Api di boolean avremo
 a disposizione una decina di dischi musicali.
Servendoci di handlebars stampiamo tutto a schermo. */

$(document).ready(function(){
    $.ajax({
        url:' https://flynn.boolean.careers/exercises/api/array/music',
        method:'GET',
        success: function(){

        },
        error: function(){
                alert('si è verificato un errore');
        }

    });
});
