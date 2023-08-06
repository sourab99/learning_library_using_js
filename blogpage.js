//blog Page 
fetch('csvjson.json')
    .then((response) => response.json())
    .then((data) => {
        for( var i=0; i<data.length; i++){
        console.log(data);
        
        var divcreate = document.createElement("div");
        divcreate.className="card col-xl-4 p-3"
        var divjoin = `<img class="thumbnail" src="${data[i].thumbnail_url}" class="card-img-top" alt="...">`+`<div class="card-body">`+
            `<h5 class="card-title pb-3 pt-3">${data[i].title}</h5>`+`<a href="details.html?id=${data[i].id}" class="btn btn-primary">Start Learning</a>`+`</div>`;
        divcreate.innerHTML = divjoin;
        var cardss = document.getElementById("cardss");
        cardss.appendChild(divcreate);
        }
    });
