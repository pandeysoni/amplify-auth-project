import React from 'react';
import Amplify from "aws-amplify";
import {Authenticator, withAuthenticator } from "aws-amplify-react";
import { SignIn } from "aws-amplify-react";
import CustomSignIn from "./signIn";
import Bootstrap from "./theme";
import './App.css';
import config from "./aws-exports";
Amplify.configure(config);

/**custom auth part 
const App = () => {
  return (
    <div className="App">
      <Authenticator hide={[SignIn]} amplifyConfig={config}>
        <CustomSignIn />
        <h1>Welcome to auth app</h1>
      </Authenticator>
    </div>
  );
}

export default App;
*/

/** by defualt auth ui*/
function App() {
  return (
    <div className="App">
      <h1>Welcome to auth app</h1>
    </div>
  );
}

export default withAuthenticator(App, {
  theme: Bootstrap,
  usernameAttributes: 'email',
  signUpConfig: {     
    hiddenDefaults: ["phone_number"],
    signUpFields: [{ key: 'name', label: 'Name',required: true, placeholder: 'Enter your name' }]
 }
});

