import 'regenerator-runtime/runtime';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Test from './components/Test/Test';
import Messages from './components/Messages';
import NearCourse from './components/NearCourse/NearCourse';

const App = ({ isSignedIn, guestBook, wallet }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    guestBook.getMessages().then(setMessages);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const { fieldset, message, donation } = e.target.elements;

    fieldset.disabled = true;

    await guestBook.addMessage(message.value, donation.value)
    const messages = await guestBook.getMessages()

    setMessages(messages);
    message.value = '';
    donation.value = '0';
    fieldset.disabled = false;
    message.focus();
  };

  const signIn = () => { wallet.signIn() }

  const signOut = () => { wallet.signOut() }


  return (
   
      <main>
        { isSignedIn
            ? <button className="old-button" onClick={signOut}>Log out</button>
            : <button className="new-button" onClick={signIn}>Log In</button>
          }

     
            { isSignedIn
              ? <Form onSubmit={onSubmit} currentAccountId={wallet.accountId} />
              : <Test signIn={signIn} isSignedIn={isSignedIn}/>
            }

            { !!messages.length && <Messages messages={messages}/> }
          
      </main>

 
  );
};

export default App;