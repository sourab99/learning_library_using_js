//Category Page

const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const cat = urlParams.get('cat')
    console.log(cat);
    fetch('csvjson.json')
    .then((response) => response.json())
    .then((data) => {
      for( var i=0; i<data.length; i++){
        if(data[i].category == cat){
            var divcreate = document.createElement("div");
        divcreate.className="card col-3 p-3"
        var divjoin = `<img class="thumbnail" src="${data[i].thumbnail_url}" class="card-img-top" alt="...">`+`<div class="card-body">`+
            `<h5 class="card-title">${data[i].title}</h5>`+`<a href="details.html?id=${data[i].id}" class="btn btn-primary">Start Learning</a>`+`</div>`;
        divcreate.innerHTML = divjoin;
        var cardss = document.getElementById("cardss");
        cardss.appendChild(divcreate);
            
        var hero_sec = `<div class=" hero-sec container-fluid "><h1>${data[i].category} </h1> </div>`;
            document.getElementById("hero").innerHTML=hero_sec;
            // document.querySelector(".btn").style.background = `url(${color[0].image})`;


            // var bgcr = document.createElement("div");
            // divcreate.className="bgimg" ;
            // bgimg.appendChild(bgcr);
            // var bgim = document.getElementById("hero");
            // bgim.appendChild(bgcr);
                                                        
        }
      
    }
  });