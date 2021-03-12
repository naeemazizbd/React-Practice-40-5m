import React from 'react';
import { ThumbDown, ThumbUp } from '@material-ui/icons';
import { useState } from 'react';
const LikeCode = () => {
    const [likeColor, setLikeColor]=useState('')
    
    const handleLike=()=>{
    //   const color=likeColor? '': 'primary'
      setLikeColor(likeColor? '': 'primary');
     
    }
    return (
        <div>
             <ThumbUp onClick={handleLike} color={likeColor} fontSize="large" />
      <ThumbDown  />
     
            
        </div>
    );
};

export default LikeCode;