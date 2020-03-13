import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';


// class WhoAmI extends Component {
//     constructor(props) {
//         super(props); 
//         this.state = {
//             years: 26
//         } 
//         this.nextYear = this.nextYear.bind(this);
//     }
//     nextYear() {
//         // console.log(1);
//         this.setState( state => ({
//             years: ++state.years
//         }))
//     }
//     render() {
//         const {name, surname, link} = this.props;
//         const {years} = this.state;
//         return (
//             <>
//                 <button
//                 onClick={this.nextYear}>
//                 ++</button>
//                 <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//                 <a href={link}>Profile</a>
//             </>
//         )    
//     }
// }
             
// const All = () => {
//     return (
//         <>  
//         <WhoAmI name="Igor" surname="Volkov"  link="facebook.com" />
//         <WhoAmI name="Mike" surname="Volkov"  link="vk.com" />
//         <WhoAmI name="Jakw" surname="Volkov"  link="inst.com" />
//         </>
//     )
// }

 
ReactDOM.render(<App />, document.getElementById('root'));

