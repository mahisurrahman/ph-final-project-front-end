import TitleSubTitle from "../TitleSubTitle/TitleSubTitle";
import slide5 from "../../../public/home/slide5.jpg";

const ChefRecommends = () => {
  return (
    <div className="my-20 md:my-40 mx-10 md:mx-20">
      <TitleSubTitle
        title={"Chef Recommends"}
        subTitle={"Should Try"}
      ></TitleSubTitle>
      <div className="my-10 grid grid-cols-3 gap-10">
        <div className="card card-compact w-full bg-[#F3F3F3] shadow-xl">
          <figure>
            <img
            className="w-full h-[250px] object-cover"
              src={slide5}
              alt="salad"
            />
          </figure>
          <div className="card-body flex flex-col items-center">
            <h2 className="text-xl font-bold">Caeser Salad</h2>
            <p className="text-center font-normal">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center my-5">
              <button className="bg-[#E8E8E8] px-4 py-2 rounded-md text-[#BB8506] border-b-2 uppercase border-[#BB8506] hover:bg-[#BB8506] hover:text-white hover:duration-700">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full bg-[#F3F3F3] shadow-xl">
          <figure>
            <img
            className="w-full h-[250px] object-cover"
              src={slide5}
              alt="salad"
            />
          </figure>
          <div className="card-body flex flex-col items-center">
            <h2 className="text-xl font-bold">Caeser Salad</h2>
            <p className="text-center font-normal">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center my-5">
              <button className="bg-[#1F2937] px-4 py-2 rounded-md text-[#BB8506] border-b-2 uppercase border-[#BB8506] hover:bg-[#BB8506] hover:text-white hover:duration-700">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full bg-[#F3F3F3] shadow-xl">
          <figure>
            <img
            className="w-full h-[250px] object-cover"
              src={slide5}
              alt="salad"
            />
          </figure>
          <div className="card-body flex flex-col items-center">
            <h2 className="text-xl font-bold">Caeser Salad</h2>
            <p className="text-center font-normal">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center my-5">
              <button className="bg-[#E8E8E8] px-4 py-2 rounded-md text-[#BB8506] border-b-2 uppercase border-[#BB8506] hover:bg-[#BB8506] hover:text-white hover:duration-700">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommends;
