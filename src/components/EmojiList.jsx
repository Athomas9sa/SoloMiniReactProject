import React from 'react';
import EmojiList from './components/EmojiList';
import './SatckOfCards.css';

const EmojiList = props => {
  const { userData } = props;
  return (
    <ul className="FaceCards">
      {userData.length > 0 ? ( //turnarywiththreepartsmappingthroughdata
        userData.map((user, index) => (
          <li className="FaceCards" key={index}>
            <FaceCards userData={user} />
          </li>
        ))
      ) : (
        <li>No User Data</li> //ifstatemantisnottruethenturnarywillgivethisresult
      )}
    </ul>
  );
};

export default EmojiList;