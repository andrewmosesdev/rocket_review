import { useEffect, useState } from 'react';
import axios from 'axios';
import { SprkPromo } from "@sparkdesignsystem/spark-react";
const _ = require('lodash');
import React from 'react';


const ResultGrid = () => {
    const [results, setResults] = useState([]);
    // let resultsMap = results.map(result => result)
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
            {(_.shuffle(results.map(result => {
                if(result.isFlagged == false){
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
                )} 
                else{
                    return (
                    <div key={result._id}>
                        <SprkPromo
                            title={result.question}
                            subtitle={result.topic + ", " + result.subTopic + ", " + result.difficulty}
                            additionalClasses='sprk-o-Stack--split@s'
                            ctaAnalytics='promo-cta-1-analytics'
                            ctaIdString='promo-cta-1'
                            hasBorder
                            idString='promo-1'
                            
                            >
                                {result.answer}
                                <br/>
                                <br/>
                                This is flagged as incorrect or incomplete! The color of the promo needs to be updated, or text needs to be added
                        </SprkPromo>
                    </div>
                    )}
            })))}
        </div>
    )


}

export default ResultGrid;