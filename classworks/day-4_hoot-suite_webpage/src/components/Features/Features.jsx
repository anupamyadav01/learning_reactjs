import people from "../Images/people.jpg";
import resume from "../Images/resume.jpg";
import rocket from "../Images/rocket.png";
import Icons from "../IconsSection/Icons";

function Features() {
  return (
    <div className="flex justify-around mt-20 flex-wrap">
      <Icons
        imgSrc={rocket}
        para="Enterprise organizations successfully launched."
      />
      <Icons imgSrc={resume} para="Enterprise users onboarded seamlessly." />
      <Icons
        imgSrc={people}
        para="Professionals trained on product and strategy."
      />
    </div>
  );
}

export default Features;
