$(function(){

    // view design
    $.ajax({
        type: "GET",
        url: `http://localhost:3000/designs?_sort=id&_order=desc`,
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
            $.get(`http://localhost:3000/styles/${data.styleId}`, function(e){
             content.innerHTML = `
            <b>${e.name}</b>: ${e.description}
            <p><b>Measurement</b>: ${data.measurement}</p>
            <p><b>Fabric</b>: ${data.fabric}</p>
            <p><b>Color</b>: ${data.color}</p>
            `;
            });
            div.setAttribute('class', 'content');

            p.appendChild(content);
            div.appendChild(p);
            myUL.appendChild(div);

            

          });     
          
        },
        error: function(request, status, error) { 
        }
    });
    


})