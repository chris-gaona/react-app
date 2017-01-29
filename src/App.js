import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state text'
        }
    }

    _update(e) {
        this.setState({
            txt: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this._update.bind(this)} />
                <h1>Hello World {this.state.txt}</h1>
            </div>
        );
    };
}

App.propTypes = {
    txt: React.PropTypes.string.isRequired,
    cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
    txt: "this is the default text"
};

export default App;
