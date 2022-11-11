import React, { useState } from 'react';
function Image() {
    const [width, setWidth] = useState(526);
    const [display, setDisplay] = useState({ display: "none" });
    function add() {
        setWidth(526);
        setDisplay({ display: "block" });
    };
    function increase() {
        setWidth(width + 5);
    };
    function reduce() {
        setWidth(width - 5);
    };
    function remove() {
        setDisplay({ display: "none" });
    };
    const Margin = { marginRight: "5px" }
    return <>
        <div>
            <button onClick={add} style={Margin}>Додати</button>
            <button onClick={increase} style={Margin}>Збільшити</button>
            <button onClick={reduce} style={Margin}>Зменшити</button>
            <button onClick={remove} style={Margin}>Видалити</button>
        </div>
        <div><img src="https://i.pinimg.com/736x/fd/ea/ca/fdeaca1b9bcea741d4c409c14e113732.jpg" width={width} style={display} /></div>
    </>
}
export default Image;