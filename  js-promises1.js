const url="https://jsonplaceholder.typicode.com/users/1"

function Getuser() {
return new Promise(function (resolve, reject) {
fetch(url).
then((data)=>data.json()).
then(data => {
if(data.name){
resolve(data.name);
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

Getuser()
.then(onSucess).
catch(onError)
