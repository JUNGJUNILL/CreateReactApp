import React, { Component } from 'react';


class PhoneInfo extends Component {


    static defaultProps = {
        info: {
          name: '이름',
          phone: '010-0000-0000',
          id: 0
        }
      }

      state = {

        editing: false, 
        name:'',
        phone:'',


      }
    handleRemove = () =>{

        const {info,onRemove} = this.props; 
        onRemove(info.id); 

    }

    handleToggleEdit = ()=>{
        const {editing} = this.state; 
        this.setState({editing:!editing}); 
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      }

    componentDidUpdate(prevProps, prevState) {
              //최초 렌더링에서는 호출되지 않는다. 
        //갱신이 일어난 직후에 호출된다. 

        // 여기서는, editing 값이 바뀔 때 처리 할 로직이 적혀있습니다.
        // 수정을 눌렀을땐, 기존의 값이 input에 나타나고,
        // 수정을 적용할땐, input 의 값들을 부모한테 전달해줍니다.
    
        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing) {
            console.log('01-prevState.editing=',prevState.editing,":",'this.state.editing=',this.state.editing)
 
          // editing 값이 false -> true 로 전환 될 때(즉, 수정 버튼 눌렀을 때)
          // info 의 값을 state 에 넣어준다
          this.setState({
            name: info.name,
            phone: info.phone
          })
        }
    
        if (prevState.editing && !this.state.editing) {
            console.log('02-prevState.editing=',prevState.editing,":",'this.state.editing=',this.state.editing)
 
          // editing 값이 true -> false 로 전환 될 때
          onUpdate(info.id, {
            name: this.state.name,
            phone: this.state.phone
          });
        }
      }







render(){
    const style = {
        border: '1px solid blue',
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
        )
      }




    const {
        name, phone
      } = this.props.info;
      
      return (

        <div style={style}>
            <div>{name}</div>
            <div>{phone}</div>
            <button onClick={this.handleToggleEdit}>수정</button>
            <button onClick={this.handleRemove}>삭제</button>
        </div>
      );
}


}


export default PhoneInfo;