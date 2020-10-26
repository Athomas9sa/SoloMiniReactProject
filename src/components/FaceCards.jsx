import React from 'react'; 


const FaceCards = props => {
  const { userData } = props;
  return ( 
    <div>
      {userData}
    </div>
  );
};

export default FaceCards;
