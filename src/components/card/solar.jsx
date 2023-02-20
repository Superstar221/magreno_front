import ArrowBtn from '../../assets/arrow.png'

export default ({index, item}) => {
    return (
        <div className="text-center py-[9px] px-[8px] border-solid border-[2px] border-[#cecece] w-full md:w-[32%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg">
            <img src={item.image} alt="reducing monthly bills" className="m-auto w-full h-[160px] rounded-[5px]"/>
            <div className="flex justify-between items-center">
                <span className='w-[10%] font-[Arial] text-[16px] items-center'>0{index+1}.</span>
                <div className='w-[80%] h-[75px] flex flex-col justify-center '>
                    <span className="text-[#2b1a3e] text-[12px] font-[Poppins] text-left">{item.type}</span>
                </div>
                <div className='h-[75px] justify-center flex flex-col w-[10%]'>
                    <img src={ArrowBtn} alt="arrow" className='w-[12px] h-[12px]' />
                </div>
            </div>
        </div>
    )
}