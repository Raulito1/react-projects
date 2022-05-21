import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './components/CommentDetail';
const App = () => {
   return (
      <div className='ui container comments'>
         <CommentDetail author='Raul' timeStamp='Fri May 20, 6:00 pm' content='Coming HOME Judy!! 🙄' />
         <CommentDetail author='Emmitt' timeStamp='Fri May 20, 6:05pm' content='😤🤭' />
         <CommentDetail author='Hannah' timeStamp='Fri May 20 6:08pm' content='Im ready to Go Home!! 😫' />
      </div>
   )
};

ReactDOM.render(<App />, document.querySelector('#root'));
