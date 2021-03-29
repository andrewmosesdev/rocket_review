import { useEffect, useState } from 'react';
import API from '../utils/API';
import SubmitForm from '../components/SubmitForm';
import DifficultyChart from '../components/DifficultyChart';
import TopicChart from '../components/TopicChart'

const CreateReviewObjects = function () {
    const [revObjs, setRevObjs] = useState([]);

    // so we can refresh the Page *after* we get a response back from the server on our new note!
    const [refresh] = useState(0);

    useEffect(() => {
        fetchRevObjs();
    }, [refresh]);

    async function fetchRevObjs() {
        const { data } = await API.getRevObjs;
        setRevObjs(data);
    }

    console.log('need to add charts on question submission page')

    return (
        <div style={{display: 'flex'}}>
            <div>
                <SubmitForm />
            </div>
            <div style={{}}>
                <DifficultyChart />
            </div>
            <div style={{}}>
                <TopicChart />
            </div>
        </div>
    );
};

export default CreateReviewObjects;