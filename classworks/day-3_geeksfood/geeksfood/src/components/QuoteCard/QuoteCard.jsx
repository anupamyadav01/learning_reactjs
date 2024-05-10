import PropTypes from "prop-types";

const QuoteCard = ({ userReview, userName }) => {
  return (
    <div className="bg-gray-500 p-10 rounded-xl text-center mb-5">
      <h2 className="text-2xl font-bold mb-8">{userReview}</h2>
      <p>{userName}</p>
    </div>
  );
};

QuoteCard.propTypes = {
  userReview: PropTypes.string,
  userName: PropTypes.string,
};

export default QuoteCard;
