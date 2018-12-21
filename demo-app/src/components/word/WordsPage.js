import React from 'react';
import NewWordForm from './NewWordForm';
import WordList from './WordList';

class WordsPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      word: {},
      wordList : []
    };
  }

  render() {
    return (
      <div>
        <NewWordForm />
        <WordList />
      </div>
    );
  }
}

export default WordsPage;