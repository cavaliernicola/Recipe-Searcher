import { Skeleton } from '@mui/material';
import "../Loading.scss";

export default function LoadingCard({ number }) {
  return (
    <>
      <div className='cards-container'>
        {Array(number).fill(0).map((item, index) => 
          <div key={index}>
            <Skeleton height={200} />
            <Skeleton width={200} style={{ marginTop: "5px"}}/>
          </div>
        )}
      </div>
    </>
  )
}