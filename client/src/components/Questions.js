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
                subtitle={result.difficulty + ', ' + result.topic + ", " + result.subTopic}
                additionalClasses='sprk-o-Stack--split@s'
                hasBorder
                idString={result._id}
            >
                {result.answer}
                <br />
                <br />
                {result.isFlagged ? <h7> <strong> Warning: This has been flagged as incorrect or incomplete!  </strong></h7> 
                : 
                <SprkButton
                    idString="button-1"
                    analyticsString="button-1-analytics"
                    id={result._id}
                    onClick={toggleFlagged}
                >
                    Flag
                </SprkButton>}

            </SprkPromo>
        </div>
    )
}

export default Questions;