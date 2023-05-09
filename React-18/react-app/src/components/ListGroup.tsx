import { MouseEvent } from "react";

const ListGroup = () => {
    const items = ["New York", "San Fran", "tokyo", "sydney"];
    const handleClick = (event: MouseEvent) => {
        console.log(event);
    };
    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className="list-group-item"
                        key={index}
                        onClick={handleClick}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ListGroup;
