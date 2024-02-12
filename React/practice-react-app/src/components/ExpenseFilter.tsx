import React from "react";

interface Props {
    onSelectCategory: (category: string) => void;
    categories: string[];
}

const ExpenseFilter = ({ onSelectCategory, categories }: Props) => {
    return (
        <select
            defaultValue="all"
            onChange={(event) => onSelectCategory(event.target.value)}
            className="form-select"
        >
            <option value="all">All Categories</option>
            {categories.map((categorie) => (
                <option value={categorie}>{categorie}</option>
            ))}
        </select>
    );
};

export default ExpenseFilter;
