import React from 'react';
import './App.css';
export default class App extends React.Component {
constructor(){
  super();
  this.state={
    data:false
  }
}
componentDidMount()
{
  let url = "https://reqres.in/api/users?page=1"
  let url2 = "https://reqres.in/api/users?page=2"
  Promise.all(
    [
    fetch(url,{ 
    method:'GET',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    }
    }),
    fetch(url2,{ 
    method:'GET',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    }
    })]).then(([result, result2])=>
  {
    result.json().then((resp)=>{
      this.setState({data:resp})
    });
    result2.json().then((resp2)=>{
      this.setState({data2:resp2})
    });
  })
}
render(){
  const data=this.state.data;
  const data2=this.state.data2;

  console.warn(data);

    return(
      <div>
      <div>
        {
          data ?
          <div>
            <h1>  
            Name:{data.data[0].first_name} {data.data[0].last_name} 
            </h1>
            <p> 
            Email:{data.data[0].email} 
              <img src={data.data[0].avatar}/>
            </p>
            <h1>
            Name:{data.data[1].first_name} {data.data[1].last_name} </h1>
            <p>
            Email:{data.data[1].email} 
            </p>
             <p>
              <img src={data.data[1].avatar}/>
            </p>
            <h1>
              Name:{data.data[2].first_name} {data.data[2].last_name} </h1>
              <p>
              Email:{data.data[2].email} 
              </p>
               <p>
                <img src={data.data[2].avatar}/>
              </p>
              <h1>
              Name:{data.data[3].first_name} {data.data[3].last_name} </h1>
              <p>
              Email:{data.data[3].email} 
              </p>
               <p>
                <img src={data.data[3].avatar}/>
              </p>
              <h1>
              Name:{data.data[4].first_name} {data.data[4].last_name} </h1>
              <p>
              Email:{data.data[4].email} 
              </p>
               <p>
                <img src={data.data[4].avatar}/>
              </p>
              <h1>
              Name:{data.data[5].first_name} {data.data[5].last_name} </h1>
              <p>
              Email:{data.data[5].email} 
              </p>
               <p>
                <img src={data.data[5].avatar}/>
              </p>
            </div>

            :<p>Loading....
             </p>   
        }
      </div>
      <div>
        {
          data2 ?
          <div>
                          <h1>
            Name:{data2.data[0].first_name} {data2.data[0].last_name} 
            </h1>
            <p>
            Email:{data2.data[0].email} 
              <img src={data2.data[0].avatar}/>
            </p>
            <h1>  
            Name:{data2.data[1].first_name} {data2.data[1].last_name} 
            </h1>
            <p>
            Email:{data2.data[1].email} 
              <img src={data2.data[1].avatar}/>
            </p>
            <h1>  
            Name:{data2.data[2].first_name} {data2.data[2].last_name} 
            </h1>
            <p>
            Email:{data2.data[2].email} 
              <img src={data2.data[2].avatar}/>
            </p>
            <h1>  
            Name:{data2.data[3].first_name} {data2.data[3].last_name} 
            </h1>
            <p>
            Email:{data2.data[3].email} 
              <img src={data2.data[3].avatar}/>
            </p>
            <h1>  
            Name:{data2.data[4].first_name} {data2.data[4].last_name} 
            </h1>
            <p>
            Email:{data2.data[4].email} 
              <img src={data2.data[4].avatar}/>
            </p>
            <h1>  
            Name:{data2.data[5].first_name} {data2.data[5].last_name} 
            </h1>
            <p>
            Email:{data2.data[5].email} 
              <img src={data2.data[5].avatar}/>
            </p>
          </div>
          :<p>Loading....
             </p>  
        }
      </div>
      </div>
      
)
}
}




