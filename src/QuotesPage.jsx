import axios from "axios";
import { useState, useEffect } from "react";
import { QuotesIndex } from "./QuotesIndex"


export function QuotesPage() {
  const [quotes, setQuotes] = useState([]); 
    const handeIndex = () => {
      console.log('handleIndex');
      axios.get('https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/quotes.json').then ((response) => {console.log (response.data);
        setQuotes(response.data)
      })
    }

    useEffect(handleIndex, []);
    
  return (
    <main>
      <QuotesIndex quotes={quotes}/>
    </main>
  )
}