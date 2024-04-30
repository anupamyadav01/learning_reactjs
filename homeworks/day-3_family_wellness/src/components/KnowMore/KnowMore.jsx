import Button from "../Button/Button";

const KnowMore = () => {
  return (
    <div className="bg-pink-800 text-center mt-10 py-12 px-24 text-white">
      <h2 className="text-4xl font-medium mb-5">
        Think Health. Think Massage.
      </h2>
      <p className="mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolores
        ullam ipsum at sit omnis optio, possimus officia quod nobis dicta,
        suscipit expedita explicabo quisquam quia facilis, iste fugit saepe?
      </p>
      <div className="flex gap-8 justify-center">
        <Button btnName="Learn More About Us" />
        <Button btnName="Contact Us Today" />
      </div>
    </div>
  );
};

export default KnowMore;
