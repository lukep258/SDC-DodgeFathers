import { useState } from 'react';

const Questions = () => {
  const [answerOpen, setAnswerOpen] = useState(false);
  let answers = 1;

  const toggleShowAnswer = () => {
    setAnswerOpen(prevState => !prevState);
  };

  return (
    <>
      <div className="flex py-5 m-auto max-w-[75%] border-t-[1px] border-slate-300">
        <div></div>
        <div className="flex flex-col w-full font-titillium mt-8 mb-16">
          <div className="flex flex-row gap-2">
            <div className="avatar placeholder">
              <div className="bg-gray-600 text-neutral-content rounded-full w-16 h-16">
                <span className="text-xl">G</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full ">
              <div className="flex flex-row gap-2 justify-between">
                <div className="flex flex-row gap-2">
                  <p className="font-semibold text-l">George</p>
                  <p className="">Verified Reviewer</p>
                </div>
                <p className="font-regular">09/04/23</p>
              </div>
              <div>
                <p className="font-semibold">
                  Q: <span>Is this limited edition driver okay for slow speed swing senior</span>
                </p>
              </div>
              <div className="flex flex-row gap-2 cursor-pointer" onClick={toggleShowAnswer}>
                <span className="material-symbols-outlined scale-50">chat_bubble</span>
                <p className="font-semibold">Answers ( {answers} )</p>
              </div>
            </div>
          </div>

          <div className={`collapse ${answerOpen ? 'collapse-open' : 'collapse-close'} `}>
            <div className={'collapse-content ml-16 pl-10 border-l-2 border-black w-content h-content py-10'}>
                <div className="flex flex-row gap-2">
                <div className="avatar placeholder">
                    <div className="bg-gray-600 text-neutral-content rounded-full w-16 h-16">
                    <span class="material-symbols-outlined">storefront</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-row gap-2 justify-between w-content">
                    <div className="flex flex-row gap-2">
                        <p className="font-semibold text-l">Store Owner</p>
                    </div>
                    <p className="font-regular">09/05/23</p>
                    </div>
                    <div>
                    <pre className="font-titillium text-l">
                        A: Hi George, <br></br>
                        <br></br>
                        Yes but be sure to choose graphite lite flex.
                    </pre>
                    </div>
                </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Questions;