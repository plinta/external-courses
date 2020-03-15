function showProperty(strForTask, objForTask){
    for(let key in objForTask){
        if((objForTask.hasOwnProperty(key))&&(key === strForTask)){return true}
    }
    return false
}
module.exports = showProperty;