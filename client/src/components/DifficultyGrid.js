import { SprkCheckboxGroup, SprkFieldset, SprkLegend, SprkCheckboxItem, SprkHeading } from '@sparkdesignsystem/spark-react';

const DifficultyGrid = () => {

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
                    <div key={1}>
                        <SprkCheckboxItem name='checkboxName' variant='huge'>
                            Week 1
                                </SprkCheckboxItem>
                    </div>
                    <div key={2}>
                        <SprkCheckboxItem name='checkboxName' variant='huge'>
                            Week 2
                                </SprkCheckboxItem>
                    </div>
                    <div key={3}>
                        <SprkCheckboxItem name='checkboxName' variant='huge'>
                            Week 3
                                </SprkCheckboxItem>
                    </div>
                    <div key={4}>
                        <SprkCheckboxItem name='checkboxName' variant='huge'>
                            Week 4
                                </SprkCheckboxItem>
                    </div>
                </SprkFieldset>
            </SprkCheckboxGroup>

        </div>
    )
}

export default DifficultyGrid;