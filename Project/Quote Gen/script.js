const aquot = [
  "There are no secrets to success. It is the result of preparation, hard work, and learning from failure. – Colin Powell",
"Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
"The expert in anything was once a beginner. – Helen Hayes",
"Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
"Live as if you were to die tomorrow. Learn as if you were to live forever. – Mahatma Gandhi",
"It always seems impossible until it’s done. – Nelson Mandela"
]

const arr =[]

// const quot = document.getElementById('q')

function genindex() {
  const index = Math.floor(Math.random() * aquot.length);
  arr.push(index)
  for(let i=0;i<arr.length-2;i++){
    if (arr[i]==index){
      break
    }
    else{
      document.getElementById("quot").innerText = aquot[index];
    }
  }
  console.log(arr)
 
}
document.getElementById("button").addEventListener("click", genindex);
