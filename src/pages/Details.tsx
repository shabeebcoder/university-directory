import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';


function Details({items}:any) {

    const { itemId }:any = useParams();

    const item = items[itemId]


    return (
        <div className="App">
            <Header />
            <main>

                <section role='banner' className='searchSection'>
                    <div className="container">

                        <div className="searchContainer">
                            <h1>{item?.name || ''}</h1>
                            <br/>
                            <h4>{item?.country}</h4>
                            <br/>
                            <p>{item?.web_pages[0]}</p>
                        </div>
                    </div>
                </section>
                <section className="main container">
                    <section className='mainContainer'>
 

                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur tempore assumenda odio beatae fugiat, neque commodi tempora, consequatur necessitatibus quia eius. Ea pariatur culpa labore, quam sed enim at odit!
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi reprehenderit ut molestias maxime odit aspernatur dolor sunt architecto aliquam repudiandae rem sed dicta, iusto doloremque. At porro corrupti unde!
                    </section>
                </section>
            </main>



        </div>
    );
}

export default Details;
