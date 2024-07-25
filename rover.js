
const Command = require('./command')
const Message = require('./message')
class Rover {
   constructor(position, mode, generatorWatts){
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;

   }
   receieveMessage(message){
      for (let command of message.commands){
         switch (command.commandType){
            case "MOVE":
               this.position = command.value;
               break;
            case "MODE_CHANGE":
               this.mode = command.value;
               break;
            case "STATUS CHECK":
               this.statusCheck();
               break;
            default:
               console.log(`Unknown command type: ${command.commandType}`)
         }
      }

   }
   statusCheck(){
      return{
         position: this.position,
         mode: this.mode,
         generatorWatts: this.generatorWatts

      }
   }

}

module.exports = Rover;