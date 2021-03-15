import { SprkCheckboxGroup, SprkFieldset, SprkLegend, SprkCheckboxItem, SprkHeading } from '@sparkdesignsystem/spark-react';
import React from 'react';
import { useState, useEffect } from 'react';

const DifficultyGrid = () => {

    const [checkedItems, setCheckedItems] = useState({});
    const handleChange = (event) => {
        setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
    }

    useEffect(() => {
        console.log('checkedDifficulty: ', checkedItems);
    }, [checkedItems]);

    const difficultyCheckboxes = [
        {
            name: 'Week 1',
            key: 1
        },
        {
            name: 'Week 2',
            key: 2
        },
        {
            name: 'Week 3',
            key: 3
        },
        {
            name: 'Week 4',
            key: 4
        },
    ];

    return (
        <div>
            <SprkCheckboxGroup variant='huge'>
                <SprkFieldset>
                    <SprkLegend><SprkHeading
                        element='h1'
                        variant='displayTwo'
                        isPageTitle
                        idString='heading-component-options'
                    >Difficulty</SprkHeading></SprkLegend>
                    {difficultyCheckboxes.map(item => {
                        return (
                            <div key={item.key}>
                                <SprkCheckboxItem name={item.name} variant='huge' onChange={handleChange}>
                                    {item.name}
                                </SprkCheckboxItem>
                            </div>
                        )
                    })}
                </SprkFieldset>
            </SprkCheckboxGroup>

        </div>
    )
}

export default DifficultyGrid;