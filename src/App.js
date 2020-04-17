import React, {useState, useCallback} from 'react';
import './App.css'


class App extends React.Component {

  constructor(props) {

  super(props);
  
  this.state = {
    items: [],
    isLoaded: false,
  }
}

componentDidMount() {
  fetch('http://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,

      })    
  })
}
render() {

  const {isLoaded, items } = this.state;

  if (!isLoaded) {
    return <div>Loadding...</div>;

    return(
      <div>Data loaded</div>
    )
  }

  return(
    <div className="App">
      <div>{items.map(item => (
        <div className="kuvat" key={items.id}>
          <img src={item.url} alt="kuva" />
        </div>
  ))}
      </div>
    </div>
  );
}
}

export default App;
