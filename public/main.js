var trash = document.getElementsByClassName("fa-trash")
var check = document.getElementsByClassName("fa-check")
var heart = document.getElementsByClassName("fa-heart")


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('trash', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'list': name,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});


Array.from(check).forEach(function(element, index) {
  element.addEventListener('click', function(event){
    const idElements = document.querySelectorAll('.js-id')
    const ids = [...idElements]
    const textElements = document.querySelectorAll('.js-text')
    const texts = [...textElements]
    const isFinished = texts[index].style.textDecoration == 'line-through'
    console.log(texts[index].style)
    console.log(ids[index].value)
    const id = ids[index].value
    fetch('check', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        'id': id,
        'finished': isFinished
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});


Array.from(heart).forEach(function(element, index) {
  element.addEventListener('click', function(event){
    const idElements = document.querySelectorAll('.js-id')
    const ids = [...idElements]
    const id = ids[index].value
    const isFavorite = element.style.color == 'red'
    fetch('heart', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        'id': id,
        'isFavorite': isFavorite
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});

// function strike(e){
//   if ( e.target.tagName == 'LI'){
//       e.target.classList.toggle('strikethrough');
//   }
// }