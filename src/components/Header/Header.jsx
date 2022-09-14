import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
    return (
        <div className="holder">
            <header className="header">
                <Navbar />
                <div className="header-content text-white">
                    {/* <div className="header-content flex flex-c text-center text-white"> */}
                    <h2 className="header-title text-capitalize">
                        find your book of choice.
                    </h2>
                    <br />
                    <p className="header-text fs-18 fw-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus molestias assumenda vitae ad dolore quos
                        doloremque? Molestias amet, eius maiores aliquam
                        possimus laudantium. Dolores sit, placeat nobis
                        voluptate asperiores unde?
                    </p>
                    <SearchForm />
                </div>
            </header>
        </div>
    );
};

export default Header;
