var base_url = "https://api.football-data.org/";
var httpOption = {
    // mode : 'no-cors',
    headers: {
        'X-Auth-Token': 'b5afe94c0c01427b9c96e86eda5ded35'
    },
}
var article = {

}
// Blok kode yang akan di panggil jika fetch berhasil
function status(response) {
    if (response.status !== 200) {
        console.log("Error : " + response.status);
        // Method reject() akan membuat blok catch terpanggil
        return Promise.reject(new Error(response.statusText));
    } else {
        // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
        return Promise.resolve(response);
    }
}
// Blok kode untuk memparsing json menjadi array JavaScript
function json(response) {
    return response.json();
}
// Blok kode untuk meng-handle kesalahan di blok catch
function error(error) {
    // Parameter error berasal dari Promise.reject()
    console.log("Error : " + error);
}
// Blok kode untuk melakukan request data json
function getArticles() {
    if ('caches' in window) {
        caches.match(base_url + "v2/competitions/2021/standings").then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    
                    var articlesHTML = "";
                    data.standings[0].table.forEach(function (data) {
                        articlesHTML += `
                      <div class="card center">
                        <a href="./article.html?id=${data.team.id}">
                          <div class="card-image waves-effect waves-block waves-light">
                            <img src="${data.team.crestUrl}" />
                          </div>
                        </a>
                        <div class="card-content">
                          <span class="card-title truncate">${data.team.name}</span>
                          <p>${data.position}</p>
                          <p>Points : ${data.points}</p>
                        </div>
                      </div>
                    `;
                    });
                    // Sisipkan komponen card ke dalam elemen dengan id #content
                    document.getElementById("articles").innerHTML = articlesHTML;
                })
            }
        })
    }

    fetch(base_url + "v2/competitions/2021/standings", httpOption)
        .then(status)
        .then(json)
        .then(function (data) {
            // Objek/array JavaScript dari response.json() masuk lewat data.
            // Menyusun komponen card artikel secara dinamis
            var articlesHTML = "";
            data.standings[0].table.forEach(function (data) {
                articlesHTML += `
              <div class="card center">
                <a href="./article.html?id=${data.team.id}">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img src="${data.team.crestUrl}" />
                  </div>
                </a>
                <div class="card-content">
                  <span class="card-title truncate">${data.team.name}</span>
                  <p>${data.position}</p>
                  <p>Points : ${data.points}</p>
                </div>
              </div>
            `;
            });
            // Sisipkan komponen card ke dalam elemen dengan id #content
            document.getElementById("articles").innerHTML = articlesHTML;
        })
        .catch(error);
}

function getArticleById() {
    // Ambil nilai query parameter (?id=)
    var urlParams = new URLSearchParams(window.location.search);
    var idParam = urlParams.get("id");
    if ('caches' in window) {
        caches.match(base_url + "v2/teams/" + idParam).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    // Objek JavaScript dari response.json() masuk lewat variabel data.
                    article = data
                    // Menyusun komponen card artikel secara dinamis
                    var articleHTML = `
                        <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                            <img src="${data.crestUrl}" />
                            </div>
                            <div class="card-content">
                                <span class="card-title">${data.name}</span>
                            </div>
                            <div class="card-action">
                                <a style="cursor:pointer;" onclick="clickFavorite()">Add To Favorite</a>
                            </div>
                        </div>
                        `;
                    // Sisipkan komponen card ke dalam elemen dengan id #content
                    document.getElementById("body-content").innerHTML = articleHTML;
                })
            }
        })
    }

    fetch(base_url + "v2/teams/" + idParam, httpOption)
        .then(status)
        .then(json)
        .then(function (data) {
            // Objek JavaScript dari response.json() masuk lewat variabel data.
            article = data
            getFavorites(data.id).then(res =>{
                let btnText = ""
                if(!res){
                    btnText = "Add To Favorite"
                }else{
                    btnText = "Remove From Favorite"
                }
                // Menyusun komponen card artikel secara dinamis
                var articleHTML = `
                    <div class="card center">
                        <div class="card-image waves-effect waves-block waves-light">
                        <img src="${data.crestUrl}" />
                        </div>
                        <div class="card-content">
                            <span class="card-title">${data.name}</span>
                            <h3>${data.founded}</h3>
                            <p>${data.address}</p>
                            <p>${data.phone} / ${data.email}</p>
                        </div>
                        <div class="card-action">
                            <a style="cursor:pointer;" onclick="clickFavorite(this)">${btnText}</a>
                        </div>
                    </div>
                    `;
                // Sisipkan komponen card ke dalam elemen dengan id #content
                document.getElementById("body-content").innerHTML = articleHTML;
            })

        });
}