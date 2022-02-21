// let arr = [1,2,3,4]

// function getDatas(){
//     setTimeout(() => {
//         arr.forEach(i=>{
//             console.log(i)
//         })

//     }, 2000);
// }


// function setDatas(){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             arr.push(6);
//             let isMarried = false;
//             if(isMarried){
//                 resolve()
//             }else{
//                 reject("Salam Bextiyar");
//             }

//         }, 4000);
//     })

//     return promise;
// }

// setDatas().then(res=>{
//     getDatas();
// }).catch(error=>{
//     console.log(error)
// })


// function getDatas() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(data => console.log(data)).catch(error=>{
//             console.log(error)
//         });
// }

// getDatas()

// async function getDatas() {

//    let response = await  fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res);
//    let data = await response.json();
//    console.log(data)

// }

// getDatas()


let parent = document.getElementById("parent")
// let button = document.getElementById("show")

function getDatas() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                // for (const key in post){
                //  console.log(`${key} : ${post[key]}`)
                // }

                let elem = `<div class="col-3 mt-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">User id : ${post["userId"]}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Id : ${post["id"]}</h6>
                      <p class="card-text">Title: ${post["title"]}</p>
                      <a href="#" class="card-link">Card link</a>
                      <a href="#" class="card-link">Another link</a>
                    </div>
                  </div>
            </div>`

                parent.innerHTML += elem;

            });
        })
}


let button = document.getElementById("show")

button.addEventListener("click",function(){
    let month = document.getElementById("months").value;
    let year = document.getElementById("year").value;
    getPrayerDatas(month,year);
})



function getPrayerDatas(month,year) {
    fetch(`http://api.aladhan.com/v1/calendar?latitude=40.4093&longitude=49.8671&method=2&month=${month}&year=${year}`)
        .then(response => response.json())
        .then(data => {
            data.data.forEach(timing => {
                for (const key in timing.timings) {

                    let elem = `<li class="list-group-item">${key} : ${timing.timings[key]} </li>`
                    parent.innerHTML += elem;

                }
            });
        })
}


// button.addEventListener("click",function(){
//     getDatas();
// })



// function getPrayerDatas() {
//     fetch(`http://api.aladhan.com/v1/calendar?latitude=40.4093&longitude=49.8671&method=2&month=4&year=2017`)
//         .then(response => response.json())
//         .then(data => console.log(data.data))
// }
// getPrayerDatas()



// let test = {
//     name:"Tehmin",
//     age: 25
// }

// console.log(test.name)


// $(function () {
//     $.ajax({
//         url: "https://jsonplaceholder.typicode.com/posts",
//         type:"get",
//         success: function (result) {
//             result.forEach(post => {
//                 let elem = `<div class="col-3 mt-3">
//                 <div class="card" style="width: 18rem;">
//                     <div class="card-body">
//                       <h5 class="card-title">User id : ${post["userId"]}</h5>
//                       <h6 class="card-subtitle mb-2 text-muted">Id : ${post["id"]}</h6>
//                       <p class="card-text">Title: ${post["title"]}</p>
//                       <a href="#" class="card-link">Card link</a>
//                       <a href="#" class="card-link">Another link</a>
//                     </div>
//                   </div>
//             </div>`
    
//                 parent.innerHTML += elem;
                
//             });
           
//         },
//         error: function (request, status, error) {
//             alert(request.responseText);
//         }
//     })
//     ;
// })