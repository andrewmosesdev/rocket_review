import ResultGrid from "../components/ResultGrid";
import TopicsGrid from '../components/TopicsGrid';
import SubTopicsGrid from '../components/SubTopicsGrid';
import DifficultyGrid from '../components/DifficultyGrid';
import { useState } from 'react';
import { SprkStack, SprkStackItem, SprkCard } from '@sparkdesignsystem/spark-react';


function Review() {

    const [questions, setQuestions] = useState([]);

    console.log(questions)
    return (
        <div>
            
            <div style={{ marginLeft: '1%', marginRight: '1%' }}>


                <SprkCard
                    isStandout
                    idString="card-20"
                    additionalContentClasses="
        sprk-o-Stack
        sprk-o-Stack--medium"

                >
                    <h4>How to:</h4>
                    <br />
                    <h6>Choose a <strong>difficulty</strong>, then choose a <strong>topic</strong> and/or <strong>subtopic</strong>. The corresponding review items will appear down below.</h6>
                    <br />
                    <h6>If a review item has incorrect or incomplete information, click the red <strong>"Flag"</strong> button to mark it for review.</h6>
                </SprkCard>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div style={{ width: '98%', display: 'flex', alignContent: 'center', marginLeft: '1%'}}>
                <SprkStack splitAt="tiny" >

                    <SprkStackItem additionalClasses="sprk-o-Stack__item--third@xs" style={{padding: '5px'}}>
                        <DifficultyGrid questions={questions} setQuestions={setQuestions} />
                    </SprkStackItem>
                    <SprkStackItem additionalClasses="sprk-o-Stack__item--third@xs" style={{padding: '5px'}}>
                        <TopicsGrid questions={questions} setQuestions={setQuestions} />
                    </SprkStackItem>
                    <SprkStackItem additionalClasses="sprk-o-Stack__item--third@xs" style={{padding: '5px'}}>
                        <SubTopicsGrid questions={questions} setQuestions={setQuestions} />
                    </SprkStackItem>
                </SprkStack>
            </div>

            <br />
            <br />
            <br />
            <div>
                <ResultGrid questions={questions} />

            </div>
            <br />
        </div>
    );
}

export default Review;