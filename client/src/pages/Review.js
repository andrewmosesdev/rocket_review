import ResultGrid from "../components/ResultGrid";
import TopicsGrid from '../components/TopicsGrid';
import SubTopicsGrid from '../components/SubTopicsGrid';
import DifficultyGrid from '../components/DifficultyGrid';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Review() {

    const [questions, setQuestions] = useState([]);
    
    return (
        <div>
            <h2>
                Review Page
            </h2>
            <DifficultyGrid questions={questions} setQuestions={setQuestions}/>
            <br />
            <TopicsGrid />
            <br />
            <SubTopicsGrid />
            <br />
            <ResultGrid questions={questions}/>
            <br />
        </div>
    );
}

export default Review;