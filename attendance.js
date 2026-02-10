let attendences = [];

function updateDisplay(){
   document.getElementById("myInput").textContent = attendences.length;
}
function addAttendence(){
   const input = document.getElementById("myInput");
    const name = input.value.trim();

    if(name !== ""){
        attendences.push(name);

        const li = document.createElement('li');
        li.textContent = name;
         
        document.getElementById("attendList").appendChild(li);

        updateDisplay();
        input.value = "";
    }
}

function  removeLast(){
    if(attendences.length > 0){
        attendences.pop();

        const list = document.getElementById("attendList");
        list.removeChild(list.lastElementChild);

        updateDisplay();
    }
}

function clearAll() {
     attendes = [];
     document.getElementById('attendList').innerHTML = ""; 
     updateCount(); 
    }