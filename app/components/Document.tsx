import React, { useState } from 'react'

import Modal1 from './Modal'

const Document = ({name,image}:{name:string,image:string}) => {
    const [show,setshow]=useState(false)
    const showModal=()=>{
        console.log("true")
        setshow(true)
    }
    const handleClose=()=>{
        console.log("clicked")
        setshow(false)
    }
  return (
    <>

    <div  className="col-lg-3 col-md-6 col-sm-6 open-modal">
                    <div className="card card-block card-stretch card-height">
                        <div onClick={showModal} className="card-body image-thumb">
                            <a data-title="Terms.pdf" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../assets/vendor/doc-viewer/files/demo.pdf"  data-target="#exampleModal">
                           
                                <div className="mb-4 text-center p-3 rounded iq-thumb">
                                    <div className="iq-image-overlay"></div>
                                    <img   src={`../assets/images/layouts/page-1/${image}.png`} className="img-fluid" alt="image1"/>       
                                </div>
                                <h6>{name}</h6> 
                            </a>             
                        </div>
                    </div>
    </div>

           {show && 
           <div id="deleteModal" onClick={handleClose}  aria-hidden="true" className="overflow-y-auto   top-0 overflow-x-hidden fixed bg-gray-200 bg-opacity-45 right-0 left-0  z-[2000] justify-center items-center w-full  h-screen ">

               <div className="modal-dialog modal-dialog-centered modal-xl  ">
                <div className='modal-body'>
                   <div className="fixed  bg-white p-4 h-[80vh] m-0 modal-content  rounded-lg shadow dark:bg-gray-800 ">
                  <h4 className="">{name}</h4>
                          <iframe className=' w-full bg-black flex flex-wrap h-[93%] mt-2' src="../assets/vendor/doc-viewer/files/demo.pdf"></iframe>
                     </div>
                </div>
                  
               </div>
           </div>
           }
           
        
    </>
  )
}

export default Document