import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Results extends Component {

    render() {

        // score calculation
        var percent = (this.props.score / this.props.questions.length * 100);
        if (percent > 80) {
            var message = "Awesome job!";
        } else if (percent > 60) {
            var message = "You did OK!";
        } else {
            var message = "You did horrible!";
        }

        return (
            <div className="well">
                <h4>
                    You got {this.props.score} out of {this.props.questions.length} correct!
                </h4>
                <h1>
                    {percent.toFixed(2)}% - {message}
                </h1>
                <hr />
                <a href="/public">
                    Take Again
                </a>
            </div>
        )

    }

};

export default Results;
