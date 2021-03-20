import { SprkCheckboxGroup, SprkFieldset, SprkLegend, SprkCheckboxItem, SprkHeading } from '@sparkdesignsystem/spark-react';
import React from 'react';
import { useState, useEffect } from 'react';

const DifficultyGrid = () => {

    const [checkedDifficulty, setCheckedDifficulty] = useState({});
    const handleChange = (event) => {
        setCheckedDifficulty({ ...checkedDifficulty, [event.target.name]: event.target.checked });
    }

    useEffect(() => {
        console.log('checkedDifficulty: ', checkedDifficulty);
    }, [checkedDifficulty]);

    const difficultyCheckboxes = [
        {
            difficulty: 'Week 1',
            key: 1
        },
        {
            difficulty: 'Week 2',
            key: 2
        },
        {
            difficulty: 'Week 3',
            key: 3
        },
        {
            difficulty: 'Week 4',
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
                            <div key={item.difficulty}>
                                <SprkCheckboxItem name={item.difficulty} variant='huge' onChange={handleChange}>
                                    {item.difficulty}
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