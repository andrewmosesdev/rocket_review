import ResultGrid from "../components/ResultGrid";
import TopicsGrid from '../components/TopicsGrid';
import SubTopicsGrid from '../components/SubTopicsGrid';
import DifficultyGrid from '../components/DifficultyGrid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import API from "../utils/API";
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

    // const toggleFlagged = async (id, flaggedStatus) => {
    //     const flippedFlaggedStatus = !flaggedStatus;
    //     await API.changeFlagged(id, flippedFlaggedStatus);
    //     fetchReviewItems();
    // }

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