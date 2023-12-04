import BookDetails from "./BookDetails"

const BookList = ({ books }) => {
    return (
        <div className="book-list">
            { 
                books.map((book) => 
                    <BookDetails
                        key={book.id}
                        book={book}/>
                )
            }
        </div>
    )
}

export default BookList