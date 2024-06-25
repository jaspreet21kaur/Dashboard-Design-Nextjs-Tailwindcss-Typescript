import React from 'react'
import FileIndividualCompenent from './FileIndividualCompenent'

const FilesComponent = () => {
  return (
    <div className="col-lg-8 col-xl-8">
            <div className="card card-block card-stretch card-height files-table">
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Files</h4>
                </div>
                <div className="card-header-toolbar d-flex align-items-center">
                  <a href="./page-files.html" className=" view-more">
                    View All
                  </a>
                </div>
              </div>
              <div className="card-body pt-0">
                <div className="table-responsive">
                  <table className="table mb-0 table-borderless tbl-server-info">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Members</th>
                        <th scope="col">Last Edit</th>
                        <th scope="col">Size</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                     <FileIndividualCompenent name={"Weekly-report.pdf"} icon={""} color={"danger"} by={"Me"} date={"jan 21, 2020 me"} data={"02 MB"}/>
                     <FileIndividualCompenent name={"VueJs.pdf"} icon={"ri-file-download-line"} color={"primary"} by={"Poul Molive"} date={"Jan 25, 2020 Poul Molive"} data={"64 MB"}/>
                     <FileIndividualCompenent name={"Milestone.docx"} icon={""} color={"info"} by={"Me"} date={"Mar 30, 2020 Gail Forcewind"} data={"30 MB"}/>
                     <FileIndividualCompenent name={"Training center.xlsx"} icon={""} color={"success"} by={"Me"} date={"Mar 30, 2020 Gail Forcewind"} data={"10 MB"}/>
                     <FileIndividualCompenent name={" Flavour.pptx"} icon={""} color={"warning"} by={"Me"} date={"Mar 30, 2020 Gail Forcewind"} data={"10 MB"}/>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
  )
}

export default FilesComponent