import React from 'react';
import { SprkPromo, SprkButton, SprkDivider, SprkModal } from "@sparkdesignsystem/spark-react";
import API from '../utils/API';
import {useState} from 'react';

const Questions = ({ result }) => {

    const [modalState, setModalState] = useState(false)

    const toggleFlagged = async (id, flaggedStatus) => {
        id = result._id
        setModalState(false)
        const flippedFlaggedStatus = !flaggedStatus;
        await API.changeFlagged(id, flippedFlaggedStatus);
        location.reload();
        console.log("updated in the database!")
    }

    const toggleModalOpen = () => {
        if(modalState == false) {
            setModalState(true)
        } 
    }

    const toggleModalClosed = () => {
        setModalState(false)
    }

    return (

        <div key={result._id} style={{ borderStyle: 'solid', borderRadius: '5px' }}>

            <SprkModal
                title="Are you sure?"
                isVisible={modalState}
                confirmText="Confirm"
                cancelText="Cancel"
                confirmClick={toggleFlagged}
                cancelClick={toggleModalClosed}
            >
                By clicking confirm, all users will see this review item as flagged until it is manually updated and unflagged. This action will also reload the page.
            </SprkModal>

            <SprkPromo
                title={<div>  {result.difficulty}, {result.topic}, {result.subTopic} </div>}
                subtitle={<div style={{ fontWeight: 'bold' }}> <h6> {result.question} </h6> </div>}
                additionalClasses='sprk-o-Stack--split@s'
                idString={result._id}

            >
                <SprkDivider idString="divider-1" element="span" />
                <div style={{ fontWeight: 'bold' }}>{result.answer}</div>
                <br />
                <br />

                {result.isFlagged ? <h7> <div style={{ borderStyle: 'solid', paddingTop: '3px', paddingBottom: '3px', paddingRight: '5px', paddingLeft: '5px', display: 'inline-block', backgroundColor: 'rgb(200, 16, 46)', color: 'white', borderRadius: '5px' }}> <strong> Warning: This has been flagged as incorrect or incomplete! </strong> </div></h7>
                    :
                    <SprkButton
                        idString="button-1"
                        analyticsString="button-1-analytics"
                        id={result._id}
                        onClick={toggleModalOpen}
                    >
                        Flag
                </SprkButton>}

            </SprkPromo>
        </div>
    )
}

export default Questions;