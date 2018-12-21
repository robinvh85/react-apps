import React from 'react';

class NewWordForm extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <label>Word</label>
          <input type='input' />
        </div>
      </div>
    );
  }
}

export default NewWordForm;