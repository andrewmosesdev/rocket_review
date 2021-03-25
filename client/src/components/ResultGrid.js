import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
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
    
    return (
        <div>
            {(_.shuffle(results.map(result => {
                let propDifficulty = props.questions.includes(result.difficulty);
                let propTopic = props.questions.includes(result.topic);
                let propSubTopic = props.questions.includes(result.subTopic);


                if (propDifficulty && propTopic || propDifficulty && propSubTopic) {
                    return (
                        <div>
                            <Questions result={result} />
                        </div>
                    )
                } else if (propDifficulty && propTopic) {
                    return (
                        <div>
                            <Questions result={result} />
                        </div>
                    )
                } else if (propDifficulty && propSubTopic) {
                    return (
                        <div>
                            <Questions result={result} />
                        </div>
                    )
                }
            })))}
        </div>
    )


}

export default ResultGrid;