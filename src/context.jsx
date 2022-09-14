import React, { useEffect } from "react";
import { useContext } from "react";
import { useCallback } from "react";
import { useState } from "react";

const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [resultTitle, setResultTitle] = useState("")

    const fetchBooks = async () => {
        setLoading(true);
        console.log("first")

        try {
            const response = await fetch(`${URL}${searchTerm}`)
            const data = await response.json();
            console.log(data);
            const { docs } = data
            console.log(docs)

            if (docs) {
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const { key, author_name, cover_i,
                        edition_count, first_publish_year, title } = bookSingle;

                    return {
                        id: key, author: author_name, cover_id: cover_i, edition_count: edition_count
                        , first_publish_year, title
                    }
                })
                setBooks(newBooks);
                if (newBooks.length > 1) {
                    setResultTitle("Your Search Result")
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
                setBooks([])
                setResultTitle("No Search Result Found!")
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBooks()


    }, [searchTerm])

    return (
        <AppContext.Provider value={{
            loading, books, setSearchTerm,
            resultTitle, setResultTitle
        }}>
            {children}
        </AppContext.Provider>
    )

}
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {  AppProvider };