$(function(){
    
    document.querySelector('input[name=userId]').value = sessionStorage.getItem('id');
    // create style
    $('#saveStyle').submit(function(){
        let action = $(this).attr('action');
        let data = $(this).serialize();

        $.post(`${API_PREFIX}${action}`, data, function(e){
           window.location.href = 'style.html';
        });

        return false;
    });

})