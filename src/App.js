import React from 'react';

// main class
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state text',
            currentEvent: '---'
        }
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({currentEvent: e.type});
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
                <textarea
                    onKeyPress={this.update}
                    onCopy={this.update}
                    onCut={this.update}
                    onPaste={this.update}
                    onFocus={this.update}
                    onBlur={this.update}
                    cols="30"
                    rows="10">
                </textarea>
                <h1>{this.state.currentEvent}</h1>
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
        if (props[propName].length < 5) {
            return new Error(`${propName} was too short`);
        }
    }
};

// set default prop text
App.defaultProps = {
    txt: "this is the default text"
};

export default App;
