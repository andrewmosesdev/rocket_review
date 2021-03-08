import { useState } from 'react';
import axios from 'axios';

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
            <h2>Note Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    name='title'
                    placeholder='title'
                    type='text'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <br />
                <label htmlFor="body">Body:</label>
                <textarea
                    name='body'
                    placeholder='body'
                    value={body}
                    onChange={event => setBody(event.target.value)}
                />
                <br />
                <button type='submit'>Save Note</button>
            </form>
        </div>
    );
};

export default SubmitForm;