var id = window.location.search.split('?')[1];

$(function(){

    // view style
    $.ajax({
        type: "GET",
        url: `${API_PREFIX}styles?userId=${id}&_sort=id&_order=desc`,
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
             content.innerHTML = `
            <p><b>Description</b>: ${data.description}</p>
            `;
            div.setAttribute('class', 'content');
           
            p.appendChild(content);
            div.appendChild(p);
            myUL.appendChild(div);

            

          });     
          $('.del').click(function(){
            item = $(this);
            var id = $(this).attr('ref');
            $.ajax({
              url: `${API_PREFIX}styles/${id}`,
              type: 'DELETE',
              success: function(result) {
                  console.log(result);
              }
          });
            return false;
        });
          
        },
        error: function(request, status, error) { 
        }
    });
    


})