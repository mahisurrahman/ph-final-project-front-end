

const TitleSubTitle = ({title, subTitle}) => {
    return (
        <div className="text-center w-[400px] mx-auto">
            <h1 className="text-[#D99904] italic">--- {subTitle} ---</h1>
            <div className="divider my-0"></div> 
            <h1 className="text-4xl uppercase">{title}</h1>
            <div className="divider my-0"></div> 
        </div>
    );
};

export default TitleSubTitle;