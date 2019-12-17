import React, { useEffect, useState} from 'react';
import {axiosWithAuth} from '../axiosAuth';

export default () => {
    const [friendList, setFriendList] = useState([]);
    const [newFriend, setNewFriend] = useState({
        id: 1,
        name: 'Joe',
        age: 24,
        email: 'joe@lambdaschool.com',
    });

    useEffect(() => {
        getFriendList();
    },[])

    const getFriendList = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res);
            setFriendList(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value,
            id: friendList.length + 1
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        axiosWithAuth()
        .post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            console.log(res);
            getFriendList();
        })
        .catch(error => {
            console.log(error);
        })
    }

    const deleteFriend = (id) => {
        axiosWithAuth()
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => {
            console.log(res);
            getFriendList();
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <div className='friendsList'>
            <ul>
            { 
                friendList.map(friend => (
                    <li key={friend.id}>{friend.id} - {friend.name} - {friend.age} - {friend.email} - 
                        - <button onClick={() => deleteFriend(friend.id)}>X</button>
                    </li>
                ))

            }
            </ul>
            <form onSubmit={onSubmit} className='friendForm'>
                <input name='name' placeholder='new friend name' onChange={handleChange}/>
                <input name='age' type='number' placeholder='age' onChange={handleChange}/>
                <input name='email' type='email' placeholder='email' onChange={handleChange}/>

                <button type='submit'>Add</button>
            </form>
        </div>
    )
}