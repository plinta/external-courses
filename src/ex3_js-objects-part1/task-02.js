function outputObj(objForTask){
    for(let key in objForTask){
    if(objForTask.hasOwnProperty(key)){
    console.log(key)}
    }
    return ''
}
module.exports = outputObj;
