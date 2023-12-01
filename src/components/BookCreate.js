import { useState } from "react";

const BookCreate = ({ onBookCreation }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onBookCreation(title)
        setTitle('');
    }

    return (
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <input className="input" value={title} onChange={(event) => setTitle(event.target.value)}/>
                <button className="button">Add book</button>
            </form>
        </div>
    )
}

export default BookCreate
