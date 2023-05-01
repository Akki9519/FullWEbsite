import axios from 'axios';

const url='http://localhost:8000/api/post';

export const submitUser=(post)=>{
    console.log("Data Recieved",post);
    return axios.post(url,post);
}

