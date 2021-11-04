import {React,useEffect} from 'react';
import { addResponseMessage, Widget } from 'react-chat-widget';
import axios from 'axios'

import 'react-chat-widget/lib/styles.css';
let sfun = "starting_phase1";
let sinp = "yes"

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

function App() {
  useEffect(() => {
    addResponseMessage('Hi! I\'m Med. The assistant chatbot in this task. I am happy to help you during the task!');
    addResponseMessage('Okay, are you ready to start working on the task?')
  }, [])

  const handleNewUserMessage = async (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    sinp = newMessage
    // Now send the message throught the backend API
    const res = await axios.get('http://localhost:5000/chat',  {
      params: {
      fun : sfun,
      inp : sinp,
      }
      });
      // console.log(res.data)
      sfun = res.data[0]
    res.data[1].forEach(element => {
      addResponseMessage(element);
      // await new Promise(r => setTimeout(r, 2000));
    });
    
  };
  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        subtitle="🤖"
      />
    </div>
  );
}

export default App;