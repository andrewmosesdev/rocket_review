import ResultGrid from "../components/ResultGrid";
import TopicsGrid from '../components/TopicsGrid';
import SubTopicsGrid from '../components/SubTopicsGrid';
import DifficultyGrid from '../components/DifficultyGrid';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Review() {
    
    return (
        <div>
            <h2>
                Review Page
            </h2>
            <DifficultyGrid />
            <br />
            <TopicsGrid />
            <br />
            <SubTopicsGrid />
            <br />
            <ResultGrid />
            <br />
        </div>
    );
}

export default Review;