import featuredPhoto from '../../../public/home/featured.jpg';
import "./OurMenu.css";

const OurMenu = () => {
  return (
    <div className="our-menu my-20 md:my-40 mx-10 md:mx-20">
      <div className="z-10 bg-black bg-opacity-60 py-20">
        <div className="text-center w-[400px] mx-auto">
          <h1 className="text-[#D99904] italic">--- Check It Out ---</h1>
          <div className="divider my-0 divider-warning"></div>
          <h1 className="text-4xl uppercase text-white">From Our Menu</h1>
          <div className="divider my-0 divider-warning"></div>
        </div>
      

      <div className="flex gap-10 items-center">
        <div className='ml-40 my-10'>
            <img src={featuredPhoto} alt="" />
        </div>
        <div className='mr-40 text-white'>
            <h1 className='text-xl'>March 20, 2023</h1>
            <h1 className='text-xl'>WHERE CAN I GET SOME?</h1>
            <p className='text-md font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <div className='my-5'>
                <button className='px-4 py-2 rounded-lg border-b-2 border-white hover:cursor-pointer hover:bg-white hover:text-black hover:duration-700'>Read More</button>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default OurMenu;
