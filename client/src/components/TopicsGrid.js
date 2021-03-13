import React from 'react';
import { SprkCheckboxGroup, SprkFieldset, SprkLegend, SprkCheckboxItem, SprkHeading } from '@sparkdesignsystem/spark-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TopicsGrid = () => {
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

    const resultsFiltered = [];
    let counter;

    for(let i = 0; i < results.length; i++){
        counter = 0
        for(let j = i + 1; j < results.length; j++){
            
            if(results[i].topic == results[j].topic){
                counter ++;
            }

        }
        if(counter < 1){
            resultsFiltered.push(results[i])
        }
    }

    return (
        <div>
            <SprkCheckboxGroup variant='huge'>
                <SprkFieldset>
                    <SprkLegend><SprkHeading
                        element='h1'
                        variant='displayTwo'
                        isPageTitle
                        idString='heading-component-options'
                    >Topics</SprkHeading></SprkLegend>
                    {resultsFiltered.map(result => {
                        return (
                            <div key={result._id}>
                                <SprkCheckboxItem name='checkboxName' variant='huge'>
                                    {result.topic}
                                </SprkCheckboxItem>
                            </div>
                        )
                    })}
                </SprkFieldset>
            </SprkCheckboxGroup>

        </div>
    )
}


export default TopicsGrid;