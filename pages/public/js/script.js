$(function(){
    let API_PREFIX = 'http://localhost:3000/';
   
    $('#login').submit(function(){
        let action = $(this).attr('action');
        let url = `${API_PREFIX}${action}`;
        let data = $(this).serialize();

        $.ajax({
            type: "POST",
            url: url,
            crossDomain: true,
            data: data,
            success: function(responseData, status, xhr) {
                sessionStorage.setItem('token', responseData.accessToken);
                sessionStorage.setItem('email', document.querySelector('input[name=email]').value);
                
                // getting user details
                $.get(`${API_PREFIX}users?email=${sessionStorage.getItem('email')}`, function(e){
                    sessionStorage.setItem('firstName', e[0].firstName);
                    sessionStorage.setItem('lastName', e[0].lastName);
                    sessionStorage.setItem('id', e[0].id);  
                    sessionStorage.setItem('role', e[0].role);

                    if(e[0].role === 'admin'){
                        window.location.href = 'admin/dashboard.html';
                    }else{
                        window.location.href = 'dashboard.html'
                    }
                
                
                });
                
            },
            error: function(request, status, error) {
                $('#error').empty();
                $('#error').append(request.responseText);
                console.log(request.responseText);
            }
        });

        return false;
    })

    $('#signup').submit(function(){
        let action = $(this).attr('action');
        let url = `${API_PREFIX}${action}`;
        let data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: url,
            crossDomain: true,
            data: data,
            success: function(responseData, status, xhr) {
                sessionStorage.setItem('token', responseData.accessToken);
                sessionStorage.setItem('email', document.querySelector('input[name=email]').value);
                
                // getting user details
                $.get(`${API_PREFIX}users?email=${sessionStorage.getItem('email')}`, function(e){
                    sessionStorage.setItem('firstName', e[0].firstName);
                    sessionStorage.setItem('lastName', e[0].lastName);
                    sessionStorage.setItem('id', e[0].id);  
                });
                window.location.href = 'dashboard.html';
                
            },
            error: function(request, status, error) {
                $('#errorSignup').empty();
                $('#errorSignup').append(request.responseText);
                console.log(request.responseText);
            }
        });

        return false;
    })
    
    
})