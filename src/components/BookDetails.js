import { useState } from "react"

import BookEdit from "./BookEdit";

const BookDetails = ({ book, onBookDeletion, onBookEdition }) => {
    const [editMode , setEditMode] = useState(false);

    const handleDeleteClick = () => {
        onBookDeletion(book.id)
    }

    const handleEditClick = () => {
        setEditMode(!editMode);
    }

    const handleEditBook = (id, newTitle) => {
        onBookEdition(id, newTitle)
        setEditMode(!editMode)
    }

    return (
       <div className="book-details">
            <img alt="book" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
            { editMode ? <BookEdit book={book}  onBookEdition={handleEditBook}/> : <div>{ book.title }</div> }
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}

export default BookDetails