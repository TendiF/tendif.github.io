console.log('Hello from custom js')

var dbPromise = idb.open("mydatabase", 1, function(upgradeDb) {
if (!upgradeDb.objectStoreNames.contains("storeFavorite")) {
    upgradeDb.createObjectStore('storeFavorite', {keyPath: 'id', autoIncrement:true});
}
});

function addFavorite(data = {}){
    return dbPromise.then(function(db) {
        var tx = db.transaction('storeFavorite', 'readwrite');
        var store = tx.objectStore('storeFavorite');
        if(!data.id){
            console.log('id tidak boleh kosong')
            return tx.complete
        }
        store.put(data); //menambahkan key "buku"
        return tx.complete;
    })
}

function getFavorites(id = null){
    if(!id){
        return dbPromise.then(function(db) {
            var tx = db.transaction('storeFavorite', 'readonly');
            var store = tx.objectStore('storeFavorite');
            return store.getAll();
          })
    }
    return dbPromise.then(function(db) {
        var tx = db.transaction('storeFavorite', 'readonly');
        var store = tx.objectStore('storeFavorite');
        // mengambil primary key berdasarkan isbn
        return store.get(id); 
      })
}


function deleteFavorite(id){
    return dbPromise.then(function(db) {
        var tx = db.transaction('storeFavorite', 'readwrite');
        var store = tx.objectStore('storeFavorite');
        store.delete(id);
        return tx.complete;
      })
}

function clickFavorite(e){
    getFavorites(article.id).then(res =>{
        let btnText = ""
        if(!res){
            addFavorite(article).then(() => {
                e.innerHTML = "Remove From Favorite"
            }).catch(e=> {
                console.log(e)
                alert("Gagal Menjadi Favorite")
            })
        }else{
            console.log(article.id)
            deleteFavorite(article.id).then(() => {
                e.innerHTML = "Add to Favorite"
            }).catch(e=> {
                console.log(e)
                alert("Gagal Menjadi Favorite")
            })
        }
    })

}

function onloadFavorite(){
    html = ''
    getFavorites().then(res => {
        console.log("hue res",res)
        res.forEach(v => {
            html += `<li class="collection-item">
                        <div>
                            ${v.name}
                            <a onclick="clickRemove(${v.id})" href="#!" class="secondary-content"><i class="material-icons">remove</i></a>
                        </div>
                    </li>`
        })
        console.log(html)
        setTimeout(() => {
            document.getElementById("favorites").innerHTML = html;
        },200)
    })
}

function clickRemove(id){
    deleteFavorite(id).then(() => {
        onloadFavorite()
    })
}