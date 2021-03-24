import ResultGrid from "../components/ResultGrid";
import TopicsGrid from '../components/TopicsGrid';
import SubTopicsGrid from '../components/SubTopicsGrid';
import DifficultyGrid from '../components/DifficultyGrid';
import { useState } from 'react';


function Review() {

    const [questions, setQuestions] = useState([]);
    
    console.log(questions)
    return (
        <div>
            <h2>
                Review Page
            </h2>
            <br/>
            <br/>
            <h4>
                Step 1. Choose a difficulty level
                <br/>
                Step 2. Choose a topic, subtopic, or both.
                <br/>
                Step 3. Review!
            </h4>
            <br/>
            <br/>
            <DifficultyGrid questions={questions} setQuestions={setQuestions}/>
            <br />
            <TopicsGrid questions={questions} setQuestions={setQuestions}/>
            <br />
            <SubTopicsGrid questions={questions} setQuestions={setQuestions}/>
            <br />
            <ResultGrid questions={questions}/>
            <br />
        </div>
    );
}

export default Review;