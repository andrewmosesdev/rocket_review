import { SprkCheckboxGroup, SprkFieldset, SprkLegend, SprkCheckboxItem, SprkHeading } from '@sparkdesignsystem/spark-react';
import React from 'react';
import { useState, useEffect } from 'react';

const DifficultyGrid = () => {

    // const [checkedStatus, setCheckedStatus] = useState(false);

    // const handleCheck = () => {
    //     let options = [1, 2, 3, 4];
    //     options.forEach(checked => {
    //         console.log(checked, checkedStatus)
    //         if(checked.key == checked){
    //             checkedStatus == false ? setCheckedStatus(true) : setCheckedStatus(false)
    //         }
    //     })

    // };

    const [checkedItems, setCheckedItems] = useState({});
    const handleChange = (event) => {
        setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
    }

    useEffect(() => {
        console.log('checkedItems: ', checkedItems);
    }, [checkedItems]);

    const checkboxes = [
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
    ]

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
                    {checkboxes.map(item => {
                        return (
                            <div key={item.key}>
                                <SprkCheckboxItem name={item.name} variant='huge' onChange={handleChange}>
                                    {item.name}
                                </SprkCheckboxItem>
                            </div>
                        )
                    })}
                    {/* <div key={2}>
                        <SprkCheckboxItem name='week-2' variant='huge' onChange={handleCheck}>
                            Week 2
                                </SprkCheckboxItem>
                    </div>
                    <div key={3}>
                        <SprkCheckboxItem name='week-3' variant='huge' onChange={handleCheck}>
                            Week 3
                                </SprkCheckboxItem>
                    </div>
                    <div key={4}>
                        <SprkCheckboxItem name='week-4' variant='huge' onChange={handleCheck}>
                            Week 4
                                </SprkCheckboxItem>
                    </div> */}
                </SprkFieldset>
            </SprkCheckboxGroup>

        </div>
    )
}

export default DifficultyGrid;