import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


function App({ signOut }) { 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={signOut}>Logout</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);