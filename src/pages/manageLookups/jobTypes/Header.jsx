import React from 'react'

export const Header = () => {
  return (
    <>
    <div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Experience Level</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
									<li className="breadcrumb-item">Lookup</li>
									<li className="breadcrumb-item active">Job Types</li>
								</ul>
							</div>
							<div className="col-auto float-end ms-auto">
								<a href="#" data-bs-toggle="modal" data-bs-target="#add_employee" className="btn add-btn"> Add Job Type</a>
							</div>
						</div>
					</div>
    </>
  )
}
