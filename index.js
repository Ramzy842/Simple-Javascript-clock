const p = document.querySelector('p')


function updateTime (){
    let myDate = new Date()
    p.innerText = myDate;
    //console.log(myDate)
}




setInterval(updateTime, 1000)
