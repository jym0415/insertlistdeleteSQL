import React, { Component } from 'react';
import axios from 'axios';

class Classcomponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            mytext : '아직디비안와서...',
            mytextjson : ''
        }
    }
    componentDidMount = async () => {
        const gettext = await axios.get('/getsend')
        const getjons = await axios.get('/getsend/getjson')

        this.setState({ mytext : gettext.data })        
        this.setState({ mytextjson : getjons.data.url })
    }
    render() {
        return (
            <div>
              <h3>나는 클래스형컴포넌트</h3>
              <p>componentDidMount 함수에 의해 해당컴포넌트가 새로고침이 되는 거지</p>
              <p>data가 그저 텍스트임 : {this.state.mytext}</p>
              <p>json포멧으로 왔기때문에 key까지 들어가야지만 값을 얻는다.: {this.state.mytextjson}</p>
            </div>
        );
    }
}

export default Classcomponent;