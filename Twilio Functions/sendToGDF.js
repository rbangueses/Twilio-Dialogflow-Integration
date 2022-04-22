/* Twilio function that sends a payload to dialogflow using service account credentials
** Should be a Protected function
** Uses ENVIRONMENT VARIABLES - PROJECT_ID
*/
async function sendToGDF(projectId, event) {
    const dialogflow = require('@google-cloud/dialogflow');
    // A unique identifier for the given session - we use the event sid
    const sessionId = event.sid;
    // as per google json
    let privateKey = '<YOUR private_key';
    let clientEmail = '<YOUR client_email>';

    let config = {
      credentials: {
        private_key: privateKey,
        client_email: clientEmail
      }
    }

    // Creating a new session
    const sessionClient = new dialogflow.SessionsClient(config);
    const sessionPath = sessionClient.projectAgentSessionPath(
      projectId,
      sessionId
    );

    // The text query request.
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text: event.customerMessage,
          // The language used by the client (en-US)
          languageCode: 'en-US',
        },
      },
    };

    // Send request and return result
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;

    return result;
  }

exports.handler = async function(context, event, callback) {
  const dialogflowResponse = await sendToGDF(context.PROJECT_ID,event);
  return callback(null, dialogflowResponse);
};