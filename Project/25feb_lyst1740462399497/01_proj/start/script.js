const timeElement = document.getElementById("time")
const dateElement = document.getElementById("date")
const now = new   Date();
const Hours = now.getHours() % 12 || 12
const minutes = now.getMinutes().toString().padStart(2, "0")
const seconds = now.getSeconds().toString().padStart(2, "0")
const ampm = now.getHours() >= 12 ? "PM" : "AM"


timeElement.textContent = `${Hours}:${minutes}:${seconds}:${ampm}`


const day = now.getDay()
const weak = now.get
dateElementElement.textContent = `${day}`