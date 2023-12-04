import { useState } from "react";

const BookEdit = ({ book, onBookEdition }) => {
    const [title, setTitle] = useState(book.title)

    const handleSubmit =  (event) => {
        event.preventDefault();
        onBookEdition(book.id, title)
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <input className="input" type="input" value={title} onChange={(event) => setTitle(event.target.value)}/>
            <button className="button is-primary">Save</button>
        </form>
    )
}

export default BookEdit;