import './TranscriptComponent.css';

// function that returns the transcript, which is a twilio sync list
// parameters : token, task - body: token, sync service sid and sync list sid 
function getSyncList(token, task){
  const body = {
    Token: token,
    ServiceSid: task.attributes.sync_srv_sid,
    ListSid : task.attributes.transcript_sid
  };

  const options = {
    method: 'POST',
    body: new URLSearchParams(body),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  };

  return new Promise((resolve, reject) =>{
    //perform post request and return data
    fetch('https://twilio-gdf-4546.twil.io/fetchTranscript', options)
    .then(response => response.json())
    .then(data => {
      resolve(data);
    })
  })
}

class TranscriptComponent extends React.Component {
   
  //transcript will keep the transcript of each session
  //fetchdTranscript will track if we have attempted to fetch the transcript or not
  constructor(props) {
    super(props);
    this.state = {
      transcript: '',
      storedTranscript: false
    }
  }
  //loads the initial transcript or ensures the transcript is shown on another task when a previous one is wrapped up
  async componentDidMount(){
    //console.log("@@@ component did mount;");
    const { task } = this.props;
    var token = await this.props.flexClientToken;
    var transcript = await getSyncList(token, task);
    this.setState({transcript: transcript, storedTranscript: true});
  }
  
  async componentDidUpdate(prevProps, prevState) {

    const { task } = this.props;
    var token = await this.props.flexClientToken;

    //check if the user selected a different task on the flex ui
    var tempString = JSON.stringify(prevState);
    var parsedPrevState = JSON.parse(tempString);  
    
    //this covers navigation
    if(parsedPrevState.storedTranscript){
      console.log('@@@ state list sid ' + parsedPrevState.transcript[0].listSid );
      if(parsedPrevState.transcript[0].listSid !== task.attributes.transcript_sid){
        console.log('@@@ different transcript needs to be shown!');
        var transcript = await getSyncList(token, task);
        
        await this.setState({transcript: transcript, storedTranscript: true});
        // console.log("@@@@@ TRANSCRIPT: "+ JSON.stringify(transcript, null, 2));
      }
    }
  }

  render() { 
    
    const { task } = this.props;
    
    //if a task exists and a transcript exists, present transcript.
    if(this.state.storedTranscript && task.attributes.transcript_sid){
      //console.log("@@@ rendering transcript sid "+ task.attributes.transcript_sid );
      // insert transcript entries into map, initialise array
      var transcriptMap = new Map(Object.entries(this.state.transcript));
      var transcriptArray = [];
   
      // push map elements into array
      transcriptMap.forEach(function(value, key) {
        transcriptArray.push(value);
        //console.log("@@@@ pushing " + JSON.stringify(value, null, 2));
      })
      //render array on a per element basis. Generic, independent from dialogflow configuration.
      return (
        <div key='transcript-div'>
          <table key='transcript-table' className='TranscriptTable'>
            <tbody>
              {
              //iterate through the array and build the table with the transcript
              transcriptArray.map(element => {
                return (<tr key={element.index}><td>{element.data.user}</td><td>{element.data.message}</td></tr>) })
              }

            </tbody>
          </table>
          <br></br>
          {/* this table presents data from dialogflow. It assumes there are intents on dialogflow returning accountid and dob. Presents data on the last bot message only */}
          <table key='session info' className='SessionDetailsTable'>
            <tbody>
              <tr >
                <td className='SessionDetailsHeaders'>
                  Intent before handover: 
                </td>
                <td className='SessionDetailsValues'>
                  {transcriptArray[transcriptArray.length-1].data.intent}
                </td>
              </tr>
              <tr>
                <td className='SessionDetailsHeaders'>
                  Account ID: 
                </td>
                <td className='SessionDetailsValues'>
                  {transcriptArray[transcriptArray.length-1].data.accountid}
                </td>
              </tr>
              <tr>
                <td className='SessionDetailsHeaders'>
                  Date of birth: 
                </td>
                <td className='SessionDetailsValues'>
                  {transcriptArray[transcriptArray.length-1].data.dob}
                </td>
              </tr>
            </tbody>
          </table>

          
        </div>  
      )
  }
    return(
      <div key="empty-transcript">
        No transcript available.
      </div>
    );
  }
}

export default TranscriptComponent;