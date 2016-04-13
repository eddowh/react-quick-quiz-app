import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Scorebox from './quiz/Scorebox.jsx';
import QuestionList from './quiz/QuestionList.jsx';
import Results from './quiz/Results.jsx';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

            // questions array:
            // each objects represent a question
            // see 'data/questions.json'
            questions: require('json!' + '../../data/questions.json'),

            // score will later be calculated as a percentage
            score: 0,
            current: 1
        }
    }

    setCurrent(current) {
        this.setState({
            current: current
            // current: (current > this.state.questions.length) ? 1 : current
        });
    }

    setScore(score) {
        this.setState({
            score: score
        });
    }

    render() {

        if (this.state.current > this.state.questions.length) {
            var scorebox = null;
            var results = <Results {...this.state} />
        } else {
            var scorebox = <Scorebox {...this.state} />;
            var results = null;
        }

        return (
            <div>
                {scorebox}
                <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
                {results}
            </div>
        )
    }

};

export default App;
