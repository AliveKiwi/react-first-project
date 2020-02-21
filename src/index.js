// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// Create a react component

function getButtonText() {
  return 'Click on Me';
}
const App = () => {
  //   const buttonText = 'Click Me!'; allowed
  //   const buttonText = 1234; allowed
  const buttonText = { text: 'Click Me' };

  //   const buttonText = [10, 'Twenty', [20, 'Thirty', [10]]]; allowed
  //   const buttonText = [10, 'Hi', { bye: 'there' }]; object not allowed inside {} jsx block

  return (
    <div>
      <label class="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {/*Can call Function*/}
        {/* {getButtonText()} */}
        {/*Can call variables,array.numbers but not objects*/}
        {/* {buttonText}  */}
        {buttonText.text} {/*allowed*/}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

// Take the react component and show it on the screen
