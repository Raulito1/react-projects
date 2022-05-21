import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
const App = () => {
   return (
      <div className='ui container comments'>
         <div className='comment'>
            <a href='/' className='avatar'>
               <img alt='avatar' src={faker.image.image()} />
            </a>
            <div className='content'>
               <a href='/' className='author'>
                  Sam
               </a>
               <div className='metadata'>
                  <span className='date'>today @ 6pm</span>
               </div>
               <div className='text'>Nice blog Post!</div>
            </div>
         </div>
      </div>
   )
};

ReactDOM.render(<App />, document.querySelector('#root'));
