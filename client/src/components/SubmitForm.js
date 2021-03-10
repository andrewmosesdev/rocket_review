import { useState, useEffect } from 'react';
import axios from 'axios';
import { SprkTextInput, SprkSelectionInput } from '@sparkdesignsystem/spark-react';
import API from '../utils/API';

const SubmitForm = (props) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [topic, setTopic] = useState('');
    const [subTopic, setSubTopic] = useState('');
    // const [flaggedStatus, setFlaggedStatus] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        SubmitQuestion();
        // fetchTopics();
        // fetchSubTopics();
    };

    const SubmitQuestion = async () => {
        await axios.post('/api/revObjs', {
            question: question, answer: answer, difficulty: difficulty, topic: topic, subTopic: subTopic 
        });
        setQuestion('');
        setAnswer('');
        setDifficulty('');
        setTopic('');
        setSubTopic('');
    };


    // let topicDataArr = []

    // async function fetchTopics() {
    //     const { topicData } = await API.getTopics();
    //     setTopic(topicData);
    // }
    // let convertedArray = []
    // console.log(convertedArray)

    // let subTopicDataArr = [];

    // async function fetchSubTopics() {
    //     const { subTopicData } = await API.getSubTopics();
    //     setSubTopic(subTopicData);
    // }

    return (
        <div>
            <h2>Question Submission Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="question">Question:</label>
                <SprkTextInput
                    label=""
                    name="question"
                    type="textarea"
                    value={question}
                    onChange={event => setQuestion(event.target.value)} />
                <br />
                <label htmlFor="answer">Answer:</label>
                <SprkTextInput
                    label=""
                    name="answer"
                    type="textarea"
                    value={answer}
                    onChange={event => setAnswer(event.target.value)} />
                <br />
                <label htmlFor='difficulty'>Difficulty</label>
                <SprkSelectionInput
                    choices={[
                        {
                            label: 'Week 1',
                            value: 'week-1',
                        },
                        {
                            label: 'Week 2',
                            value: 'week-2',
                        },
                        {
                            label: 'Week 3',
                            value: 'week-3',
                        },
                        {
                            label: 'Week 4',
                            value: 'week-4'
                        }
                    ]}
                    name="difficulty"
                    variant="select"
                    label=""
                    value={difficulty}
                    onChange={event => setDifficulty(event.target.value)}
                />
                <br />
                <label htmlFor='topic'>Topic</label>

                <SprkSelectionInput
                    choices={[
                        {
                            value: "usc",
                            label: "USC"
                        },
                        {
                            value: "mlo",
                            label: "MLO"
                        },
                        {
                            value: "gmk",
                            label: "GMK"
                        },
                        {
                            value: "fed-law",
                            label: "Federal Law"
                        },
                        {
                            value: "ethics",
                            label: "Ethics"
                        },
                    ]}
                    name="name"
                    variant="select"
                    label=""
                    value={topic}
                    onChange={event => setTopic(event.target.value)}
                />

                <br />
                <label htmlFor='sub-topic'>Subtopic</label>
                <SprkSelectionInput
                    choices={[
                        {
                            value: "history",
                            label: "History"
                        },
                        {
                            value: "who-is-who",
                            label: "Who's Who?"
                        },
                        {
                            value: "mlo-timeline",
                            label: "MLO Timeline"
                        },
                        {
                            value: "agencies",
                            label: "Agencies"
                        },
                        {
                            value: "your-license",
                            label: "Your License"
                        },
                        {
                            value: "respa",
                            label: "RESPA"
                        },
                        {
                            value: "products",
                            label: "Products"
                        },
                        {
                            value: "mortgage-math-1",
                            label: "Mortgage Math 1"
                        },
                        {
                            value: "programs",
                            label: "Programs"
                        },
                        {
                            value: "ecoa",
                            label: "ECOA"
                        },
                        {
                            value: "consumer-contact-laws",
                            label: "Consumer Contact Laws"
                        },
                        {
                            value: "borrower-ethics-and-fraud",
                            label: "Borrower Ethics and Fraud"
                        },
                        {
                            value: "industry-fraud",
                            label: "Industry Fraud"
                        },
                        {
                            value: "industry-ethics",
                            label: "Industry Ethics"
                        },
                        {
                            value: "insurances",
                            label: "Insurances"
                        },
                        {
                            value: "third-party-services",
                            label: "Third Party Services"
                        },
                        {
                            value: "mortgage-math-2",
                            label: "Mortgage Math 2"
                        },
                        {
                            value: "tila",
                            label: "TILA"
                        },
                        {
                            value: "fairness-laws",
                            label: "Fairness Laws"
                        },
                        {
                            value: "financial-crimes-laws",
                            label: "Financial Crimes Laws"
                        },
                        {
                            value: "disclosures-and-documents",
                            label: "Disclosures and Documents"
                        },
                        {
                            value: "closing",
                            label: "Closing"
                        },
                        {
                            value: "remittance-and-ownership",
                            label: "Remittance and Ownership"
                        },
                        {
                            value: "repayment",
                            label: "Repayment"
                        },
                        {
                            value: "trid",
                            label: "TRID"
                        },
                        {
                            value: "vocab",
                            label: "Vocab"
                        },
                        {
                            value: "temporary-authority",
                            label: "Temporary Authority"
                        },
                    ]}
                    name="sub-topic"
                    variant="select"
                    label=""
                    value={subTopic}
                    onChange={event => setSubTopic(event.target.value)}
                />
                <br />


                <button type='submit'>Save Question</button>
            </form>
        </div>
    );
};

export default SubmitForm;