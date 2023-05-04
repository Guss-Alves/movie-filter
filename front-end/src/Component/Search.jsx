import React, { useState } from 'react';
import { data } from '../apiData';

const Search = () => {

    const [input, setInput] = useState("");

    return (
        <div>
            <input type="text" className="searchInput" placeholder='Search here for a title or director' onChange={(e) => setInput(e.target.value.toLowerCase())} />
            <div className="filterBy">
                <label htmlFor="category-names">Filter by category:</label>
                <select onChange={(e) => setInput(e.target.value)} name="Choose category" id="dropDown" className='mt-4 ms-3'>
                    {
                        data.map((item) => {
                            return (
                                <option key={item.id} value={item.category.toLowerCase()} >{item.category}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="table">
                <table className="table table-success table-striped mt-4 container">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Director</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.filter((item) => {
                                return input.toLowerCase() === "" ?
                                    item :
                                    item.title.toLowerCase().includes(input) ||
                                    item.director.toLowerCase().includes(input) ||
                                    item.category.toLowerCase().includes(input);
                            }).map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.director}</td>
                                        <td>{item.category}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Search;