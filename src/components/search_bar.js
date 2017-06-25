import React from 'react';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input onChange={event => this.onInputChange(event.target.value)}
               value={this.state.term}
        />
        <p>text of the input: {this.state.term}</p>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchInput;
