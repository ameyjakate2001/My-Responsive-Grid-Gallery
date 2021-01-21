fetch('https://pixabay.com/api/?key=19804655-6018dcc646a95e3cfff9f3b0f&q=animals+dog&image_type=photo')
.then(response => response.json())
.then((data) =>{
    var html='';
    data.hits.forEach(pic => {
         html+=`
            <div class="mybox"> <img src="${pic.largeImageURL}"></div>
         `
    })
    document.querySelector('#wrapper').innerHTML= html;
});