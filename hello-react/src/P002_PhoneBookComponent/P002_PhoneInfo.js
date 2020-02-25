import React, { Component } from 'react';


class PhoneInfo extends Component {
  
  static defaultProps ={
    info : {
      name : '이름',
      phone : '010-2333-1234',
      id: 0, 
    }
  }

  state = {

    editing : false, 
    name    : '',
    phone   : '',
  }



  handleRemove = () =>{
    const {info , onRemove} = this.props; 
    onRemove(info.id); 
  }

  handleToggleEdit = () =>{
    const {editing} =this.state; 
    this.setState({editing: !editing})
  }

  handleChange = (e) => {
  
    const {name,value} = e.target;
    this.setState({
      [name] : value 
    }); 

  }
  //최초 렌더링에서는 호출되지 않는다. 
  //갱신이 일어난 직후에 호출된다.

  //컴포넌트 자신의 render 함수에서 에러가 발생해버리는 것은 잡아낼 수는 없지만
  //그 대신에 자식 컴포넌트 내부에서 발생하는 에러들을 잡아낼 수 있다. 
  
  //prevState.editing 새롭게 마운트 되기 전 데이터 
  componentDidUpdate(preveProps,prevState){
    console.log('prevState.editing = ',prevState.editing, " : ",'this.state.editing = ',this.state.editing); 
    const {info, onUpdate} = this.props;

    //수정 버튼을 눌렀을 때, 
    if(!prevState.editing && this.state.editing){
      this.setState({
        name:info.name,
        phone:info.phone,
      });
    }

    //적용 버튼 눌렀을 때, 
    if(prevState.editing && !this.state.editing){
        onUpdate(info.id,{
          name:this.state.name,
          phone:this.state.phone,
        });
    }
  }

    //갱신이 일어나면 실행된다. 
    //default true반환 
    //false render() X , true render() O
  shouldComponentUpdate(nextProps, nextState) {
      console.log(this.state.editing, " : ", nextState.editing); 
                  //false                     //true 
    if(!this.state.editing
        && !nextState.editing
        && nextProps.info === this.props.info
      ){
        return false; 
      }
      
      return true; 
  }


  render(){
    console.log('render PhoneInfo ' + this.props.info.id);
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };  

    const {editing} = this.state; 

    if(editing){

        return (
          <div style={style}>
            <div>
              <input 
                  value={this.state.name}
                  name="name"
                  placeholder="이름"
                  onChange={this.handleChange}
              />
            </div>
            <div>
              <input 
                    value={this.state.phone}
                    name="phone"
                    placeholder="전화번호"
                    onChange={this.handleChange}
                />
            </div>
            <button onClick={this.handleToggleEdit}>적용</button>
            <button onClick={this.handleRemove}>삭제</button>
          </div>
        );
    }


        // 일반모드
        const {
          name, phone
        } = this.props.info;
        
        return (
          <div style={style}>
            <div><b>{name}</b></div>
            <div>{phone}</div>
            <button onClick={this.handleToggleEdit}>수정</button>
            <button onClick={this.handleRemove}>삭제</button>
          </div>
        );
  }
}

export default PhoneInfo;