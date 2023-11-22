import React from "react";
import memesData from "../memesData";

export default function Meme() {

    const memes = memesData.data.memes;
    const memesCount = memes?.length || 0;
    

    function getNewMemeImg() {
        console.log('Get new meme image!');
        const memeIndex = getRandomInt(memesCount);
        console.log('index ', memeIndex);
        console.log('url ', memes[memeIndex].url);
    }

    // random int between 0 and max (exclusive)
    function getRandomInt(max) {
        max = Math.floor(max);
        return Math.floor(Math.random() * (max));
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
                <button className="form--button" onClick={getNewMemeImg}>
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    );
}
