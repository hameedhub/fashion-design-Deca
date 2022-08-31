$(function(){

    $.ajax({
        type: "GET",
        url: `${API_PREFIX}designs?&_sort=id&_order=desc`,
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
        },
        crossDomain: true,
        dataType: 'json',
        success: function(responseData, status, xhr) {
          responseData.forEach((data) => {
            const myUL = document.querySelector('#myUL');
            const li = document.createElement('li');
            const a = document.createElement('a');
            
            a.innerHTML = data.name;
            li.setAttribute('class', 'collapsible');
            li.appendChild(a);
            myUL.appendChild(li);
            li.addEventListener('click', () => {
              li.setAttribute('class', 'collapsible activeCol');
              if (div.style.display === 'block') {
                div.style.display = 'none';
              } else {
                div.style.display = 'block';
              }
            });
            let div = document.createElement('div');
            let p = document.createElement('p');
            let content = document.createElement('p');
            $.get( `${API_PREFIX}styles/${data.styleId}`, function(e){
             content.innerHTML = `
            <b>${e.name}</b>
            <p>Style Information: ${e.description}</p>
            <p><b>Measurement</b>: ${data.measurement}</p>
            <p><b>Fabric</b>: ${data.fabric}</p>
            <p><b>Color</b>: ${data.color}</p>
            <br/>
            `;
            });
            div.setAttribute('class', 'content');
           
            let aBook = document.createElement('a');
            aBook.setAttribute('href', '#');
            aBook.setAttribute('ref', data.id);
            aBook.setAttribute('class', 'book btn btn-md btn-default');
            aBook.innerHTML='Book';
            p.appendChild(content);
            p.appendChild(aBook);
            div.appendChild(p);
            myUL.appendChild(div);

          });

          $('.book').click(function(e){
            e.preventDefault();

            item = $(this);
            let id = $(this).attr('ref');
            let data = { "userId": sessionStorage.getItem('id'), "designId": id};
            
            $.post(`${API_PREFIX}bookings`, data, function(){

            });

        });
           
            
        },
        error: function(request, status, error) {
           
            console.log(request.responseText);
        }
    });

});