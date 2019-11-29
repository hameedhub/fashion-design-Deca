var id = window.location.search.split('?')[1];

$(function(){
    
    $.ajax({
        type: "GET",
        url: `${API_PREFIX}styles?id=${id}`,
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
        },
        crossDomain: true,
        dataType: 'json',
        success: function(responseData, status, xhr) {
           document.querySelector('input[name=name]').value= responseData[0].name;
           document.querySelector('textarea[name=description]').value = responseData[0].description;
           document.querySelector('input[name=id]').value = responseData[0].id;

        },
        error: function(request, status, error) {
           
            console.log(request.responseText);
        }
    
    });

    $('#updateStyle').submit(function(){

        let data = $(this).serialize();

        $.ajax({
            type: "PATCH",
            url: `${API_PREFIX}styles/${id}`,
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
            },
            crossDomain: true,
            data: data,
            success: function(responseData, status, xhr) {
                
            },
            error: function(request, status, error) {
               
                console.log(request.responseText);
            }
        });

        return false;
    })

    

});