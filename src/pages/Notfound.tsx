import React from 'react'
import Header from '../components/Header'
function Notfound() {
  return (
    <div>
      <Header />
      <section className='notFoundSection'>
        <div className="container">
          <h3 className='text'>Oops !, The page you are looking for not found !</h3>
        </div>
      </section>
    </div>
  )
}

export default Notfound