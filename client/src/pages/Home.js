import { SprkButton, SprkSpinner } from '@sparkdesignsystem/spark-react';

function Home() {

    return (
        <div>
            <h2>
                Home Page
            </h2>
            <p>
                Welcome Home
            </p>
            <SprkButton
                idString="button-9"
                analyticsString="button-9-analytics"
                isSpinning
            >
                <SprkSpinner />
            </SprkButton>
        </div>
    );
}

export default Home;

