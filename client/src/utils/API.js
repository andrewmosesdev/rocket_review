import axios from 'axios';

const API = {
    // Gets all tasks
    getRevObjs: function () {
        return axios.get('/api/revObjs');
    },
    // Gets the task with the given id
    getRevObj: function (id) {
        return axios.get('/api/revObjs/' + id);
    },
    // Deletes the task with the given id
    deleteRevObj: function (id) {
        return axios.delete('/api/revObjs/' + id);
    },
    // Saves a task to the database
    saveRevObj: function (revObjData) {
        return axios.post('/api/revObjs', revObjData);
    },
    // Changes the flagged status with the given id
    changeFlagged: function (id, flaggedStatus) {
        return axios.patch('/api/revObjs/' + id, { isFlagged: flaggedStatus });
    },
    getTopics: function () {
        return axios.get('/api/topics');
    },
    getSubTopics: function () {
        return axios.get('/api/subTopics')
    }
};

export default API;

