import React, {useState, useEffect} from 'react';
import CloseImg from '../../assets/close.webp'
export default function ConfirmationDialogRaw({open, setModalOpen, operatingType, selecteditem}) {

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleOk = () => {
    setModalOpen(false);
  };

  const [item, setItem] = useState({
    message: "",
    type: "",
    step: "",
    answerlist: []
  })

  useEffect(()=> {
    if(open){
        setItem(!operatingType ? {
            message: "",
            type: "",
            step: "",
            answerlist: []
          } : selecteditem)

          console.log(selecteditem);
    }
  }, [open])
  return (
    <>
    {open ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative my-6 mx-auto max-w-3xl w-[600px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    QUIZ DETAIL
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setModalOpen(false)}
                  >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <img src={CloseImg} alt="close" />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col gap-[20px]">
                    <div className='w-full flex justify-between'>
                        <div className='flex w-[45%] items-center'>
                            <div>Step</div>
                            <input
                                type="number"
                                value = {item.step}
                                className="ml-[20px] font-[Poppins] w-[90%] p-[10px] text-[16px] font-normal text-gray-700 bg-white bg-clip-padding border-solid  border-[2px] rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
                            />
                        </div>
                        <div className='flex w-[45%] items-center'>
                            <div>Type</div>
                            <input
                                type="text"
                                value = {item.type}
                                className="ml-[20px] font-[Poppins] w-[90%] p-[10px] text-[16px] font-normal text-gray-700 bg-white bg-clip-padding border-solid  border-[2px] rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className='flex w-full items-center justify-between'>
                            <div>Message</div>
                            <input
                                type="text"
                                value = {item.message}
                                className="ml-[20px] font-[Poppins] w-[80%] p-[10px] text-[16px] font-normal text-gray-700 bg-white bg-clip-padding border-solid  border-[2px] rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
                            />
                    </div>
                    <div className='flex w-full items-center justify-between'>
                        <div>AnswerList</div>
                        <input
                            type="text"
                            value = {item.answerlist}
                            className="ml-[20px] font-[Poppins] w-[80%] p-[10px] text-[16px] font-normal text-gray-700 bg-white bg-clip-padding border-solid  border-[2px] rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
                        />
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModalOpen(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModalOpen(false)}
                  >
                    {operatingType ? "Save Changes" : "Add Quiz"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </>
  );
}