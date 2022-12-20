import React from 'react'
import { AiFillStar} from 'react-icons/ai'
import { useProductContext } from '../context/Context'
import "../index.css"

export default function Filters() {
  const {filterDispatch,rating} = useProductContext()
  let stars = [0,0,0,0,0]
    function handleChange(event){
      filterDispatch({type:"PRICE_SORT",payload:event.target.value})
    }
    function clearFilters(){
      filterDispatch({type:"CLEAR_FILTERS"})

    }
    function handleClick(value){
      filterDispatch({type:"SET_RATING",payload:value})
      filterDispatch({type:"RATING_SORT",payload:value})
    }
  return (
        <div className='product_filters'>
        <div>
          <h3>Filters</h3>
          <div>
            <div>price :</div>
            <div className='input'>
            <input 
              type="radio"
              id = "low-to-high"
              name = "price"
              value = "low-to-high"
              onChange={handleChange}
            />
            <label htmlFor='low-to-high'>Low to High</label>
            </div>
            <div className='input'>
            <input 
              type="radio"
              id = "high-to-low"
              name = "price"
              value = "high-to-low"
              onChange={handleChange}
            />
            <label htmlFor='high-to-low'>High to Low</label>
            </div>
          </div>
          <div>
            {stars.map((_,index) => {
              return <AiFillStar 
              key = {index}
              style={{
                fontSize:"30px"
              }}
              color= {rating > index ? "#FFC300" : "grey"}
              onClick={() => handleClick(index+1)}
              />
            })}
          </div>
          <button onClick={clearFilters}>Clear Filters</button>
        </div>
        </div>
  )
}
