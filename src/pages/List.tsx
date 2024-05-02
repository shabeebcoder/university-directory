import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ListUniversity from '../components/List';


function App({items : data}:any) {

    const [university, setUniversity]: any = React.useState([])

    const [keyword, setKeyword] = React.useState('');

    const navigate = useNavigate()

    const handleInputChange = (event: any) => {
        setKeyword(event.target.value);
    };



    React.useEffect(() => {
        data && setUniversity(data || []);
    }, [data])


    const deleteItem = (index: any) => {

        setUniversity((prevItems: any[]) => prevItems.map((item: any, i: any) => {
            if (i === index) {
                return { ...item, fadeOut: true };
            }
            return item;
        }));


        setTimeout(() => {
            setUniversity((prevItems: any[]) => prevItems.filter((_: any, i: any) => i !== index));
        }, 1000)

    };

    const sortItems = () => {
        const sortedItems = [...university].sort((a, b) => a.name.localeCompare(b.name));
        setUniversity(sortedItems);
    };

    const handleSelect = (e: any) => {
        if (e.target.value === 'sort') {
            sortItems()
        } else if (e.target.value === 'unsort') {
            alert('unsort')
        }
    }

    React.useEffect(() => {
        const filteredData = data.filter((item: any) =>
            item.name.toLowerCase().includes(keyword.toLowerCase())
        );
        setUniversity(filteredData)
    }, [keyword])

    return (
        <div className="App">
            <Header />
            <main>
                <section className='searchSection'>
                    <div className="container">
                        <div className="searchContainer">
                            <input onChange={handleInputChange} type="text" className="search-input" placeholder="Search..." />
                        </div>
                    </div>
                </section>
                <section className="main container">
                    <section className='action'>
                        <label onClick={sortItems}>Sort list</label>&nbsp;
                        <select onChange={handleSelect} name="cars" id="cars">
                            <option value="">select an option</option>
                            <option value="sort">By Alphabets</option>
                        </select>
                    </section>
                    <div className='mainContainer'>
                        <div className="rightContainer">
                            {university &&  university.map(((item: any, index: any) => <ListUniversity item={item} index={index} deleteItem={deleteItem}  />))}
                            {[...university].length === 0 && `There is no result found`}
                        </div>
                    </div>
                </section>
            </main>



        </div>
    );
}

export default App;
