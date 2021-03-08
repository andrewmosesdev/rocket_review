import { useEffect, useState } from 'react';
import API from '../utils/API';

const ReviewObjects = function () {
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

    const toggleRevObj = async (id, isFlagged) => {
        const changedFlaggedStatus = !isFlagged;
        await API.changeFlagged(id, changedFlaggedStatus);
        fetchRevObjs();
    }

    return (
        <div>
            <h2>Review Items</h2>
            <ol>
                {/* {revObjs.map(obj => {
                    return (
                        <li key={obj._id}>
                            <strong>{obj.question}</strong> {obj.answer} <sub>Flagged: {obj.isFlagged}</sub>
                        </li>
                    );
                })} */}
            </ol>
        </div>
    );
};

export default ReviewObjects;