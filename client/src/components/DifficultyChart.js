import React from 'react';
import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const DifficultyChart = (props) => {
    const [diffData, setDiffData] = useState([]);
    const [refresh, toggleRefresh] = useState(0);

    let talliedDifficulty = {
        weekOne: 0,
        weekTwo: 0,
        weekThree: 0,
        weekFour: 0
    };

    for(let i = 0; i < diffData.length; i++){
        if(diffData[i].difficulty == 'Week 1'){
            talliedDifficulty.weekOne ++;
        } 
        else if(diffData[i].difficulty == 'Week 2'){
            talliedDifficulty.weekTwo ++;
        } 
        else if(diffData[i].difficulty == 'Week 3'){
            talliedDifficulty.weekThree ++;
        }
        else {
            talliedDifficulty.weekFour ++;
        }
    }

    let talliedDiffArray = Object.values(talliedDifficulty);


    useEffect(() => {
        fetchReviewItems();
    }, [refresh]);
    
    async function fetchReviewItems() {
        const { data } = await axios.get('/api/revObjs');
        setDiffData(data);
    };

    let chartData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            data: talliedDiffArray,
            backgroundColor: ['red', 'blue', 'green', 'orange']
        }]
    }

    return (

        <div>
            <Pie
                data={{
                    labels: chartData.labels,
                    datasets: chartData.datasets
                }}
            />
        </div>
    )


}


export default DifficultyChart;