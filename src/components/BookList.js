import BookDetails from "./BookDetails"

const BookList = ({ books, onBookDeletion, onBookEdition }) => {
    const handleBookDeletion = (id) => {
        onBookDeletion(id)
    }

    const handleBookEdition = (id, newTitle) => {
        onBookEdition(id, newTitle)
    }

    return (
        <div className="book-list">
            { 
                books.map((book) => 
                    <BookDetails
                        key={book.id}
                        book={book}
                        onBookDeletion={handleBookDeletion}
                        onBookEdition={handleBookEdition} />
                )
            }
        </div>
    )
}

export default BookList