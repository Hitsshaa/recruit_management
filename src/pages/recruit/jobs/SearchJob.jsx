import React from 'react'

export const SearchJob = () => {
  return (
    <div>
        	<div class="row filter-row">
						<div class="col-sm-6 col-md-3">  
							<div class="form-group form-focus">
								<input type="text" class="form-control floating"/>
								<label class="focus-label">Job Title</label>
							</div>
						</div>
						<div class="col-sm-6 col-md-3">  
							<div class="form-group form-focus">
								<input type="text" class="form-control floating"/>
								<label class="focus-label">Department</label>
							</div>
						</div>
						<div class="col-sm-6 col-md-3"> 
							<div class="form-group form-focus select-focus">
								<select class="select floating"> 
									<option>Select Status</option>
									<option>Open</option>
									<option>Closed</option>
									<option>Cancelled</option>
								</select>
								<label class="focus-label">Status</label>
							</div>
						</div>
						<div class="col-sm-6 col-md-3">
							<div class="d-grid">
								<a href="#" class="btn btn-success w-100"> Search </a>  
							</div>  
						</div>
                    </div>
    </div>
  )
}
