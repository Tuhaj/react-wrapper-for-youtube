import React from 'react';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({term: event.target.value})}
               value={this.state.term}
        ></input>
        <p>text of the input: {this.state.term}</p>
      </div>
    );
  }
}

export default SearchInput;
