import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import API from '../utils/API';
import Questions from './Questions';

const _ = require('lodash');

const ResultGrid = (props) => {
    const [results, setResults] = useState([]);
    const [refresh, toggleRefresh] = useState(0);

    useEffect(() => {
        fetchReviewItems();
    }, [refresh]);

    async function fetchReviewItems() {
        const { data } = await axios.get('/api/revObjs');
        setResults(data);
    };

    const toggleFlagged = async (id, flaggedStatus) => {
        const flippedFlaggedStatus = !flaggedStatus;
        console.log(id.target.id)
        await API.changeFlagged(id.target.id, flippedFlaggedStatus);
        fetchReviewItems();
    }

    // 

    return (
        <div>
            {(_.shuffle(results.map(result => {
                console.log(results)
                if (props.questions.includes(result.difficulty)) {
                    return (
                        <div>
                            <Questions result={result} onClick={toggleFlagged} />
                        </div>
                    )
                }
            })))}
        </div>
    )


}

export default ResultGrid;