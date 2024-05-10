import QuoteCard from "../QuoteCard/QuoteCard";
import quotes from "../../../quotes.json";

const Quotes = () => {
  console.log(quotes);

  return (
    <div className="w-[1200px] mx-auto">
      {quotes.map((quote) => {
        return (
          <QuoteCard
            key={quote.author}
            userReview={quote.quote}
            userName={quote.author}
          />
        );
      })}
    </div>
  );
};

export default Quotes;
