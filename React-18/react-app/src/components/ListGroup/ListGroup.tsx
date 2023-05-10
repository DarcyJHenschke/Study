import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
    list-style: none;
    padding: 0%;
    background-color: red;
`;
const ListItem = styled.li`
    background-color: blue;
`;
interface Props {
    items: string[];
    heading: string;
}

const ListGroup = ({ items, heading }: Props) => {
    return (
        <>
            <h1>{heading}</h1>
            <List>
                {items.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                ))}
            </List>
        </>
    );
};

export default ListGroup;
