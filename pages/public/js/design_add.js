$(function(){
    
    document.querySelector('input[name=userId]').value = sessionStorage.getItem('id');
    // create design
    $('#saveDesign').submit(function(){
        let action = $(this).attr('action');
        let data = $(this).serialize();

        $.post(`${API_PREFIX}${action}`, data, function(e){
            window.location.href = 'design.html';
        });

        return false;
    });

    // Getting style for select style
    $.get(`${API_PREFIX}styles`, function(e){
        e.forEach(j =>{
            $('#selectStyle').append(`
            <option value="${j.id}">${j.name}</option>
            `);
        })
       
    });

})