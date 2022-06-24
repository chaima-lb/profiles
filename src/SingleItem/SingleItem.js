import React from 'react'
import './/SingleItem.css'

const SingleItem = ({el}) => {
    console.log(el)
    return (
     <div className='cards'>
  <li>
    <a href=" " className='card'>
      <img src="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=2000" class="card__image" alt="" />
      <div className='card__overlay'>
        <div className='card__header'>
          <svg className='card__arc' xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className='card__thumb' src="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=2000" alt="" />
          <div className='card__header-text'>
        <h3 className='name'>Name : {el.name}</h3>            
            <span className='card__status'>1 hour ago</span>
          </div>
        </div>
        <p className='card__description'>Address : {el.address.city}</p> 
            <p className='card__description'>phone : {el.phone}</p> 
            <p className='card__description'>email : {el.email}</p>
            <p className='card__description'>website : {el.website}</p>



      </div>
    </a>      
  </li>
</div>
    )
}

export default SingleItem
