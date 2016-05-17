import React ,{ Component } from 'react';
// we still need to import because
//when evenever this code converts
// it generate code like React.createElement

// state is a plain javascript object that is used to record
// and react to user events

// Each class based component has its own state object

// When ever a component state is changed component
// immediately re-renders and also forces all of its children to
// re-render as well

// functional components do not have state ,
// only class based components do.

// always manipulate state with setState

class SearchBar extends Component{

  constructor(props){
    super(props);

    this.state ={term: ''}
  }

  render(){
    return (
      <div className="search-bar">
          <input
            value ={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
          />
      </div>
    )
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchtermChange(term);
  }

}

export default SearchBar;
