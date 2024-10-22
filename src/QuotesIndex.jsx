import { useState } from "react";

export function QuotesIndex({ quotes }) {

  // const currentQuotes = () => {
  //   const [themes, setThemes] = useState(quotes.map)

  //   const filterQuotesByTheme = (movieORGame) => {
  //     return quotes.filter(quote => quote.theme)
  //   }
  //   return (
  //     <div>
  //       <button onClick={()}
  //     </div>
  //   )
  // }

  
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Calculate total pages
  const totalPages = Math.ceil(quotes.length / itemsPerPage);

  // Calculate the indexes for slicing the array
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentQuotes = quotes.slice(startIndex, endIndex);

  // Functions to navigate pages
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>All Quotes</h1>
      {currentQuotes.map((quote, index) => (
        <div key={index}>
          <p><strong>Source:</strong> {quote.source}</p>
          <p><strong>Context:</strong> {quote.context}</p>
          <p><strong>Quote:</strong> {quote.quote}</p>
          <p><strong>Theme:</strong> {quote.theme}</p>
          <hr />
        </div>
      ))}
      
      {/* Pagination Controls */}
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
// export function QuotesIndex( {quotes} ) {
//   return (
//     <div>
//       <h1>All Quotes</h1>
//       {quotes.map((quote, index) => (
//          <div key={index}>
//            <p><strong>Source:</strong> {quote.source}</p>
//            <p><strong>Context:</strong>{quote.context}</p>
//            <p><strong>Quote:</strong>{quote.quote}</p>
//            <p><strong>Theme:</strong>{quote.theme}</p>
//           <hr />
//          </div>
//        ))}

//     </div>
//   );
// }