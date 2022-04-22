/* Twilio function that creates a new Twilio Sync List within the identified Twilio Sync Service
** Should be a Protected function
** Uses ENVIRONMENT VARIABLES - SYNC_SERVICE_SID
*/

//new transcript request
function newTranscriptRequest(context){
    //create a transcript that expires after ttl - 1 day: 86400 seconds. Adjust as necessary
    return context.getTwilioClient().sync.services(context.SYNC_SERVICE_SID).syncLists.create({ttl: 86400});
  }
  
  //create a new transcript
  async function createNewTranscript(context){
    var newTranscriptResponse = await newTranscriptRequest(context);
    return newTranscriptResponse.sid;
  }
  
  //generate a new transcript and return 
  exports.handler = async function(context, event, callback) {
    let newTranscriptSID = await createNewTranscript(context);
    return callback(null, newTranscriptSID);
  };