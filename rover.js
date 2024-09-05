
const Command = require('./command')
const Message = require('./message')
class Rover {
   constructor(position, mode = 'NORMAL', generatorWatts = 110){
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;

   }
   receiveMessage(message){
      let response = {
         message: message.name,
         results: []
      };
      for (let command of message.commands){
         let result = {completed: true};

         switch (command.commandType){
            case "MOVE":
               if (this.mode === 'LOW_POWER') {
                     result.completed =  false;
                 }else {
                  this.position = command.value;
               }
               break;
            case "MODE_CHANGE":
               this.mode = command.value;
               break;
            case "STATUS_CHECK":
               result.roverStatus = {
                  mode: this.mode,
                  generatorWatts: this.generatorWatts,
                  position: this.position
               };
               break;
            default:
               result.completed = false;
               result.error = `Unknown command type: ${command.commandType}`;
         }
         response.results.push(result);
      }
      return response;
   }
}

module.exports = Rover;