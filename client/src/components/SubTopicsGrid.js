import { SprkCheckboxGroup, SprkFieldset, SprkLegend, SprkCheckboxItem, SprkHeading } from '@sparkdesignsystem/spark-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SubTopicsGrid = () => {
    const [results, setResults] = useState([]);
    const [refresh, toggleRefresh] = useState(0);
    const refreshParent = () => {
        toggleRefresh(refresh + 1);
    };

    useEffect(() => {
        fetchReviewItems();
    }, [refresh]);
    async function fetchReviewItems() {
        const { data } = await axios.get('/api/revObjs');
        setResults(data);
    };

    return (
        <div>
            <SprkCheckboxGroup variant='huge'>
                <SprkFieldset>
                    <SprkLegend><SprkHeading 
                    element='h1'
                    variant='displayTwo'
                    isPageTitle
                    idString='heading-component-options'
                    >Subtopics</SprkHeading></SprkLegend>
                    {results.map(result => {
                        return (
                            <div key={result._id}>
                                <SprkCheckboxItem name='checkboxName' variant='huge'>
                                    {result.subTopic}
                                </SprkCheckboxItem>
                            </div>
                        )
                    })}
                </SprkFieldset>
            </SprkCheckboxGroup>

        </div>
    )
}


export default SubTopicsGrid;