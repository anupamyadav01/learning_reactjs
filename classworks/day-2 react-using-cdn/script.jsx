const Title = () => {
  return <h1>Learn Web Development</h1>;
};

const Paragraph = () => {
  return (
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quas
      facilis excepturi possimus enim, ex quam ad Lorem ipsum dolor sit amet.
    </p>
  );
};

const Link = () => {
  return <a href="https://www.google.com">the rest of MDN</a>;
};
const MainContainer = () => {
  return (
    <div className="container">
      {<Title />}
      {<Paragraph />}
      {<Link />}
    </div>
  );
};
ReactDOM.render(<MainContainer />, document.getElementById("root"));
