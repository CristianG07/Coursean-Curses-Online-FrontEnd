import {BsStar, BsStarHalf, BsStarFill} from "react-icons/bs";

export const StarRating = ({rating_star}) => {

  const star = Array.from({ length: 5 }, (_,index) => {
    return (
      <span key={index}>
        {
          rating_star >= index + 1 ? (<BsStarFill />) : rating_star >= index + 0.5 ? (<BsStarHalf />) : (<BsStar />)
        }
      </span>
    )
  })

  return (
    <div className="flex gap-[2px] text-yellow-400">{star}</div>
  )
}