import "./App.css";
import SearchBar from "./components/SearchBar";
import bookData from "./books.json";

function App() {
    return (
        <div className="App">
            <SearchBar placeholder="enter a book name" data={bookData} />
        </div>
    );
}

export default App;
