import logo from './logo.svg';
import './App.css';
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import back from './assets/back_brown.jpg'
function App() {
  return (

    <div className="App">
      <div className={"line"}></div>
      <div className={"leader"}>
        <div className={"banner"}>
          <p className={"head2"}>Presenting{'\n\n'}</p>
          <p className={"head1"}>Best trending Now.</p>
            <button className="cssbuttons-io-button"> Get started
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor"
                              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                    </svg>
                </div>
            </button>
            <div className={"first_list"}>

            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
