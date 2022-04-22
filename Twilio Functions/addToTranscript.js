/* Twilio function that adds messages to an existing transcript
** Should be a Protected function
** Uses ENVIRONMENT VARIABLES - SYNC_SERVICE_SID
*/

//add message request
function addMessageRequest(context, sync_list, user, message, accountid, dob, intent){
    return context.getTwilioClient().sync.services(context.SYNC_SERVICE_SID).syncLists(sync_list).syncListItems.create(
      {data: {
        user: user,
        message: message,
        accountid: accountid,
        dob : dob ,
        intent: intent
        }
      });
  }
  
  //add message
  async function addMessage(context, sync_list, user, message, parameters, accountid, dob, intent){  
    await addMessageRequest(context, sync_list, user, message, parameters, accountid, dob, intent);
  }
  
  exports.handler = async function(context, event, callback) {
  
  /** transform studio payload into an object for parsing - works for limited use cases only
    example - 
    {fields={AccountID={numberValue=1441, kind=numberValue}, date-time={stringValue=1987-06-15T12:00:00Z, kind=stringValue}}}
    becomes:
    "fields":{"AccountID":{"numberValue":"1441"," kind":"numberValue"}," date-time":{"stringValue":"1987-06-15T12:00:00Z"," kind":"stringValue"}}} */ 
    
    let accountid, dob, intent = null;
    let parameters = event.gdf_parameters;
    console.log(parameters);
    //skip if it comes empty, i.e. {fields={}}
    if(parameters != '{fields={}}'){
      parameters = parameters.replace(/=/g, '":"');
      parameters = parameters.replace(/,/g , '","');
      parameters = parameters.replace(/{/g, '{"');
      parameters = parameters.replace(/}/g, '"}');
      parameters = parameters.replace(/"{/g, '{');
      parameters = parameters.replace(/}"/g, '}');
      parameters = parameters.replace(/" /g, '"');
      parameters = parameters.replace(/""/g, '"');
  
      let parametersObj =  JSON.parse(parameters);
  
      if (parametersObj.fields.AccountID){
        accountid = parametersObj.fields.AccountID.numberValue;
        //console.log("account id value ="+ accountid);
      }
      if (parametersObj.fields.dob){
        dob = parametersObj.fields.dob.stringValue;
        //console.log("dob value ="+ dob);
      }
    }
  
    //add customer message to sync list
    await addMessage(context, event.transcript_sid, event.customer_name, event.customer_msg);
    //add virtual agent response and parameters if provided to sync list
    await addMessage(context, event.transcript_sid, event.va_name, event.va_msg, accountid, dob, event.gdf_intent);  
  
    return callback(null, null);
  };