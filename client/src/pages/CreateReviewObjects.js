import { useEffect, useState } from 'react';
import API from '../utils/API';
import SubmitForm from '../components/SubmitForm';

const CreateReviewObjects = function () {
    const [revObjs, setRevObjs] = useState([]);

    // so we can refresh the Page *after* we get a response back from the server on our new note!
    const [refresh] = useState(0);
    // const refreshParent = () => {
    //     toggleRefresh(refresh + 1);
    // };

    // Notice deps has refresh in there - this way when it increments from someone submitting
    // it calls fetch notes again.
    useEffect(() => {
        fetchRevObjs();
    }, [refresh]);

    async function fetchRevObjs() {
        const { data } = await API.getRevObjs;
        setRevObjs(data);
    }

    return (
        <div>
            <SubmitForm />
        </div>
    );
};

export default CreateReviewObjects;