import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import QuestionList from './quiz/QuestionList.jsx';

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

    render() {
        return (
            <div>
                <QuestionList {...this.state} />
            </div>
        )
    }

};

export default App;
