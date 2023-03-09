import React from 'react'
import Select from 'react-select';
const options = [
	{ value: 'Select', label: 'Select' },
	{ value: 'Active', label: 'Active' },
	{ value: 'Inactive', label: 'Inactive' },
  ];

export const EditJobTypes = ({EditJob,setJobName,setStatus,singleJobTypes,jobStatus,jobName}) => {
  return (
    <div>
        <div id="edit_job" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Edit Jobtype</h5>
								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								{/* <form> */}
									<div class="row">
										<div class="col-sm-12">
											<div class="form-group">
                      <label>JobType<span class="text-danger">*</span></label>
												<input class="form-control" type="text" value={jobName}  onChange={(e)=>setJobName(e.target.value)} />
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Status</label>
												{/* <Select class="select" options={options} defaultValue={(jobStatus==0?"Inactive":"Active")} onChange={(e)=>{setStatus(e.target.value=="Active"?1:0)}}/> */}
												<Select class="select" options={options} defaultValue={(jobStatus==0?"Inactive":"Active")} onChange={(e)=>{setStatus(e.target.value=="Active"?1:0)}}/>

													{/* <option>Select</option>
													<option selected>Active</option>
													<option>Inactive</option>
												</select> */}
											</div>
										</div>
										
									</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn" onClick={()=>{EditJob()}}>Save</button>
									</div>
								{/* </form> */}
							</div>
						</div>
					</div>
				</div>
    </div>
  )
}
