import React from 'react';

class App extends React.Component {
    render() {
        return <h1>Hello World {this.props.txt}</h1>;
    }
}

App.propTypes = {
    txt: React.PropTypes.string.isRequired,
    cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
    txt: "this is the default text"
};

export default App;
