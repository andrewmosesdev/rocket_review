import { useEffect, useState } from 'react';
import API from '../utils/API';
import SubmitForm from '../components/SubmitForm';
import DifficultyChart from '../components/DifficultyChart';
import TopicChart from '../components/TopicChart';
import SubTopicChart from '../components/SubTopicChart';
import { SprkStack, SprkStackItem } from "@sparkdesignsystem/spark-react";

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

    return (
        <div style={{}}>
            <SprkStack
                splitAt="tiny"

            >
                <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs">
                    <div style={{ width: '100%' }}>
                        <SubmitForm />
                    </div>
                </SprkStackItem>
                <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs">

                    <div>
                        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '40px'}}>
                            <h4 style={{}}>Current study set makeup:</h4>
                        </div>
                        <SprkStack
                            itemSpacing='large'
                            additionalClasses='sprk-o-Stack--center-row'
                        >
                            <SprkStackItem>
                                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>

                                    <DifficultyChart />

                                    <TopicChart />
                                </div>


                            </SprkStackItem>
                            <br />
                            <br />
                            <SprkStackItem>

                                <SubTopicChart />

                            </SprkStackItem>
                        </SprkStack>

                    </div>

                </SprkStackItem>
            </SprkStack>
        </div>
    );
};

export default CreateReviewObjects;