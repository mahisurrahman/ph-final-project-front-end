import './BlankBanner.css';


const BlankBanner = () => {
    return (
        <div className="banner-background h-[400px] my-20 md:my-40 mx-10 md:mx-20 flex items-center justify-center">
            <div className='h-[300px] bg-white flex flex-col items-center justify-center px-5 md:px-40 mx-10 md:mx-0'>
                <h1 className='text-center text-3xl md:text-4xl font-font-cinzel'>Bistro Boss</h1>
                <p className='text-center my-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default BlankBanner;