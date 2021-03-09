import { useState, useEffect } from 'react';
import axios from 'axios';
import { SprkTextInput, SprkSelectionInput } from '@sparkdesignsystem/spark-react';
import API from '../utils/API';

const SubmitForm = (props) => {
    console.log(props)
    const { didSubmit } = props;
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [topic, setTopic] = useState('');
    const [subTopic, setSubTopic] = useState('');
    const [flaggedStatus, setFlaggedStatus] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        SubmitQuestion();
    };
    const SubmitQuestion = async () => {
        await axios.post('/api/revObjs', { question: question, answer: answer, difficulty: difficulty, topic: topic, subTopic: subTopic, isFlagged: false });
        setQuestion('');
        setAnswer('');
        setDifficulty('');
        setTopic('');
        setSubTopic('');
        setFlaggedStatus('');
        // didSubmit();
    };


    let topicDataArr = [];

    async function fetchTopics() {
        const { topicData } = await API.getTopics();
        setTopic(topicData);

        topicData.forEach(topicDatum => {
            let topicDatumObject = {
                label: topicDatum + " " + "label",
                value: topicDatum
            }
            topicDataArr.push(topicDatumObject);
        })
    }

    let subTopicDataArr = [];

    async function fetchSubTopics() {
        const { subTopicData } = await API.getSubTopics();
        setSubTopic(subTopicData);

        subTopicData.forEach(subTopicDatum => {
            let subTopicDatumObject = {
                label: subTopicDatum + " " + "label",
                value: subTopicDatum
            }
            subTopicDataArr.push(subTopicDatumObject);
        })
    }

    



    

    return (
        <div>
            <h2>Question Submission Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="question">Question:</label>
                <SprkTextInput
                    label="question"
                    name="question"
                    type="textarea"
                    value={question}
                    onChange={event => setQuestion(event.target.value)} />
                <br />
                <label htmlFor="answer">Answer:</label>
                <SprkTextInput
                    label="answer"
                    name="answer"
                    type="textarea"
                    value={answer}
                    onChange={event => setAnswer(event.target.value)} />
                <br />
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
                    label="Difficulty"
                    onChange={event => setDifficulty(event.target.value)}
                />
                <br />
                <SprkSelectionInput
                    choices={topicDataArr}
                    name="name"
                    variant="select"
                    label="Select Box Label"
                    onChange={event => setTopic(event.target.value)}
                />
                <br />
                <SprkSelectionInput
                    choices={subTopicDataArr}
                    name="name"
                    variant="select"
                    label="Select Box Label"
                    onChange={event => setSubTopic(event.target.value)}
                />
                <br />


                <button type='submit'>Save Question</button>
            </form>
        </div>
    );
};

export default SubmitForm;