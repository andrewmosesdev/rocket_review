import React from 'react';
import { SprkPromo, SprkButton, SprkDivider } from "@sparkdesignsystem/spark-react";
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

        <div key={result._id} style={{ borderStyle: 'solid', borderRadius: '5px' }}>

            <SprkPromo
                title={result.question}
                subtitle={<div>  {result.difficulty}, {result.topic}, {result.subTopic} </div>}
                additionalClasses='sprk-o-Stack--split@s'
                hasBorder
                idString={result._id}
            >
                <SprkDivider idString="divider-1" element="span" />
                <div style={{fontWeight: 'bold'}}>{result.answer}</div>
                <br />
                <br />
                
                {result.isFlagged ? <h7> <div style={{ borderStyle: 'solid', paddingTop: '3px', paddingBottom: '3px', paddingRight: '5px', paddingLeft: '5px', display: 'inline-block', backgroundColor: 'rgb(200, 16, 46)', color: 'white', borderRadius: '5px' }}> <strong> Warning: This has been flagged as incorrect or incomplete! </strong> </div></h7>
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