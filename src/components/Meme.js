import React from "react";

export default function Meme() {

    function handleButtonClick() {
        console.log('Get new meme image!');
        
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Top text"
                />
                <input
                    type="text"
                    className="form--input"
                    placeholder="Bottom text"
                />
                <button className="form--button" onClick={handleButtonClick}>
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    );
}
