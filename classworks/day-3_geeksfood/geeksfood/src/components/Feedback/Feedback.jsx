import PropTypes from "prop-types";

function Feedback({ userReview, userName, userImg, userPost }) {
  return (
    <div>
      <div className="shadow max-w-sm rounded-xl">
        <div className="rounded-xl bg-gray-100 px-4 py-7 text-sm leading-6 ">
          <p>{userReview}</p>
        </div>
      </div>

      <div className="flex gap-4 items-center mt-4">
        <span>
          <img
            className="w-12 h-12 rounded-full"
            src={userImg}
            alt="user-img"
          />
        </span>
        <span>
          <h5>{userName}</h5>
          <p>{userPost}</p>
        </span>
      </div>
    </div>
  );
}

Feedback.propTypes = {
  userReview: PropTypes.string,
  userName: PropTypes.string,
  userImg: PropTypes.string,
  userPost: PropTypes.string,
};

export default Feedback;
