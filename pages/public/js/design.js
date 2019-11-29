$(function(){

    // view design
    $.ajax({
        type: "GET",
        url: `${API_PREFIX}designs?userId=${sessionStorage.getItem('id')}&_sort=id&_order=desc`,
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
            `;
            });
            div.setAttribute('class', 'content');
           
            let aDel = document.createElement('a');
            aDel.setAttribute('class', 'del');
            aDel.setAttribute('ref', data.id);
            let btnDel = document.createElement('button');
            btnDel.setAttribute('class', 'btn btn-md btn-danger');
            btnDel.innerHTML ='Delete';
            aDel.appendChild(btnDel);
            let aUpdate = document.createElement('a');
            aUpdate.setAttribute('href', 'design_update.html?'+data.id);
            aUpdate.setAttribute('class', 'btn btn-md btn-default');
            aUpdate.innerHTML='Update';
            p.appendChild(content);
            p.appendChild(aUpdate);
            p.appendChild(aDel);
            div.appendChild(p);
            myUL.appendChild(div);

            

          });     
          $('.del').click(function(){
            item = $(this);
            var id = $(this).attr('ref');
            $.ajax({
              url: `${API_PREFIX}designs/${id}`,
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