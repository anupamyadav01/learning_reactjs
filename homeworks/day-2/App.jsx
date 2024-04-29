const Title = () => {
  return <h1 className="title">Topic Covered</h1>;
};

const Paragraph = (props) => {
  return <p className="margin_bottom margin_top">{props.content}</p>;
};

const Link = (props) => {
  return (
    <a className="margin_bottom" href="#">
      {props.text}
    </a>
  );
};
const MainContainer = () => {
  return (
    <div className="container">
      <Title />
      <Paragraph
        content="The following is a list of all the topics we cover in the MDN learning
      area."
      />
      <Link text="Getting started with the web" />
      <Paragraph content="Provides a practical introduction to web development for complete beginners." />
      <Link text="HTML - Structuring the web" />
      <Paragraph
        content="HTML is the language that we use to structure the different parts of our content
and define what their meaning or purpose is. This topic teaches HTML in detail."
      />

      <Link text="CSS - Styling the web" />
      <Paragraph
        content="CSS is the language that we use to control our web content's style and layout, as
well as adding behavior like animation. This topic provides comprehensive
coverage of CSS."
      />
    </div>
  );
};
ReactDOM.render(<MainContainer />, document.getElementById("root"));
