/* Twilio function that returns the transcript of the conversation with the virtual assistant
** Should be a Public function as it needs to be reachable by the Flex Agent Desktop
*/

const TokenValidator = require('twilio-flex-token-validator').functionValidator;

exports.handler = TokenValidator(function(context, event, callback) {
  // Add the NodeJS Helper Library by calling context.getTwilioClient()
  const client = context.getTwilioClient();

  // Create a custom Twilio Response
  // Set the CORS headers to allow Flex to make an HTTP request to the Twilio Function
  const response = new Twilio.Response();
  response.appendHeader('Access-Control-Allow-Origin', '*');
  response.appendHeader('Access-Control-Allow-Methods', 'OPTIONS POST GET');
  response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Use the NodeJS Helper Library to make an API call.
  // Note how you are passing the sync services and sync list sids using a key from the event parameter.
  client.sync.services(event.ServiceSid)
  .syncLists(event.ListSid)
  .syncListItems
  .list({limit: 20})
  .then(data => {
        response.appendHeader('Content-Type', 'application/json');
        response.setBody(data);
        // Return a success response using the callback function.
        callback(null, response);
    })
    .catch(err => {
        response.appendHeader('Content-Type', 'plain/text');
        response.setBody(err.message);
        response.setStatusCode(500);
        // If there's an error, send an error response
        // Keep using the response object for CORS purposes
        callback(null, response);
    });
})
