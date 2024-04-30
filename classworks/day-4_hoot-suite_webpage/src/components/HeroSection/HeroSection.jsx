import Button from "../Button/Button";

function HeroSection() {
  return (
    <div className="w-full bg-[#18305A] py-16 text-white text-center">
      <h1 className="text-4xl font-bold">See value from social sooner</h1>
      <p className="my-6">
        Lorem ipsum dolor sit amet consetur adicing elit. Voluptate, <br />
        cum nemo quibusdam totam commodi temporibus.
      </p>
      <Button btnName="Request a Demo" />
    </div>
  );
}

export default HeroSection;
