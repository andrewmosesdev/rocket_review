import ResultGrid from "../components/ResultGrid";
import TopicsGrid from '../components/TopicsGrid';
import SubTopicsGrid from '../components/SubTopicsGrid';
import DifficultyGrid from '../components/DifficultyGrid';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Review() {
    const [results, setResults] = useState([]);
    const [refresh, toggleRefresh] = useState(0);
    const refreshParent = () => {
        toggleRefresh(refresh + 1);
    };

    useEffect(() => {
        fetchReviewItems();
    }, [refresh]);

    async function fetchReviewItems() {
        const { data } = await axios.get('/api/revObjs');
        setResults(data);
    };

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