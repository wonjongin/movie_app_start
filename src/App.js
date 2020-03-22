import React from 'react';

function Food({name,image}){
  return(
    <div>
    <h3>I like {name}</h3>
    <img src={image} alt="picture"/>
    </div>
  )
}

const foodILike = [{
  name:"kimchi",
  image:"https://w.namu.la/s/2958e0d7304f1b744021983c55747de2840e0e59a1f3d677d9315f5bad981f002769ce59921aea02b2dd23b5384a0ce30864fe6d84ea1b9aaed80fb3b5f60b6dfe4fde0e14c56c032066cd4bf4af3c48535f04f6f443b7bd7edfcbb0c56fbf006ff5cba35a6389ad70a455ef886ce5a5"
},
{
  name:"chicken",
  image:"https://w.namu.la/s/0757e0521734bb19004e9c35b3d64e26509edd9480b184cdc591364f7d336c01294622cc7c3ec3a1cf95caf9d177e1abb2039b315958a3989b168e637497fb54d57887e3f79907ffa7c75f056d0053dae9c9295f1052ae091aca4a33522b01c2401046c2e7a6b00358837ef4ed25fbc3"
},
{
  name:"kimbap",
  image:"https://ww.namu.la/s/33c9509d550db600898d73c2583211037408f060b2d4f8748fb39d34c8159a2e9867520fb83885e0dbe2ab3884f98c12ed4d9892ea11f54802ab2915170378815b3017c84b4c62fd25ce44b02cc24531db5f2cd4711f514632e34c4c214d8e97"
}];

function App() {
  return (
    <div className="App">
      <h1>hello!!!</h1>
      
      {foodILike.map(dish => (<Food name={dish.name} image={dish.image}/> ))}
    </div>
  );
}

export default App;
