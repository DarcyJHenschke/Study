import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectedItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectedItem }: Props) => {
    const [index2, setIndex2] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        onClick={() => {
                            setIndex2(index);
                            onSelectedItem(item);
                        }}
                        key={item}
                        className={
                            index2 === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ListGroup;
