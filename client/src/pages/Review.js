import ResultGrid from "../components/ResultGrid";
import TopicsGrid from '../components/TopicsGrid';
import SubTopicsGrid from '../components/SubTopicsGrid';
import DifficultyGrid from '../components/DifficultyGrid';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Review() {

    const [questions, setQuestions] = useState([]);
    
    console.log(questions)
    return (
        <div>
            <h2>
                Review Page
            </h2>
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