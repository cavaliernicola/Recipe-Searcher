import { Skeleton } from '@mui/material';
import "../Loading.scss";

export default function LoadingDetails() {
  return (
    <div>
      {/* Card */}
      <Skeleton width={300} height={40} style={{ margin: "0 auto", marginTop: "20px"}}/>

      <div className='card-container'>
        <Skeleton className="card" height={300} width={600} style={{ borderRadius: "20px"}} />
      </div>

      {/* Description */}
      <Skeleton  height={50} style={{ margin: "0px 20px", background: "rgba(239,247,230,1)"}} /> 
      <Skeleton height={200} style={{ margin: "20px"}} />

      {/* Ingredients */}
      <Skeleton height={50} style={{ margin: "20px", background: "rgba(239,247,230,1)" }}/>
      <div className="ingredients-list">
        {Array(8).fill(0).map((item, index) => (
          <div key={index} className='ingredient-container'>
            <Skeleton className='ingredient-card' height={150}/>
          </div>
        ))}
      </div>
      
      {/* Instructions */}
      <Skeleton height={50} style={{ margin: "20px", background: "rgba(239,247,230,1)"}}/>
      <div className="instructions-list">
        {Array(8).fill(0).map((item, index) => (
          <div key={index} className='instruction-container'>
            <Skeleton width={500} height={40} style={{ margin: "2px"}}/>
          </div>
        ))}
      </div>
    </div>
  )
}