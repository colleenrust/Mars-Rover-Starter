class Command {
   constructor(commandType, value) {
    //  this.commandType = commandType;
     if (!commandType) {
       throw new Error("Command type required.");
     }
     this.value = value;
     this.commandType = commandType;
   }
 
 }
 
 module.exports = Command;