function outputObj(objForTask){
let clone = {};
    for(let key in objForTask){
    if(objForTask.hasOwnProperty(key)){
    clone[key] = objForTask[key];}
   }
    return clone;
}
module.exports = outputObj;