// some scripts

// jquery ready start
$(document).ready(function() {

    // CSRF setup for AJAX
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let cookie of cookies) {
                cookie = cookie.trim();
                if (cookie.startsWith(name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');

    $.ajaxSetup({
        headers: { 'X-CSRFToken': csrftoken }
    });

    /* ///////////////////////////////////////

    THESE FOLLOWING SCRIPTS ONLY FOR BASIC USAGE,
    For sliders, interactions and other

    */ ///////////////////////////////////////

    //////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });

    $('.js-check :radio').change(function () {
        var check_attr_name = $(this).attr('name');
        if ($(this).is(':checked')) {
            $('input[name=' + check_attr_name + ']').closest('.js-check').removeClass('active');
            $(this).closest('.js-check').addClass('active');
        } else {
            $(this).closest('.js-check').removeClass('active');
        }
    });

    $('.js-check :checkbox').change(function () {
        var check_attr_name = $(this).attr('name');
        if ($(this).is(':checked')) {
            $(this).closest('.js-check').addClass('active');
        } else {
            $(this).closest('.js-check').removeClass('active');
        }
    });

    //////////////////////// Bootstrap tooltip
    if ($('[data-toggle="tooltip"]').length > 0) {  // check if element exists
        $('[data-toggle="tooltip"]').tooltip();
    }

});
// jquery end

setTimeout(function(){
    $('#message').fadeOut('slow');
}, 4000);
