These files include the Twilio Functions necessary for this project.

We will need 4 functions:\n
1- a function that will create a transcript on a per call basis\n
2- a function that will add new conversations to the transcript\n
3- a function that will fetch the contents on the transcript\n
4- a function that will be used to invoke the Dialogflow API with the customer message\n

We will also need the following information:\n
- The SID of your Sync Service\n
- The SID of your Sync List within the Sync Service\n
- The JSON file with the GCP key you downloaded\n

Let’s start by creating a Twilio Serverless function and setting up the environment. Navigate to the Twilio Console, then find the Twilio Functions service. Then follow this procedure:

1- click on create a new service and give it a name, such as “Twilio-GDF” 
2- click on dependencies. First, change your node version to v14. Then add the following dependencies:
  - Twilio-flex-token-validator
  - @google-cloud/dialogflow
3- click on environment variables and add the following:
  - SYNC_SERVICE_SID: <your sync service SID starting with ISXXXXX>
  - PROJECT_ID: <your dialogflow project ID>

