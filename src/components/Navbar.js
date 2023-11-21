import {useEffect, useState} from 'react';

function Navbar(props) {

    const [userInfo, setUserInfo] = useState(null);

    const currentTab = props.currentTab;
    const setCurrentTab = props.setCurrentTab;

    

    useEffect(() =>{

        const token = localStorage.getItem('token');
        const getUserInfo = async () => {
            const response = await fetch(`https://api.spotify.com/v1/me`, {
                method: 'GET',
                headers: { 'Authorization' : 'Bearer ' + token}
            });
            const data = await response.json();
            setUserInfo(data);
            console.log(data)
        }

        getUserInfo();
        

    },[])

    return(

        

        
        
        <aside className='p-5 border-r border-solid border-slate-600 col-span-1 row-span-2'>
            
  {userInfo ? (
    <div className='flex flex-col justify-center items-center gap-5'>

        <div className='flex w-full  justify-center items-center'>
                <a className='font-bold text-white text-4xl text-left leading-normal'>
                ja
                    <span className='text-yellow'>m</span>
                    <span className='text-green'>m</span>
                    <span className='text-blue'>m</span>ing.
                </a>
            </div>

        <figure className='w-7/12'>
            <img className='rounded-full w-full h-full object-contain' src={userInfo.images[1].url} alt=''/>
        </figure>
        <p className=''>Hi, {userInfo.display_name}!</p>

        <nav className='w-11/12 mt-10'>
            <ul className='text-xl text-orange'>
                
                <li className={`${currentTab === 'stats' ? 'orange-bg-light' :  null} p-3 rounded-lg flex justify-left gap-5 items-center`}><span class="material-symbols-outlined">analytics</span><button onClick={()=>{setCurrentTab('stats')}}>Your stats</button></li>
              
                <li className={`${currentTab === 'make-playlist' ? 'orange-bg-light' :  null} p-3 rounded-lg flex justify-left gap-5 items-center`}><span class="material-symbols-outlined">playlist_add</span><button onClick={()=>{setCurrentTab('make-playlist')}}>Make a playlist</button></li>
            
            </ul>
        </nav>
    </div>
  ) : null}

  
</aside>


        
    )
}

export default Navbar;