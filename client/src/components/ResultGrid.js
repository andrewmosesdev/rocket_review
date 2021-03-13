import { useEffect, useState } from 'react';
import axios from 'axios';
import { SprkPromo } from "@sparkdesignsystem/spark-react";
const _ = require('lodash');


const ResultGrid = () => {
    const [results, setResults] = useState([]);
    let resultsMap = results.map(result => result)
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
    

    // const toggleRevObj = async (id, isFlagged) => {
    //     const changedFlaggedStatus = !isFlagged;
    //     await API.changeFlagged(id, changedFlaggedStatus);
    //     fetchRevObjs();
    // }

    return (
        <div>
            {(_.shuffle(results.map(result => {
                return (
                    <div key={result._id}>
                        <SprkPromo
                            title={result.question}
                            subtitle={result.topic + ", " + result.subTopic + ", " + result.difficulty}
                            additionalClasses='sprk-o-Stack--split@s'
                            cta='button'
                            ctaText='Flag this review item'
                            ctaHref='#'
                            ctaAnalytics='promo-cta-1-analytics'
                            ctaIdString='promo-cta-1'
                            hasBorder
                            idString='promo-1'
                            
                            >
                                {result.answer}
                        </SprkPromo>
                    </div>
                )
            })))}
        </div>
    )


}

export default ResultGrid;