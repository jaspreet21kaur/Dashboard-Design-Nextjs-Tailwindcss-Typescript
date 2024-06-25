import React from 'react'

const UpgradePlan = () => {
  return (
    <div className="col-lg-4">
    <div className="card card-block card-stretch card-height  plan-bg">
        <div className="card-body">
            <h4 className="mb-3 text-white">Unlock Your plan</h4>    
            <p>Expanded Storage, Access To<br/> More Features On CloudBOX</p>   
            <div className="row align-items-center justify-content-between">
               <div className="col-6 go-white ">
                <a href="#" className="btn d-inline-block mt-5">Go Premium</a>
               </div>
                <div className="col-6">
                    <img src="../assets/images/layouts/mydrive/lock-bg.png" className="img-fluid" alt="image1"/>
                </div>
            </div>                     
        </div>
    </div>
</div>
  )
}

export default UpgradePlan