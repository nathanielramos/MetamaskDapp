// import React, { Component } from 'react'
// import FeaturedDapp from './FeaturedDapp';
// import featuredDapps from '../../data/featured-dapps';

// import './index.css';


// export default class FeaturedDappsCarousel extends Component {
//     render(){
//         return (
//             <div className={'featured-dapps'}>
//                 <h2 className={'featured-dapps-title'}>Featured Projects</h2>
//                 <div className={'featured-dapps-carousel-wrapper'}>
//                     <div className={'featured-dapps-carousel'}>
//                         { 
//                             featuredDapps.map( (dapp, position) => (
//                                 <FeaturedDapp 
//                                     data={dapp}
//                                     key={dapp.url}
//                                     position={position}
//                                 />
//                             ))
//                         }
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }