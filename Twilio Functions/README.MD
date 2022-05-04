These files include the Twilio Functions necessary for this project.

We will need 4 functions:
- a function that will create a transcript on a per call basis
- a function that will add new conversations to the transcript
- a function that will fetch the contents on the transcript
- a function that will be used to invoke the Dialogflow API with the customer message

We will also need the following information:
- The SID of your Sync Service
- The SID of your Sync List within the Sync Service
- The JSON file with the GCP key you downloaded

Let’s start by creating a Twilio Serverless function and setting up the environment. Navigate to the Twilio Console, then find the Twilio Functions service. Then follow this procedure:

- click on create a new service and give it a name, such as “Twilio-GDF” 
- click on dependencies. First, change your node version to v14. Then add the following dependencies:
  - Twilio-flex-token-validator
  - @google-cloud/dialogflow
- click on environment variables and add the following:
  - SYNC_SERVICE_SID: your sync service SID starting with ISXXXXX
  - PROJECT_ID: your dialogflow project ID

