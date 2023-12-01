const BookDetails = ({ book, onDeleteBook }) => {

    const handleClick = () => {
        onDeleteBook(book.id)
    }

    return (
       <div className="book-details">
            { book.title }
            <div className="actions">
                <button className="delete" onClick={handleClick}>Delete</button>
            </div>
        </div>
    )
}

export default BookDetails