import {createContext, useEffect, useState} from 'react';

const UserInfoContext = createContext();

export function UserInfoProvider({children}){
    const [userId, setUserId] = useState(null);

    const getUserId = async () => {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://api.spotify.com/v1/me`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });
        const data = await response.json();
        setUserId(data.id);
    }

    useEffect(() =>{
        console.log(userId);
    },[userId])

    return(
        <UserInfoContext.Provider value={{userId, getUserId}}>
            {children}
        </UserInfoContext.Provider>
    )
}

export default UserInfoContext;
