import React from 'react'

const QuickAccess = () => {
  return (
    <div className="card card-block card-stretch card-height">
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Quick Access</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="list-inline p-0 mb-0 row align-items-center">
                                <li className="col-lg-6 col-sm-6 mb-3 mb-sm-0"> 
                                    <div data-load-file="file" data-load-target="#resolte-contaniner" data-url="../assets/vendor/doc-viewer/files/demo.pdf" data-toggle="modal" data-target="#exampleModal" data-title="Product-planning.pdf"  className="p-2 text-center border rounded">
                                        <div>
                                            <img src="../assets/images/layouts/mydrive/folder-1.png" className="img-fluid mb-1" alt="image1"/>
                                        </div>
                                        <p className="mb-0">Planning</p>
                                    </div>
                                </li>
                                <li className="col-lg-6 col-sm-6"> 
                                    <div data-load-file="file" data-load-target="#resolte-contaniner" data-url="../assets/vendor/doc-viewer/files/demo.docx" data-toggle="modal" data-target="#exampleModal" data-title="Wireframe.docx"  className="p-2 text-center border rounded">
                                        <div>
                                            <img src="../assets/images/layouts/mydrive/folder-2.png" className="img-fluid mb-1" alt="image2"/>
                                        </div>
                                        <p className="mb-0">Wireframe</p>
                                    </div>
             
                                </li>
                            </ul>
                        </div>
                    </div>
  )
}

export default QuickAccess