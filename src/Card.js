import React from 'react';

// class Card extends Component {
//     render() {
//       return (
//         <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img alt='robots' src='https://robohash.org/jane?200x200' />
//             <div>
//                 <h2>Jane Doe</h2>
//                 <p>jane.doe@gmail.com</p>
//             </div>
//         </div>
//       );
//     }
//   }

  const Card = ({ name, email, id }) => {
      return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
      )
  }

  export default Card;