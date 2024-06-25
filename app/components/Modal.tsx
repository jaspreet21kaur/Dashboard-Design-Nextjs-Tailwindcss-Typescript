
import React, { useEffect, useState } from 'react'

const UpdateProfile = ({onUpdateSuccess }: {onUpdateSuccess: () => void }) => {
       const [showModal,setShowModal]=useState(false)
      
       const [pending,setpending]=useState(false)
     
     
  return (
  <>

<div className="flex justify-center ">
    <button id="deleteButton" data-modal-target="deleteModal" data-modal-toggle="deleteModal"  className="h-[ 40%] mt-4 bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-md  hover:bg-gray-800 dark:hover:bg-gray-700" type="button" onClick={()=>setShowModal(true)}>
    Update
    </button>
</div>

 

{showModal &&
           
<div id="deleteModal" aria-hidden="true" className="overflow-y-auto  overflow-x-hidden fixed bg-gray-200 bg-opacity-45 right-0 left-0  z-[60] justify-center items-center w-full md:inset-0 h-modal md:h-full">
  
  {pending && 

}
    <div  hidden={pending ? true : false} className="relative left-[35%]    top-[20%] p-4 max-w-md h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative p-4 bg-white text-center w-[130%] rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <button type="button" onClick={()=>setShowModal(false)} className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div>
               <div className='bg-red-700'>
                  
               </div>
            </div>
        </div>
       
    </div>
</div>

}
  </>
  )
}

export default UpdateProfile

