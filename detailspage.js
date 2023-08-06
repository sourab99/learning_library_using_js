
//Details Page

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);
fetch('csvjson.json')
.then((response) => response.json())
.then((data) => {
  for( var i=0; i<data.length; i++){
    if(data[i].id == id){
      const detailscard = document.getElementById("myrow-details");
    
      // showing video on page

      const video_div = document.createElement("div");
      video_div.className="col-lg-8";
      const main_video = `<iframe class="video-yt"  src="https://www.youtube.com/embed/${data[i].video_link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      video_div.innerHTML = main_video;
      detailscard.appendChild(video_div);

      //showing title and description

      const title_div = document.createElement("div");
      title_div.className="col-lg-4";
      const main_content = `<h1>${data[i].title}</h1> <p class="mt-2">${data[i].description}</p>`;
      title_div.innerHTML = main_content;
      detailscard.appendChild(title_div);

    }
  
  }
});