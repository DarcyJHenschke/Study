import { useState, useEffect } from "react";

interface Props {
    category: string;
}
const ProductList = ({ category }: Props) => {
    const [products, setProducts] = useState<string[]>([]);

    useEffect(() => {
        console.log("fetching products in ", category);
        setProducts(["clothing", "household"]);
    }, [category]);
    return <div>ProductList</div>;
};

export default ProductList;
