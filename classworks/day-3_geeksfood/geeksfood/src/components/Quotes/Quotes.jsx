import QuoteCard from "../QuoteCard/QuoteCard";
import quotes from "../../../quotes.json";
import Header from "../../components/Header/index";

const Quotes = () => {
  console.log(quotes);

  return (
    <div className="w-[1200px] mx-auto pt-24">
      <Header />
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
