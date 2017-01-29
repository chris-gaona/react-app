import React from 'react';

// main class
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
                <h1>Hello World {this.state.txt}</h1>
                <Widget update={this._update.bind(this)}/>
                <Button>I <Heart text="Hello kid" /> React</Button>
            </div>
        );
    };
}

// stateless component
const Button = (props) => <button>{props.children}</button>;

// class
class Heart extends React.Component {
    render() {
      return <span>&hearts;</span>
    };
}

// stateless component
const Widget = (props) =>
    <input type="text" onChange={props.update} />;

// prop validation
App.propTypes = {
    txt: React.PropTypes.string.isRequired,
    cat: React.PropTypes.number.isRequired
};

Heart.propTypes = {
    text(props, propName, component) {
        if (!(propName in props)) {
            return new Error(`missing ${propName}`);
        }
        if (props[propName].length < 20) {
            return new Error(`${propName} was too short`);
        }
    }
};

// set default prop text
App.defaultProps = {
    txt: "this is the default text"
};

export default App;
