

// function notify(){
//     console.log('emial sent')
// }
// // function recording(){
   
// //     notify()
// // // }
// // recording()

// let test = new Promise((resolve,reject)=>
// setTimeout(()=>{
//     console.log('recording uploded')
//     resolve()
//         },2000)
// ).then(()=>{
// notify()
// })
function fetchquots(){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      
      let random = data[(Math.random() * data.length)| 0]
      document.getElementById('quots').innerText=(random.text)
      document.getElementById('author').innerText=(random.author)
    });
}
// genrate()