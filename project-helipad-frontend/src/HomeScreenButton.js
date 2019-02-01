import React, {Component} from 'react';
import './App.css';

class HomeScreenButton extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div
                style={{
                    margin: 10,
                    width: 108,
                }}
            >
                <button
                    onClick={this.props.onClick}
                    className="HomeScreenButton"
                >
                    <img
                        src={this.props.src}
                        alt={this.props.text}
                        style={{
                            width: 52,
                            height: 52,
                        }}
                    />
                </button>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default HomeScreenButton;
