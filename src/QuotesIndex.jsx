export function QuotesIndex( {quotes} ) {
  return (
    <div>
      <h1>All Quotes</h1>
      {quotes.map((quote) => (
         <div key={quote.source}>
           <p>Source: {quote.source}</p>
           <p>Context: {quote.context}</p>
           <p>Quote: {quote.quote}</p>
           <p>Theme: {quote.theme}</p>

         </div>
       ))}

    </div>
  );
}