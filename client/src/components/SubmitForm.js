import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SprkTextInput, SprkSelectionInput, SprkAlert, SprkCard, SprkButton } from '@sparkdesignsystem/spark-react';

const SubmitForm = (props) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [topic, setTopic] = useState('');
    const [subTopic, setSubTopic] = useState('');

    // for failure alert
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // for success alert
    const [successOpen, setSuccessOpen] = useState(false);


    // if(!successOpen) {
    //     return null
    // }

    const handleSubmit = event => {
        event.preventDefault();
        SubmitQuestion();
    };

    const SubmitQuestion = async () => {

        if (!question || !answer || !difficulty || !topic || !subTopic) {
            handleClick()
        } else {
            await axios.post('/api/revObjs', {
                question: question,
                answer: answer,
                difficulty: difficulty,
                topic: topic,
                subTopic: subTopic
            });
            setQuestion('');
            setAnswer('');
            setDifficulty('');
            setTopic('');
            setSubTopic('');
            handleClose();

            setSuccessOpen(true)

            setTimeout(() => {
                setSuccessOpen(false)
                location.reload()
            }, 1800)
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'left', marginLeft: '1%' }}>


                <SprkCard
                    isStandout
                    idString="card-20"
                    additionalContentClasses="
                    sprk-o-Stack
                    sprk-o-Stack--medium">

                    <h6>
                        1. Type your <strong>question</strong>
                        <br />
                    2. Type the <strong>answer</strong> to that question
                    <br />
                    3. Select the corresponding <strong>Difficulty</strong>, <strong>Topic</strong>, and <strong>Subtopic</strong>
                        <br />
                        <br />
                     Once you're ready to submit your review item, click the <strong>"Submit" </strong>button</h6>


                </SprkCard>
            </div>
            <br />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <SprkAlert
                    role='alert'
                    message="Please fill out all fields to submit a question"
                    variant="fail"
                    isVisible={open}
                    idString="alert-fail"
                    analyticsString="alert-fail-analytics"
                    iconNameFail='exclamation-filled'
                />
                <SprkAlert
                    role='alert'
                    message="Review item successfully submitted! Reloading page."
                    variant="success"
                    isVisible={successOpen}
                    idString="alert-success"
                    analyticsString="alert-success-analytics"
                    iconNameFail='exclamation-filled'
                />
            </div>
            <div style={{ display: 'flex', marginLeft: '1%' }}>

                <form onSubmit={handleSubmit} style={{ width: '100%' }}>

                    <SprkTextInput
                        label="Question"
                        name="question"
                        type="textarea"
                        placeholder='Type your question here'
                        value={question}
                        formatter={value => value == !null}
                        onChange={event => setQuestion(event.target.value)} />


                    <SprkTextInput
                        label="Answer"
                        name="answer"
                        type="textarea"
                        value={answer}
                        placeholder='Type your answer here'
                        onChange={event => setAnswer(event.target.value)} />

                    {/* <label htmlFor='difficulty'>Difficulty</label> */}
                    <SprkSelectionInput
                        choices={[
                            {
                                label: 'Click to select a difficulty',
                                value: null
                            },
                            {
                                label: 'Week 1',
                                value: 'Week 1',
                            },
                            {
                                label: 'Week 2',
                                value: 'Week 2',
                            },
                            {
                                label: 'Week 3',
                                value: 'Week 3',
                            },
                            {
                                label: 'Week 4',
                                value: 'Week 4'
                            }
                        ]}
                        name="difficulty"
                        variant="select"
                        label="Difficulty"
                        value={difficulty}
                        onChange={event => setDifficulty(event.target.value)}
                    />
                    {/* <label htmlFor='topic'>Topic</label> */}
                    <SprkSelectionInput
                        choices={[
                            {
                                label: 'Click to select a topic',
                                value: null
                            },
                            {
                                value: "USC",
                                label: "USC"
                            },
                            {
                                value: "MLO",
                                label: "MLO"
                            },
                            {
                                value: "GMK",
                                label: "GMK"
                            },
                            {
                                value: "Federal Law",
                                label: "Federal Law"
                            },
                            {
                                value: "Ethics",
                                label: "Ethics"
                            },
                        ]}
                        name="name"
                        variant="select"
                        label="Topic"
                        value={topic}
                        onChange={event => setTopic(event.target.value)}
                    />


                    {/* <label htmlFor='sub-topic'>Subtopic</label> */}
                    <SprkSelectionInput
                        choices={[
                            {
                                value: null,
                                label: 'Click to select a subtopic'
                            },
                            {
                                value: "History",
                                label: "History"
                            },
                            {
                                value: "Who's Who?",
                                label: "Who's Who?"
                            },
                            {
                                value: "MLO Timeline",
                                label: "MLO Timeline"
                            },
                            {
                                value: "Agencies",
                                label: "Agencies"
                            },
                            {
                                value: "Your License",
                                label: "Your License"
                            },
                            {
                                value: "RESPA",
                                label: "RESPA"
                            },
                            {
                                value: "Products",
                                label: "Products"
                            },
                            {
                                value: "Mortgage Math 1",
                                label: "Mortgage Math 1"
                            },
                            {
                                value: "Programs",
                                label: "Programs"
                            },
                            {
                                value: "ECOA",
                                label: "ECOA"
                            },
                            {
                                value: "Consumer Contact Laws",
                                label: "Consumer Contact Laws"
                            },
                            {
                                value: "Borrower Ethics and Fraud",
                                label: "Borrower Ethics and Fraud"
                            },
                            {
                                value: "Industry Fraud",
                                label: "Industry Fraud"
                            },
                            {
                                value: "Industry Ethics",
                                label: "Industry Ethics"
                            },
                            {
                                value: "Insurances",
                                label: "Insurances"
                            },
                            {
                                value: "Third Party Services",
                                label: "Third Party Services"
                            },
                            {
                                value: "Mortgage Math 2",
                                label: "Mortgage Math 2"
                            },
                            {
                                value: "TILA",
                                label: "TILA"
                            },
                            {
                                value: "Fairness Laws",
                                label: "Fairness Laws"
                            },
                            {
                                value: "Financial Crimes Laws",
                                label: "Financial Crimes Laws"
                            },
                            {
                                value: "Disclosures and Documents",
                                label: "Disclosures and Documents"
                            },
                            {
                                value: "Closing",
                                label: "Closing"
                            },
                            {
                                value: "Remittance and Ownership",
                                label: "Remittance and Ownership"
                            },
                            {
                                value: "Repayment",
                                label: "Repayment"
                            },
                            {
                                value: "TRID",
                                label: "TRID"
                            },
                            {
                                value: "Vocab",
                                label: "Vocab"
                            },
                            {
                                value: "Temporary Authority",
                                label: "Temporary Authority"
                            },
                        ]}
                        name="sub-topic"
                        variant="select"
                        label="Subtopic"
                        value={subTopic}
                        onChange={event => setSubTopic(event.target.value)}
                    />
                    <SprkButton
                        idString="button-1"
                        analyticsString="button-1-analytics"
                        type='submit'
                        style={{ marginBottom: '50px' }}
                    >

                        Submit
                    </SprkButton>
                </form>
            </div>

        </div>
    );
};

export default SubmitForm;