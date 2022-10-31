import styles from "./SearchBar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
const SearchBar = ({ placeholder, data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [ifText, setIfText] = useState(false);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((x) => {
            return x.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (!searchWord) {
            setFilteredData([]);
            setIfText(false);
        } else {
            setFilteredData(newFilter);
            setIfText(true);
        }
    };

    const closeHandleClick = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className={styles.Search}>
            <div className={styles.SearchInputs}>
                <input
                    type="text"
                    placeholder={placeholder}
                    className={styles.InputField}
                    onChange={handleFilter}
                    value={wordEntered}
                />
                <div className={styles.SearchIcon}>
                    <SearchIcon />
                    {ifText && <CloseIcon onClick={closeHandleClick} />}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className={styles.DataResult}>
                    {filteredData.map((book) => (
                        <a
                            className={styles.DataItem}
                            href={book.link}
                            target="_blank"
                        >
                            <p className={styles.Text}>{book.title}</p>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
