import React from 'react';
import './StarDisplay.css'

interface IStarDisplay {
  isLiked: boolean;
  likeCount: number;
  onClick?: () => void;
}

const StarDisplay = ({ isLiked, likeCount, onClick }: IStarDisplay) => {
  return (
    <div className="star-display-wrapper" onClick={onClick} role="button">
      {isLiked ? <div>&#11088;</div> : <div>&#9734;</div>}
      <div>{likeCount}</div>
    </div >
  )
}

export default StarDisplay;