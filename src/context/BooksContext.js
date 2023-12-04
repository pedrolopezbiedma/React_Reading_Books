import { createContext, useState } from "react";

// Creating the context
const BooksContext = createContext();

// Create the Provider component
const BooksContextProvider = ({ children }) => {
    const [count, setCount] = useState(5)

    const incrementCount = () => {
        setCount(count+1)
    }

    return (
        <BooksContext.Provider value={{ count, incrementCount }}>
            { children }
        </BooksContext.Provider>
    )
}

export { BooksContextProvider }
export default BooksContext;