import React from 'react';
import { SprkPromo, SprkButton } from "@sparkdesignsystem/spark-react";
import API from '../utils/API';

const Questions = ({ result }) => {

    const toggleFlagged = async (id, flaggedStatus) => {
        const flippedFlaggedStatus = !flaggedStatus;
        // console.log(id.target.id)
        await API.changeFlagged(id.target.id, flippedFlaggedStatus);
        console.log(result._id)
        location.reload();
    }

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
                {result.isFlagged ? 'This is flagged as incorrect or incomplete! The color of the promo needs to be updated, or text needs to be added' : <SprkButton
                    idString="button-1"
                    analyticsString="button-1-analytics"
                    id={result._id}
                    onClick={toggleFlagged}
                >
                    Flag for review
                </SprkButton>}

            </SprkPromo>
        </div>
    )
}

export default Questions;