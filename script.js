$(document).ready(function(){
    // Datepicker from jQueryUI
    $( function() {
        $( ".datepicker" ).datepicker();
    } );

    var msg;
    $('form').submit(function(event) {
        // validation
        $('#validation_warning').hide();
        if($('#name').val()==''){
            $('#validation_warning').show();
            event.preventDefault();
            return false;
        }

        // alert message
        msg = 'Thanks ' + $('#name').val() + '! Your vacation leaves on ' + $('#start_date').val() + ' and returns on ' + $('#end_date').val() + '!';
        alert(msg);

        // Clear the inputs
        $('input:text').val('');

        event.preventDefault();
        return false;
    });
});