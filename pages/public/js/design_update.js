var id = window.location.search.split('?')[1];

$(function(){
    
    $.ajax({
        type: "GET",
        url: `${API_PREFIX}designs?id=${id}`,
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
        },
        crossDomain: true,
        dataType: 'json',
        success: function(responseData, status, xhr) {
           document.querySelector('input[name=name]').value= responseData[0].name;
           document.querySelector('input[name=measurement]').value= responseData[0].measurement;
           document.querySelector('input[name=fabric]').value= responseData[0].fabric;
           document.querySelector('input[name=color]').value = responseData[0].color;
           document.querySelector('input[name=id]').value = responseData[0].id;

            // Getting style for select style
            $.get(`${API_PREFIX}styles`, function(e){
                let selected = e.find(id => { return id.id == responseData[0].styleId });
                 $('#selectStyle').append(`
                 <option selected value="${selected.id}">${selected.name}</option>
                 `);
                e.forEach(j =>{
                    $('#selectStyle').append(`
                    <option value="${j.id}">${j.name}</option>
                    `);
                })
            
            });

        },
        error: function(request, status, error) {
           
            console.log(request.responseText);
        }
    
    });

    $('#updateDesign').submit(function(){
        let data = $(this).serialize();

        $.ajax({
            type: "PATCH",
            url: `${API_PREFIX}designs/${id}`,
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