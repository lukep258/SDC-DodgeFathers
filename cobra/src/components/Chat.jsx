import React, { useState } from 'react';

const Chat = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    console.log('open modal');
    setModalOpen(true);
  }

  const closeModal = () => {
    console.log('close modal');
    setModalOpen(false);
  }

  const currentTime = new Date();

// Get hours, minutes
let hours = currentTime.getHours();
const minutes = currentTime.getMinutes().toString().padStart(2, '0'); // Ensure two digits

// Determine AM or PM
const amOrPm = hours >= 12 ? 'PM' : 'AM';

// Convert 24-hour format to 12-hour format
hours = hours % 12 || 12;

// Format the time
const formattedTime = `${hours}:${minutes} ${amOrPm}`;

  return (
    <div className="flex justify-end mr-4">
      <div className="bg-blue-900 flex flex-row shadow-slate-700 shadow-md pl-2 py-1 pr-3 cursor-pointer w-fit text-white rounded-l-full rounded-b-full fixed bottom-5 right-5" onClick={handleClick}>
        <img className="pr-1" src="https://assetscdn-wchat.freshchat.com/static/assets/help_icon.407f0467c911236190038c9631c321f8.svg" />
        Chat
      </div>
      {/* Chat Modal Open */}
      {isModalOpen && (
        <div className="fixed bottom-5 right-5 w-96 flex flex-col justify-end bg-transparent ">
            <div className='flex justify-end'>
                <button className='bg-slate-700 opacity-50 mb-1 px-4 rounded-full text-white text-lg hover:bg-slate-950' onClick={closeModal}>&times;</button>
            </div>
            <div className='bg-slate-50 rounded-lg relative '>
              <div className="bg-black p-10 pb-20 rounded-lg shadow-md">
                  <img className="h-8" src="https://fc-use1-00-pics-bkt-00.s3.amazonaws.com/83b2ad3a8055f2f44427b75a6522ca73035b6cc2d7c97749738ca9104cb00975/f_marketingpicFull/u_8c18f0c28b571838445d51d37554bfb80225fdc2c2b691ced344963113f52b1f/img_8opo6j8jri_6b7f6ef3dc7c9e2d2631bdafbaaedc7c393e383df51537b263b181447dbc9e26.png" />
                  <h5 className='bg-black mt-4 text-sm text-white'>Chat Available Mon - Fri 7:30 am- 2:30 pm PT</h5>
              </div>
              <div className="flex justify-center absolute ">
                <div className='rounded-lg bg-white mb-4 shadow relative bottom-12 left-5' >
                  <div>
                    <h2 className='p-3 border-b'>Chat Topics</h2>
                  </div>
                  <ul>
                    <li>
                        <div className='container'>
                          <div className='flex pl-2 py-3 hover:bg-slate-100 cursor-pointer m-1 rounded-lg'>
                            <img className="size-9 rounded" src="https://fc-use1-00-pics-bkt-00.s3.amazonaws.com/83b2ad3a8055f2f44427b75a6522ca73035b6cc2d7c97749738ca9104cb00975/f_appLevelPicFull/img_ku027ckj6g_887a48e4c8bb70c017d4b53c709b4d4f247bc78106eed4b5d1e91f93c11157ee.png" alt="Channel icon" />
                            <div className='text-sm ml-2'>
                              <h2 className='font-bold'>Ask a Cobra Golf Question</h2>
                              <p className='text-gray-400 font-light'>Thank you for contacting Cobra P</p>
                            </div>
                            <div className='text-sm ml-5 text-gray-400 font-light'>
                              <span>{formattedTime}</span>
                            </div>
                            
                          </div>
                        </div>                  
                    </li>
                  </ul>                
                </div>
              </div>
              <div className='flex justify-center mt-24'>
              <div className='rounded-lg bg-white shadow py-2 w-11/12 mb-20' >
                  <div className='flex justify-between border-b '>
                    <h2 className='ml-3'>FAQs</h2>
                    <img className='size-7 mr-4 mb-1 cursor-pointer hover:bg-slate-200 rounded-xl opacity-50 flex items-center' src='https://cdn.icon-icons.com/icons2/1510/PNG/512/magnifiersearchinterfacecircularbutton_104679.png' />
                  </div>
                  <ul>
                    <li>
                        <div className='rounded'>
                          <div className='flex px-2 cursor-pointer  hover:bg-slate-100 rounded-lg py-2 m-1 align-center'>
                            <div className='w-9 h-9 bg-orange-400 text-white flex items-center justify-center rounded-lg'>F</div>
                            <div className='text-sm ml-3 flex  items-center'>
                              
                              <p>FAQs</p>
                            </div>
                          </div>                  
                        </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className='bg-orange-400 rounded-lg mt-14 text-white text-[12px] py-5' >
                <p className='grid place-content-center'>We are outside our business hours. Please come back later.</p>
              </div> */}
            </div>
        </div>
      )}
    </div>
  );
}

export default Chat;