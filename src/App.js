import React,{useState,useEffect} from 'react';
import './App.css';
import {FormControl,npInput} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';

function App() {
  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([{username:'Padma',message:'Heyy'}, {username:'Indu',message:'Whats up'}]);
  const [username,setUsername]=useState('');
  
  //getting data from firebase using onSnapshot function
  
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc =>({id:doc.id,message:doc.data()}))
      )})
  },[])
  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  },[]);
  
  //setting up timestamp for the messages  so that latest message shows up on top
  
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    //setMessages([...messages,{username:username,text:input}]);
    setInput('  ');
  }
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=50%&h=50%" alt='' />
      <h1>FB Messenger clone </h1>
      <h2>Welcome {username}!</h2>
      <form className='app__form'>
      <FormControl className='app__formControl'>
      
        <Input  className='app__input' placeholder='Enter a message' value={input} onChange={event => setInput(event.target.value)}/>
         <IconButton  className='app__iconButton' disabled={!input} variant="contained" color="primary" type='submit'  onClick={sendMessage}>send message
         <SendIcon />
         </IconButton>
      </FormControl>
      </form>
      <FlipMove>
      {
        messages.map(({id,message}) => (
          <Message key={id} username={username} message={message} />
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
