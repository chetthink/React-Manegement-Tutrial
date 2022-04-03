import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

const customers = [
  {
  'id' : '1',
  'image' : 'https://placeimg.com/64/64/any/1',
  'name' : '고찬우',
  'birthday':'961018',
  'gender' : '남자',
  'job': '대학생'
},
{
  'id' : '2',
  'image' : 'https://placeimg.com/64/64/any/2',
  'name' : '조현아',
  'birthday':'960522',
  'gender' : '여자',
  'job': '치위생사'
},
{
  'id' : '3',
  'image' : 'https://placeimg.com/64/64/any/3',
  'name' : '케이크',
  'birthday':'unknown',
  'gender' : '무생물',
  'job': '디저트'
}
]
class App extends Component {
  render(){
    return(
      <div>
       {
         customers.map(c => {
           return (
             <Customer
             key={c.id}
             id={c.id}
             image={c.image}
             name={c.name}
             birthday={c.birthday}
             gender={c.gender}
             job={c.job}
           />
             );
         })
       }
      </div>
    );
  }
}
export default App;
