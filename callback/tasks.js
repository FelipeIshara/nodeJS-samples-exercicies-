var tasks = [];

function printTasks(){

    let saida = '';
    for(let i in tasks){
        saida += `<li>${tasks[i]}</li>`
    }
    document.querySelector('ul').innerHTML = saida;
  
}

function addTaskToArray(task, callback){
    
        tasks.push(task); 
        callback();
    
    
    
}
function addtask(){
    event.preventDefault();
    let task = document.querySelector("#taski").value;
    addTaskToArray(task, printTasks);

}