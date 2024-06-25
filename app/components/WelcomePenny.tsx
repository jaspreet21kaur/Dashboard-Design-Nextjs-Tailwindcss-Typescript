import React from 'react'

const WelcomePenny = () => {
  return (
    <div className="card card-block card-stretch card-height iq-welcome" >
    <div className="card-body property2-content">
        <div className="d-flex flex-wrap align-items-center">
            <div className="col-lg-6 col-sm-6 p-0">
                <h3 className="mb-3">Welcome Penny</h3>
                <p className="mb-5">You have 32 new notifications and 23 unread messages to reply</p>
                <a href="#">Try Now<i className="las la-arrow-right ml-2"></i></a>
            </div>
        </div>
    </div>
</div>
  )
}

export default WelcomePenny