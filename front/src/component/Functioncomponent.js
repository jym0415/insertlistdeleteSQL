import axios from 'axios'
import React, {useEffect, useState} from 'react'

function Functioncomponent() {
    const [ mytext , mytextUpdate ] = useState('아직 디비안와서 내가 지키고있음')

    useEffect( async ()=>{
        await axios.post('/getsend/post',{})
        .then( res => {
            mytextUpdate(res.data.title)
            }
        )        
    }, [] )
    

  return (
    <div>post는 axios.post로 응답받아야만해 : { mytext }</div>
  )
}

export default Functioncomponent