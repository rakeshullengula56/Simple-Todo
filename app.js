let todo=[];
let req=prompt("enter your request :");
while(true){
    if(req.toLowerCase()=="quit"){
        console.log("quitting the app");
        break;
    }
    if(req.toLowerCase()=="list"){
        console.log("----------------------------")
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("----------------------------")
    }else if(req.toLowerCase()=="add"){
        let task=prompt("enter your task");
        todo.push(task);
        console.log("task added");
    }else if(req.toLowerCase()=="delete"){
        let idx=prompt("Enter index of task to be removed")
        todo.splice(idx,1);
        console.log("deleted");
    }else{
        console.log("Wrong request");
    }
    req=prompt("enter your request :");

}