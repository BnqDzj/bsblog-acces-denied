const Domain = window.location.host
const Domain_txt = document.querySelector('#Domain')
Domain_txt.innerText = "You do not have access to " + Domain + "."

const timestamp = Date.now();
const timestamp0 = new Date(timestamp);
const timestamp_txt = document.querySelector('#Timestamp')
timestamp_txt.innerText = "Timestamp: "+ timestamp0.toISOString() + " UTC"

const Requested_URL = window.location.href
const Requested_URL_txt = document.querySelector('#Requested_URL')
Requested_URL_txt.innerText = "Requested URL: " + Requested_URL

const User_Agent = navigator.userAgent
const User_Agent_txt = document.querySelector('#User_Agent')
User_Agent_txt.innerText = "User-Agent: " + User_Agent

var pasArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
var pasLen = 16
var password = '';
var pasArrLen = pasArr.length;
for (var i=0; i<pasLen; i++){
var x = Math.floor(Math.random()*pasArrLen);
password += pasArr[x];
}

const Ray_ID_txt = document.querySelector('#Ray_ID')
Ray_ID_txt.innerText = "Ray ID: " + password

var pasArr = ['0','1','2','3','4','5','6','7','8','9'];
var pasLen = 4
var Error_reference_number = '';
var pasArrLen = pasArr.length;
for (var i=0; i<pasLen; i++){
var x = Math.floor(Math.random()*pasArrLen);
Error_reference_number += pasArr[x];
}

const Error_reference_number_txt = document.querySelector('#Error_reference_number')
Error_reference_number_txt.innerText = "Error reference number: " + Error_reference_number

var pasArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','_'];
var pasLen = 9
var Server_ID = '';
var pasArrLen = pasArr.length;
for (var i=0; i<pasLen; i++){
var x = Math.floor(Math.random()*pasArrLen);
Server_ID += pasArr[x];
}

const Server_ID_txt = document.querySelector('#Server_ID')
Server_ID_txt.innerText = "Server ID: " + Server_ID

fetch('https://api.imyrs.cn/v1/ip')
    .then(response => response.json())
    .then(data => {
      const IP_all = data
      const IP = document.querySelector('#IP')
      // hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
      IP.innerText = "Your IP address: " + data.ip
      // console.log(IP_all)
    })
    .catch(console.error)
