function functionCall(data){
    doSomeworkOne(data).then(function(data){
        return doSomeworkTwo(data);
    }).then(function(data){
        return     doSomeworkThree(data);
    }).catch(function(e) {
        // error handle    
    });
}

function doSomeworkOne(data){
    retrun new Promise(function(resolve, reject){
        ...........
        ...........
        if(error){
            reject(error);        
        }else{
            resolve(success);
        }
    })        
}

function doSomeworkTwo(data){
    retrun new Promise(function(resolve, reject){
        ...........
        ...........
        if(error){
            reject(error);        
        }else{
            resolve(success);
        }
    })        
}

function doSomeworkThree(data){
    retrun new Promise(function(resolve, reject){
        ...........
        ...........
        if(error){
            reject(error);        
        }else{
            resolve(success);
        }
    })        
}
