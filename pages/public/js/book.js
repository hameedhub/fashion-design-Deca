$(function () {

  $.get(`${API_PREFIX}bookings?userId=${sessionStorage.getItem('id')}&_sort=id&_order=desc`, function (e) {
    e.forEach(e => {
      $.get(`${API_PREFIX}designs?id=${e.designId}`, function (j) {

        j.forEach((data) => {
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
          $.get(`${API_PREFIX}styles/${data.styleId}`, function (e) {
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

          let aDel = document.createElement('a');
          aDel.setAttribute('class', 'del');
          aDel.setAttribute('ref', e.id);
          let btnDel = document.createElement('button');
          btnDel.setAttribute('class', 'btn btn-md btn-danger');
          btnDel.innerHTML = 'Delete';
          aDel.appendChild(btnDel);
          p.appendChild(content);
          p.appendChild(aDel);
          div.appendChild(p);
          myUL.appendChild(div);

        });

$('.del').click(function(){
  item = $(this);
  var id = $(this).attr('ref');
  $.ajax({
    url: `${API_PREFIX}bookings/${id}`,
    type: 'DELETE',
    success: function(result) {
        console.log(result);
    }
});
  return false;
});
        
      });
      
    });
    
  })
  
})
