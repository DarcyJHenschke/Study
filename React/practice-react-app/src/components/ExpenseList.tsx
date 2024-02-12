import { useState } from "react";
import { FieldValue, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    description: z.string().min(3).max(50),
    amount: z.coerce.number().min(0),
    category: z.enum(["groceries", "utilities", "entertainment"]),
});

type FormData = z.infer<typeof schema>;
interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props {
    dummyData: Expense[];
    setDummyData: (Expense: object) => void;
    categories: string[];
}

const ExpenseList = ({ dummyData, setDummyData, categories }: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });
    const onClick = (data: FieldValues) => {
        setDummyData([...dummyData, data]);
        reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit(onClick)} className="mb-3">
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <input
                        {...register("description")}
                        id="description"
                        className="form-control"
                        type="text"
                    ></input>
                    {errors.description && (
                        <p className="text-danger">
                            {errors.description.message}
                        </p>
                    )}
                    <label htmlFor="amount" className="form-label">
                        Amount
                    </label>
                    <input
                        {...register("amount")}
                        id="amount"
                        className="form-control"
                        type="number"
                    ></input>
                    {errors.amount && (
                        <p className="text-danger">{errors.amount.message}</p>
                    )}
                    <label htmlFor="category" className="form-label">
                        Category
                    </label>
                    <select
                        {...register("category")}
                        id="category"
                        className="form-select"
                    >
                        <option value=""></option>
                        {categories.map((categorie) => (
                            <option value={categorie}>{categorie}</option>
                        ))}
                    </select>
                    {errors.category && (
                        <p className="text-danger">{errors.category.message}</p>
                    )}
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default ExpenseList;
