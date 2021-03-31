import React from 'react';
import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const TopicChart = (props) => {
    const [topicData, setTopicData] = useState([]);
    const [refresh, toggleRefresh] = useState(0);

    let talliedTopic = {
        USC: 0,
        MLO: 0,
        GMK: 0,
        FedLaw: 0,
        Ethics: 0
    };

    for(let i = 0; i < topicData.length; i++){
        if(topicData[i].topic == 'USC'){
            talliedTopic.USC ++;
        } 
        else if(topicData[i].topic == 'MLO'){
            talliedTopic.MLO ++;
        } 
        else if(topicData[i].topic == 'GMK'){
            talliedTopic.GMK ++;
        }
        else if(topicData[i].topic == 'Federal Law'){
            talliedTopic.FedLaw ++;
        }
        else {
            talliedTopic.Ethics ++;
        }
    }

    let talliedTopicArray = Object.values(talliedTopic);


    useEffect(() => {
        fetchReviewItems();
    }, [refresh]);
    
    async function fetchReviewItems() {
        const { data } = await axios.get('/api/revObjs');
        setTopicData(data);
    };

    let chartData = {
        labels: ['USC', 'MLO', 'GMK', 'Federal Law', 'Ethics'],
        datasets: [{
            data: talliedTopicArray,
            backgroundColor: ['red', 'blue', 'green', 'orange', 'purple']
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


export default TopicChart;