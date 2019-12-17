import React, { Component } from 'react';


class PhoneInfo extends Component {


    static defaultProps = {
        info: {
          name: '이름',
          phone: '010-0000-0000',
          id: 0
        }
      }


render(){
    const style = {
        border: '1px solid blue',
        padding: '8px',
        margin: '8px'
      };


    const {
        id, name, phone
      } = this.props.info;
      
      return (

        <div style={style}>
            <div>{name}</div>
            <div>{phone}</div>
        </div>
      );
}


}


export default PhoneInfo;