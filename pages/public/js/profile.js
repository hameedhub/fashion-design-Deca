$(function(){
    $.ajax({
        type: "GET",
        url: `${API_PREFIX}users?email=${sessionStorage.getItem('email')}`,
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
        },
        crossDomain: true,
        dataType: 'json',
        success: function(responseData, status, xhr) {
           document.querySelector('input[name=firstName]').value= responseData[0].firstName;
           document.querySelector('input[name=lastName]').value= responseData[0].lastName;
           document.querySelector('input[name=email]').value= responseData[0].email;
        },
        error: function(request, status, error) {
           
            console.log(request.responseText);
        }
    });

    $('#profile').submit(function(){

        let data = $(this).serialize();
        console.log(data);

        $.ajax({
            type: "PATCH",
            url: `${API_PREFIX}users/${sessionStorage.getItem('id')}`,
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
            },
            crossDomain: true,
            data: data,
            success: function(responseData, status, xhr) {
               console.log(responseData);
                
            },
            error: function(request, status, error) {
               
                console.log(request.responseText);
            }
        });

        return false;
    })

    

});