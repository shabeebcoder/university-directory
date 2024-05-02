import React from 'react'
import { useNavigate } from 'react-router-dom';

function List({ deleteItem, item, index }: any) {
    const navigate = useNavigate()
    return (
        <article role='list' className={`listBox ${item?.fadeOut ? 'fade-out' : ''}`}>
            <div className='top'>
                <span>United Arab Emirates</span>
                <i role='tooltip' onClick={() => deleteItem(index)} className="fas fa-trash delete-icon"></i>
            </div>

            <h2>{item?.name || ''}</h2>
            <a href=''>https://mbzuai.ac.ae/</a>
            <div className='footer'>
                <button onClick={() => navigate(`details/${index}`)}> view details</button>
            </div>
        </article>
    )
}

export default List