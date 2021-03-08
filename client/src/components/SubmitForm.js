import { useState } from 'react';
import axios from 'axios';
import { SprkTextInput, SprkSelectionInput } from '@sparkdesignsystem/spark-react';

const SubmitForm = (props) => {
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
        await axios.post('/api/notes', { title: title, body: body });
        setQuestion('');
        setAnswer('');
        setDifficulty('');
        setTopic('');
        setSubTopic('');
        setFlaggedStatus('');
        didSubmit();
    };

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
                />
                <br />
                <SprkSelectionInput
                    choices={[
                        {
                            label: 'Option 1',
                            value: 'option-1',
                        },
                        {
                            label: 'Option 2',
                            value: 'option-2',
                        },
                        {
                            label: 'Option 3',
                            value: 'option-3',
                        },
                    ]}
                    name="name"
                    variant="select"
                    label="Select Box Label"
                />
                <br />
                <SprkSelectionInput
                    choices={[
                        {
                            label: 'Option 1',
                            value: 'option-1',
                        },
                        {
                            label: 'Option 2',
                            value: 'option-2',
                        },
                        {
                            label: 'Option 3',
                            value: 'option-3',
                        },
                        {
                            label: 'Grouped Options',
                            options: [
                                {
                                    label: 'Grouped Option 1',
                                    value: 'grouped-option-1',
                                },
                                {
                                    label: 'Grouped Option 2',
                                    value: 'grouped-option-2',
                                },
                                {
                                    label: 'Grouped Option 3',
                                    value: 'grouped-option-3',
                                },
                            ],
                        },
                    ]}
                    name="name"
                    variant="select"
                    label="Select Box Label"
                />
                <br />


                <button type='submit'>Save Note</button>
            </form>
        </div>
    );
};

export default SubmitForm;