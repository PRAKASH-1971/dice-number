//here retrieve the generated number from Localstorage.
var recieveddata = JSON.parse(localStorage.getItem("number"))
console.log(recieveddata)
document.getElementById('demo').innerHTML =`Number : ${recieveddata}`

if(recieveddata == "1"){
    document.getElementById('demo').style.color = "yellow"
}else if(recieveddata == "6"){
    document.getElementById('demo').style.color = "green"
}else{
    document.getElementById('demo').style.color = "black"
}