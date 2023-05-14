import { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';

import { useGlobalContext } from '../../context/GlobalContext';
import "./Card.scss";
import placeholder from "../../assets/img/no-image-placeholder-2.png";
import { useNavigate } from 'react-router-dom';

export default function Card({image, id, title, servings, readyInMinutes, item, isDetailed = false}) {
  const { checkIsFavorite, handleFavorite } = useGlobalContext()
  const [showInfo, setShowInfo] = useState(false);
  const [isFavorite, setIsFavorite] = useState(checkIsFavorite(id));
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => {navigate(`../recipe/${id}`)}}> 
      <div className="content-container" style={{ backgroundImage: image ? `url(${image})` : `url(${placeholder})` }}>
        
        {showInfo || isDetailed ? (
          <div className="extended-info-container" onClick={(e) => {
            e.stopPropagation();
            setShowInfo(false)
          }}>
            <div className="cooking-info">
              <h4 className="title">{readyInMinutes}m</h4>
              <AccessAlarmOutlinedIcon className='icon'/>
            </div>
            <div className="serving-info">
              <h3 className="title">{servings}</h3>
              <RestaurantOutlinedIcon className='icon'/>
            </div>
          </div>
        ) : (
          <div className="info-container">
            <Tooltip enterDelay={500} leaveDelay={200} title="Show Info" >
              <IconButton onClick={(e) => {
                e.stopPropagation();
                setShowInfo(true)
              }}>
                <InfoOutlinedIcon className="icon" />
              </IconButton>
            </Tooltip>
          </div>
        )}

        <div className="favorite-container">
          <Tooltip enterDelay={500} leaveDelay={200} title={isFavorite ? "Remove From Favorite" : "Add to Favorite"} >
            <IconButton onClick={(e) => {
              e.stopPropagation();   
              setIsFavorite(prevFav => !prevFav);
              handleFavorite(item)
            }}>
              <FavoriteIcon className={"icon " + (isFavorite ? "selected" : "")} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      {!isDetailed && <p className='card-title'>{title}</p> }
    </div>
  )
}