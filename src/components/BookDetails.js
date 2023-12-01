import { useState } from "react"

import BookEdit from "./BookEdit";

const BookDetails = ({ book, onDeleteBook }) => {
    const [editMode , setEditMode] = useState(false);

    const handleDeleteClick = () => {
        onDeleteBook(book.id)
    }

    const handleEditClick = () => {
        setEditMode(!editMode);
    }

    return (
       <div className="book-details">
            { editMode ? <BookEdit /> : <div>{ book.title }</div> }
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}

export default BookDetails