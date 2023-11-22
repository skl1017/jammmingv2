import {useEffect, useState, useMemo, useContext} from 'react';
import Navbar from './Navbar';
import YourStats from './YourStats';



function Main() {

    
    const [currentTab, setCurrentTab] = useState('stats');
    

    

   

    return(
        <article className='main-grid gap-y-3.5'>
            
            <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab}/>

            {currentTab === 'stats' ? (
                <section>
                    <YourStats/>
                </section>
            ) : (
                <section>
                
                </section>
            )}
               
        
            

        </article>
    )


}

export default Main;