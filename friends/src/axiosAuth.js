import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    console.log('axiosAuth for toke from storage: ')
    console.log(token);

    // added this in to make it work, wasn't in TK
    axios.defaults.headers.common['Authorization'] = token;

    return axios.create({
        header: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    })
}