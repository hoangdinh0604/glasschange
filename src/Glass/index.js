import React, { Component } from 'react'


export default class Glass extends Component {
  constructor(props){
    super(props);

    this.state={
      urlImg : "./img/v1.png"
    }
  }
  handleChangeUrlImg =(urlImg)=>{
    console.log(urlImg);
    this.setState({
      urlImg:urlImg
    })
  }
  render() {
    return (
      <div >
        <div className="bg-img"></div>
        <div className="text-center header"> 
        <h1>TRY GLASSES APP ONLINE</h1>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-md-6">
            <div className="model_content">
            <img className="img-fluid model_img" src="./img/model.jpg" alt=""/>
            <img className="img-fluid glass_img" src={this.state.urlImg} alt=""/>
            </div>
          </div>
          <div className="col-md-6">
          <img className="img-fluid model_img" src="./img/model.jpg" alt=""/>
          </div>
        </div>
      
      </div>
      <button className="btn btn-success" onClick={()=>this.handleChangeUrlImg("./img/v1.png")}>G1
      <img className="img-fluid model_img" src="./img/g1.jpg" alt="" border="0"/>
      </button>
      <button className="btn btn-success" onClick={()=>this.handleChangeUrlImg("./img/v2.png")}>G1
      <img className="img-fluid model_img" src="./img/g1.jpg" alt="" border="0"/>
      </button><button className="btn btn-success" onClick={()=>this.handleChangeUrlImg("./img/v3.png")}>G1
      <img className="img-fluid model_img" src="./img/g1.jpg" alt="" border="0"/>
      </button><button className="btn btn-success" onClick={()=>this.handleChangeUrlImg("./img/v4.png")}>G1
      <img className="img-fluid model_img" src="./img/g1.jpg" alt="" border="0"/>
      </button><button className="btn btn-success" onClick={()=>this.handleChangeUrlImg("./img/v5.png")}>G1
      <img className="img-fluid model_img" src="./img/g1.jpg" alt="" border="0"/>
      </button><button className="btn btn-success" onClick={()=>this.handleChangeUrlImg("./img/v6.png")}>G1
      <img className="img-fluid model_img" src="./img/g1.jpg" alt="" border="0"/>
      </button><button className="btn btn-success" onClick={()=>this.handleChangeUrlImg("./img/v7.png")}>G1
      <img className="img-fluid model_img" src="./img/g1.jpg" alt="" border="0"/>
      </button><button className="btn btn-success" onClick={()=>this.handleChangeUrlImg("./img/v8.png")}>G1
      <img className="img-fluid model_img" src="./img/g1.jpg" alt="" border="0"/>
      </button>
      <button className="btn btn-success" onClick={()=>this.handleChangeUrlImg("./img/v9.png")}>G1
      <img className="img-fluid model_img" src="./img/g1.jpg" alt="" border="0"/>
      </button>
      </div>
    )
  }
}
