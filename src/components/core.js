import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export const base = 'http://34.93.246.74:8082/api/expenses';


function Core() {


    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");

    const [expenseId, setExpenseId] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newAmount, setNewAmount] = useState("");

    
    const handleAddSubmit = async (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: parseFloat(amount)  // Convert amount to number
        };

        try {
            const response = await fetch(base, {  // Replace with your actual base URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(expenseData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log("New Expense Added:", result);

            // Clear form fields after successful submission
            setTitle("");
            setAmount("");
            setDescription("");
        } catch (error) {
            console.error('Error adding expense:', error);
        }
    };

    
    const handleUpdateSubmit = async (event) => {
        event.preventDefault();

        // Ensure that `expenseId` is a number
        const id = parseInt(expenseId);
        const updatedExpenseData = {
            title: newTitle,
            amount: parseFloat(newAmount)  // Convert amount to number
        };

        try {
            const response = await fetch(`${base}/${id}`, {  // Replace with your actual base URL
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedExpenseData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log("Expense Updated:", result);

            // Clear form fields after successful update
            setExpenseId("");
            setNewTitle("");
            setNewAmount("");
        } catch (error) {
            console.error('Error updating expense:', error);
        }
    };


    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg p-4">
                        <h2 className="text-center mb-4">Add New Expense</h2>
                        <form onSubmit={handleAddSubmit}>
                            <div className="mb-3">
                                <label htmlFor="expenseTitle" className="form-label">Expense Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="expenseTitle"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter expense title"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="expenseAmount" className="form-label">Amount</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="expenseAmount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="Enter amount"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="expenseDescription" className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    id="expenseDescription"
                                    rows="3"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Enter a brief description"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Add Expense</button>
                        </form>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow-lg p-4">
                        <h2 className="text-center mb-4">Update Expense</h2>
                        <form onSubmit={handleUpdateSubmit}>
                            <div className="mb-3">
                                <label htmlFor="expenseId" className="form-label">Expense ID</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="expenseId"
                                    value={expenseId}
                                    onChange={(e) => setExpenseId(e.target.value)}
                                    placeholder="Enter expense ID"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="newExpenseTitle" className="form-label">New Expense Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="newExpenseTitle"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    placeholder="Enter new expense title"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="newExpenseAmount" className="form-label">New Amount</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="newExpenseAmount"
                                    value={newAmount}
                                    onChange={(e) => setNewAmount(e.target.value)}
                                    placeholder="Enter new amount"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-success w-100">Update Expense</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Core;
