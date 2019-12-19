import React, { Component } from 'react';

class PhonebookInput extends Component {


    state = {
        name:'',
        phone:'',
        keyword:'',
    }

    handleChange= (e) =>{
        this.setState({
            keyword:e.target.value, 
        });
    }

    render(){

        return(
            <p>
            <input 
                placeholder="검색 할 이름을 입력하세요..."
                onChange={this.handleChange}
                value={this.state.keyword}
            />
        </p>
        );

    }

}

export default PhonebookInput;