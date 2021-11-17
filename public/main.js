let likes = document.querySelectorAll(".fa-heart")
let submitbtn= document.querySelector('#submit')

Array.from(likes).forEach(function(element) {
      element.addEventListener('click', function(e){
        // post's name + caption match
        // get like count
         const likes = parseFloat(this.parentNode.childNodes[7].innerText)
         const id = e.target.dataset.id

         console.log(likes)
         console.log(id)
  
        fetch('../comments', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            '_id': id,
            'likes': likes
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


