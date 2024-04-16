import React, { useState } from 'react'

export default function TextForm(props) {
    const handaleUpClick = () => {
        // console.log("Uppercase was clicked + text");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "Success");
    }
    const handaleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!", "Success");
    }
    const handaleCleareClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Cleare Text!", "Success");
    }
    const handaleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard!", "Success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space Remove!", "Success");
    }
    const handleTitleCase = () => {
        let titleCaseText = text
            .split(' ')
            .map(function (word) {
                // First character upper case else lower case
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            })
            .join(' ');
        setText(titleCaseText);
    };
    const handleToSlug = () => {
        const slugText = text
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove non-word characters (excluding spaces and dashes)
            .replace(/\s+/g, '-') // Replace spaces with dashes
            .replace(/--+/g, '-'); // Replace consecutive dashes with a single dash

        setText(slugText);
    };


    const handaleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }

    // Declare a new state variable, which we'll call "count"
    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

    return (
        <>
            <div className='container my-4' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handaleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="5" placeholder='Enter text here'></textarea>
                </div>
                <button className='btn btn-primary m-1' onClick={handaleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-info m-1' onClick={handaleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-secondary m-1' onClick={handleTitleCase}>Convert to TitleCase</button>
                <button className='btn btn-warning m-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className='btn btn-dark m-1' onClick={handleToSlug}>Convert to Slug</button>
                <button className='btn btn-success m-1' onClick={handaleCopy}>Copy Text</button>
                <button className='btn btn-danger m-1' onClick={handaleCleareClick}>Cleare</button>
            </div>
            <br />
            <hr style={{ color: props.mode === 'dark' ? 'white' : 'black' }} />
            <div className='container my-3 text-center' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className='text-primary'>Your Text Summary</h2>
                <p><strong>{text.split(" ").length}</strong>  words and <strong>{text.length}</strong> characters</p>
                <p> <strong>{0.008 * text.split(" ").length}</strong> Minutes read</p>
            </div>
                <br />
                <hr style={{ color: props.mode === 'dark' ? 'white' : 'black' }} />
               
            <div className='container my-3 text-center' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className='text-primary'>Preview</h2>
                <p className='text-justify w-100'>{text.length > 0 ? text : "Enter something in the textbox about to preview it here"}</p>
            </div>

        </>
    )
}
