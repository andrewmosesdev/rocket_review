import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { SprkTextInput, SprkSelectionInput, SprkAlert, SprkCard } from '@sparkdesignsystem/spark-react';

const SubmitForm = (props) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [topic, setTopic] = useState('');
    const [subTopic, setSubTopic] = useState('');

    // for alert
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
            handleClose()
        }
    };

    return (
        <div>
            <div style={{ marginLeft: '1%', marginRight: '1%' }}>


                <SprkCard
                    isStandout
                    idString="card-20"
                    additionalContentClasses="
                    sprk-o-Stack
                    sprk-o-Stack--medium">
                    <h4>How to:</h4>
                    <br />
                    <h6>Type in a <strong>question</strong> and the correct <strong>answer</strong> to that question. After that, you'll need to choose a corresponding <strong>Difficulty</strong>, <strong>Topic</strong>, and <strong>Subtopic</strong>.
                     <br/>
                     Once you're ready to submit your review item, click the <strong>"Submit" button</strong>.</h6>
                    <br />
                    
                </SprkCard>
            </div>
            <br/>
            <br/>
            <SprkAlert
                    role='alert'
                    message="Please fill out all fields before submitting"
                    variant="fail"
                    isVisible={open}
                    idString="alert-fail"
                    analyticsString="alert-fail-analytics"
                    iconNameFail='exclamation-filled'
                />
            <form onSubmit={handleSubmit} style={{ marginLeft: '1%', marginRight: '1%' }}>
                <label htmlFor="question">Question</label>
                <SprkTextInput
                    label=""
                    name="question"
                    type="textarea"
                    value={question}
                    formatter={value => value == !null}
                    onChange={event => setQuestion(event.target.value)} />
                
                <label htmlFor="answer">Answer</label>
                <SprkTextInput
                    label=""
                    name="answer"
                    type="textarea"
                    value={answer}
                    onChange={event => setAnswer(event.target.value)} />
                
                <label htmlFor='difficulty'>Difficulty</label>
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
                    label=""
                    value={difficulty}
                    onChange={event => setDifficulty(event.target.value)}
                />
                
                <label htmlFor='topic'>Topic</label>

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
                    label=""
                    value={topic}
                    onChange={event => setTopic(event.target.value)}
                />

                
                <label htmlFor='sub-topic'>Subtopic</label>
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
                    label=""
                    value={subTopic}
                    onChange={event => setSubTopic(event.target.value)}
                />

                
                <button type='submit'>Submit Question</button>
                <br />
                
            </form>
        </div>
    );
};

export default SubmitForm;