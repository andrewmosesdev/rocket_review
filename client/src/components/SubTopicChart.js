import React from 'react';
import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const SubTopicChart = (props) => {
    const [subTopicData, setSubTopicData] = useState([]);
    const [refresh, toggleRefresh] = useState(0);
    console.log(subTopicData)

    let talliedSubTopic = {
        history: 0,
        whosWho: 0,
        mloTimeline: 0,
        agencies: 0,
        yourLicense: 0,
        respa: 0,
        products: 0,
        mortgageMath1: 0,
        programs: 0,
        ecoa: 0,
        consumerContactLaws: 0,
        borrowerEthicsAndFraud: 0,
        industryFraud: 0,
        industryEthics: 0,
        insurances: 0,
        thirdPartyServices: 0,
        mortgageMath2: 0,
        tila: 0,
        fairnessLaws: 0,
        financialCrimesLaws: 0,
        disclosuresAndDocuments: 0,
        closing: 0,
        remittanceAndOwnership: 0,
        repayment: 0,
        trid: 0,
        vocab: 0,
        temporaryAuthority: 0
    };

    for(let i = 0; i < subTopicData.length; i++){
        if(subTopicData[i].subTopic == 'History'){
            talliedSubTopic.history ++;
        } 
        else if(subTopicData[i].subTopic == "Whos Who"){
            talliedSubTopic.whosWho ++;
        } 
        else if(subTopicData[i].subTopic == 'MLO Timeline'){
            talliedSubTopic.mloTimeline ++;
        }
        else if(subTopicData[i].subTopic == 'Agencies'){
            talliedSubTopic.agencies ++;
        }
        else if(subTopicData[i].subTopic == 'Your License'){
            talliedSubTopic.yourLicense ++;
        }
        else if(subTopicData[i].subTopic == 'RESPA'){
            talliedSubTopic.respa ++;
        }
        else if(subTopicData[i].subTopic == 'Products'){
            talliedSubTopic.products ++;
        }
        else if(subTopicData[i].subTopic == 'Mortgage Math 1'){
            talliedSubTopic.mortgageMath1 ++;
        }
        else if(subTopicData[i].subTopic == 'Programs'){
            talliedSubTopic.programs ++;
        }
        else if(subTopicData[i].subTopic == 'ECOA'){
            talliedSubTopic.ecoa ++;
        }
        else if(subTopicData[i].subTopic == 'Consumer Contact Laws'){
            talliedSubTopic.consumerContactLaws ++;
        }
        else if(subTopicData[i].subTopic == 'Borrower Ethics and Fraud'){
            talliedSubTopic.borrowerEthicsAndFraud ++;
        }
        else if(subTopicData[i].subTopic == 'Industry Fraud'){
            talliedSubTopic.industryFraud ++;
        }
        else if(subTopicData[i].subTopic == 'Industry Ethics'){
            talliedSubTopic.industryEthics ++;
        }
        else if(subTopicData[i].subTopic == 'Insurances'){
            talliedSubTopic.insurances ++;
        }
        else if(subTopicData[i].subTopic == 'Third Party Services'){
            talliedSubTopic.thirdPartyServices ++;
        }
        else if(subTopicData[i].subTopic == 'Mortgage Math 2'){
            talliedSubTopic.mortgageMath2 ++;
        }
        else if(subTopicData[i].subTopic == 'TILA'){
            talliedSubTopic.tila ++;
        }
        else if(subTopicData[i].subTopic == 'Fairness Laws'){
            talliedSubTopic.fairnessLaws ++;
        }
        else if(subTopicData[i].subTopic == 'Financial Crimes Laws'){
            talliedSubTopic.financialCrimesLaws ++;
        }
        else if(subTopicData[i].subTopic == 'Disclosures and Documents'){
            talliedSubTopic.disclosuresAndDocuments ++;
        }
        else if(subTopicData[i].subTopic == 'Closing'){
            talliedSubTopic.closing ++;
        }
        else if(subTopicData[i].subTopic == 'Remittance and Ownership'){
            talliedSubTopic.remittanceAndOwnership ++;
        }
        else if(subTopicData[i].subTopic == 'Repayment'){
            talliedSubTopic.repayment ++;
        }
        else if(subTopicData[i].subTopic == 'TRID'){
            talliedSubTopic.trid ++;
        }
        else if(subTopicData[i].subTopic == 'Vocab'){
            talliedSubTopic.vocab ++;
        }
        else if(subTopicData[i].subTopic == 'Temporary Authority'){
            talliedSubTopic.temporaryAuthority ++;
        }
    }
    console.log(talliedSubTopic)

    let talliedSubTopicArray = Object.values(talliedSubTopic);

    useEffect(() => {
        fetchReviewItems();
    }, [refresh]);
    
    async function fetchReviewItems() {
        const { data } = await axios.get('/api/revObjs');
        setSubTopicData(data);
    };

    let chartData = {
        labels: ['History', 'Whos Who', 'MLO Timeline', 'Agencies', 'Your License', 'RESPA', 'Products', 'Mortgage Math 1', 'Programs', 'ECOA', 'Consumer Contact Laws', 'Borrower Ethics and Fraud', 'Industry Fraud', 'Industry Ethics', 'Insurances', 'Third Party Services', 'Mortgage Math 2', 'TILA', 'Fairness Laws', 'Financial Crimes Laws', 'Disclosures and Documents', 'Closing', 'Remittance and Ownership', 'Repayment', 'TRID', 'Vocab', 'Temporary Authority'],
        datasets: [{
            data: talliedSubTopicArray,
            backgroundColor: ['orange', '#F1E4F3', '#F4BBD3', '#1A1423', '#3D314A', '#684756', '#96705B', '#001514', '#6B0504', '#A3320B', '#E6AF2E', '#C4B2BC', '#A29587', '#846C5B', '#332E3C', '#94B9AF', '#942911', '#FE4E00', '#89043D', '#2FE6DE', '#1C3041', '#78C0E0', '#150578', '#3943B7', '#88527F', '#614344', 'green']
        }]
    }

    return (

        <div>
            <Pie
                data={{
                    labels: chartData.labels,
                    datasets: chartData.datasets,
                    
                }}
            />
        </div>
    )


}


export default SubTopicChart;