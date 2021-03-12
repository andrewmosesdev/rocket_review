import ResultGrid from "../components/ResultGrid";
import TopicsGrid from '../components/TopicsGrid';
import SubTopicsGrid from '../components/SubTopicsGrid';

function Review() {

    return (
        <div>
            <h2>
                Review Page
            </h2>
            <br/>
            <TopicsGrid />
            <br/>
            <SubTopicsGrid />
            <br />
            <ResultGrid />
            <br />

            
        </div>
    );
}

export default Review;