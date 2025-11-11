//Récupère ses posts via https://jsonplaceholder.typicode.com/posts?userId=1

const url = "https://jsonplaceholder.typicode.com/posts?userId=1"

function Getpost() {
return new Promise(function (resolve, reject) {
fetch(url).
then((data)=>data.json()).
then(data => {
if(data[0]){
resolve(data[0]);
} else {
reject('Data not found')
}
})
});
}

function onSucess(data){
console.log(data)
}
function onError(err){
console.log(err)
}

Getpost()
.then(onSucess).
catch(onError)
