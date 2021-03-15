import { useEffect, useState } from 'react';
import axios from 'axios';
import { SprkPromo, SprkLink, SprkButton } from "@sparkdesignsystem/spark-react";
const _ = require('lodash');
import React from 'react';
import DifficultyGrid from './DifficultyGrid';
import SubTopicsGrid from './SubTopicsGrid';
import TopicsGrid from './TopicsGrid';
import API from '../utils/API';


const ResultGrid = () => {
    const [results, setResults] = useState([]);
    const [refresh, toggleRefresh] = useState(0);

    // const difficultyPath = DifficultyGrid().props.children.props.children.props.children[1];
    // const subTopicsPath = SubTopicsGrid().props.children.props.children.props.children[1];
    // const topicsPath = TopicsGrid().props.children.props.children.props.children[1];

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

    return (
        <div>
            {(_.shuffle(results.map(result => {
                if (result.isFlagged == false) {
                    return (
                        
                        <div key={result._id}>
                            
                            <SprkPromo
                                title={result.question}
                                subtitle={result.topic + ", " + result.subTopic + ", " + result.difficulty}
                                additionalClasses='sprk-o-Stack--split@s'
                                hasBorder
                                idString={result._id}
                            >
                                {result.answer}
                                <br />
                                <br />
                                <SprkButton
                                    idString="button-1"
                                    analyticsString="button-1-analytics"
                                    id={result._id}
                                    onClick={toggleFlagged}
                                >
                                    Flag for review
                                </SprkButton>
                            </SprkPromo>


                        </div>
                    )
                }
                else {
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
                                <br />
                                <br />
                                This is flagged as incorrect or incomplete! The color of the promo needs to be updated, or text needs to be added
                        </SprkPromo>
                        </div>
                    )
                }
            })))}
        </div>
    )


}

export default ResultGrid;