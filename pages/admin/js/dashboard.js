$(function(){

    $.ajax({
        type: "GET",
        url: `${API_PREFIX}users?&_sort=id&_order=desc`,
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
            
            a.innerHTML = data.firstName + ' '+ data.lastName;
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
            <p>Design and Style Information:</p>
            <br>
            `;
            div.setAttribute('class', 'content');
           
            let aDesign = document.createElement('a');
            aDesign.setAttribute('href', 'design.html?'+data.id);
            aDesign.setAttribute('class', 'btn btn-md btn-default');
            aDesign.innerHTML='Design';

            let aStyle = document.createElement('a');
            aStyle.setAttribute('href', 'style.html?'+data.id);
            aStyle.setAttribute('class', 'btn btn-md btn-success');
            aStyle.innerHTML='Style';
            p.appendChild(content);
            p.appendChild(aDesign);
            p.appendChild(aStyle);
            div.appendChild(p);
            myUL.appendChild(div);

          });
            
        },
        error: function(request, status, error) {
           
            console.log(request.responseText);
        }
    });

});