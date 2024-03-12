
import React, { useState } from "react";
import './Card.css';
import './SearchBar.css';

const Card = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cardData, setCardData] = useState([
        { title: "Xencia", description: "With suppo as a natural" },
        { title: "Microsoft", description: "With a natural lead-in." },
        { title: "Amazon", description: "With natural lead-in." },
        { title: "Apple", description: "With suppo as a natural" },
        { title: "Netflix", description: "With a natural lead-in." },
        { title: "Google", description: "With natural lead-in." },
        { title: "Dell", description: "With suppo as a natural" },
        { title: "HP", description: "With a natural lead-in." },
        { title: "HCL", description: "With natural lead-in." },
        { title: "Flipkart", description: "With natural lead-in." },
    ]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleAddCompany = () => {
        const companyName = window.prompt("Please enter the company name:");
        const description = window.prompt("Please enter the company name:");
        if (companyName) {
            // Add new company to cardData
            const newCompany = { title: companyName, description: description };
            setCardData([...cardData, newCompany]);
        }
    };

    const filterCards = (cardTitle) => {
        return cardTitle.toLowerCase().includes(searchTerm.toLowerCase());
    };

    return (
        <div className="body" >
            <div>
                <button type="button" className="btn1 btn-primary" onClick={handleAddCompany}>
                    Add a new company
                </button>
            </div>
            <div className="input-group">
                <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search for company"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button type="button" className="btn btn-outline-primary" data-mdb-ripple-init>
                    Search
                </button>
            </div>

            <div className="row custom-row-margin">
                {cardData.map((card, index) => (
                    filterCards(card.title) && (
                        <div key={index} className="col-4 mt-2 card mb-3 crd">
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <hr />
                                <p className="card-text">{card.description}</p>
                            </div>
                        </div>
                    )
                ))}
            </div>

        </div>
    );
};

export default Card

































