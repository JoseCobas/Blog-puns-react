import React, {useState, useEffect} from 'react'
import PunList from './PunList'

function ManagePuns() {
    const [puns,setPuns] = useState([]);

    useEffect(() => {
        fetchPuns();
    }, [])// Second arg as empty array means run only once on load, equal to ComponenDidMount

    const fetchPuns = async () => {
        try {
            const response = await fetch ('https://puns-app.herokuapp.com/puns');
            if(!response.ok){
                throw new Error('HTTP Error! status:' + response.status);
            }
            const data = await response.json();
            setPuns(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    const deletePun = async (punId) => {
        try{
            await fetch('https://puns-app.herokuapp.com/puns/' + punId, {
                method:'DELETE', // GET, POST, PATCH, DELETE
            });            
        } catch(message){
            throw new Error(message);
        }
        fetchPuns();
    }

  return (
    <div>
      <h1>Manage Puns</h1>
      <PunList 
        puns={puns}
        deletePun={deletePun}
      />
    </div>
  )
}

export default ManagePuns
