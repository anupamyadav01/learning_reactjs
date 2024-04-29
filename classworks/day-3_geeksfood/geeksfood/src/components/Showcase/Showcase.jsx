import Button from "../Button/Button";

function Showcase() {
  return (
    <div className="bg-[#F2F4F7] pt-20 pb-20 overflow-x-hidden	">
      <section className="w-[1250px] mx-auto flex">
        <div className="w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80 "
            alt=""
          />
        </div>
        <div className="w-1/2  flex flex-col justify-center p-20">
          <h2 className="text-3xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            debitis.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>
          <div>
            <Button
              btnName={"Get in Touch"}
              className={
                "mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Showcase;
