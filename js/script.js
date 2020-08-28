/*Attraverso una chiamata ajax all’Api di boolean avremo
 a disposizione una decina di dischi musicali.
Servendoci di handlebars stampiamo tutto a schermo. */

$(document).ready(function(){
    $.ajax({
        'url':' https://flynn.boolean.careers/exercises/api/array/music',
        'method':'GET',
        'success': function(data){
            var response = data.response;
            var source = $('#entry-template').html();
            var template = Handlebars.compile(source);
            for (var i = 0; i < response.length; i++) {
                var cd = template(response[i]);
                $('.cds-container').append(cd);
            }
        },
        'error': function(){
                alert('si è verificato un errore');
        }

    });
});
