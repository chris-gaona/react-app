import React from 'react';
import ReactDOM from 'react-dom';

// main class
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state text',
            currentEvent: '---',
            a: '',
            b: '',
            c: '',
            val: 0
        };
        this.update = this.update.bind(this);
        // this.increment = this.update.bind(this);
    }

    increment() {
        this.setState({val: this.state.val + 1})
    }

    updating() {
        this.setState({
            a: ReactDOM.findDOMNode(this.a).value,
            b: this.b.value,
            c: this.refs.c.value
        });
    }

    update(e) {
        this.setState({currentEvent: e.type});
    }

    _update(e) {
        this.setState({
            txt: e.target.value
        })
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>Hello World {this.state.txt}</h1>
                <Widget update={this._update.bind(this)}/>
                <hr />
                <Button>I <Heart text="Hello kid" /> React</Button>
                <hr />
                {/*checks what current event occurred by user*/}
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
                {/*displays what current event occurred*/}
                <h1>{this.state.currentEvent}</h1>
                <hr />
                {/*example using ref with callback and component*/}
                <Input ref={component => this.a = component} update={this.updating.bind(this)} />
                {this.state.a}
                <hr />
                {/*using ref with callback*/}
                <input ref={node => this.b = node} type="text" onChange={this.updating.bind(this)} />
                {this.state.b}
                <hr />
                {/*using ref without callback*/}
                <input ref="c" type="text" onChange={this.updating.bind(this)} />
                {this.state.c}
                <hr/>
                <button onClick={this.increment.bind(this)}>{this.state.val}</button>
            </div>
        );
    };
}

class Wrapper extends React.Component {
    mount() {
        ReactDOM.render(<App />, document.getElementById('a'));
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
    }

    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>UnMount</button>
            </div>
        )
    }
}

class Input extends React.Component {
    render() {
      return <input type="text" onChange={this.props.update} />
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

export default Wrapper;
