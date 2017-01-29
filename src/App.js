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
                <h1>Hello World {this.state.txt}</h1>
                <Widget update={this._update.bind(this)}/>
                <Button>I <Heart /> React</Button>
            </div>
        );
    };
}

const Button = (props) => <button>{props.children}</button>;

class Heart extends React.Component {
    render() {
      return <span>&hearts;</span>
    };
}

const Widget = (props) =>
    <input type="text" onChange={props.update} />;

App.propTypes = {
    txt: React.PropTypes.string.isRequired,
    cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
    txt: "this is the default text"
};

export default App;
