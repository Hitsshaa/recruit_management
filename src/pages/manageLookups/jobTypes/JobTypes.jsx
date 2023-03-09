import React, { useEffect, useState } from "react";
import { jobTypeAllApis } from "../../../utils/jobTypesApiUtil";
import { AddJobType } from "./AddJobType";
import { EditJobTypes } from "./EditJobTypes";
import DeleteJobType from "./DeleteJobType";
import { MainBodyJobType } from "./MainBodyJobType";

import { Header } from "./Header";

function JobTypes() {


  useEffect(() => {
    getAllJobTypes();
  }, []);

  const [jobTypes, setJobTypes] = useState([]);
  const [status,setStatus] = useState(0)
  const [jobName,setJobName]=useState()
  const [jobId,setJobId]=useState()
  const [singleJobTypes, setSingleJobTypes] = useState([]);



  const getAllJobTypes = async () => {
    await jobTypeAllApis.getJobTypes(
      (res) => {
        setJobTypes(res);
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };

 

  const addJobTypes = async () => {
    const dataBlock ={
      "jobName": jobName,
      "status": status
    }
    await jobTypeAllApis.addJobTypes(
      dataBlock,
      (res) => {
        setJobTypes(res);
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };

  const EditJob = async () => {
    const dataBlock ={
      "jobId": jobId,
      "jobName": jobName,
      "jobStatus": status
    }
    await jobTypeAllApis.EditJobType(
      dataBlock,
      (res) => {
        setJobTypes(res);
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };


  const DeleteJobTypes = async (Id) => {
    
    await jobTypeAllApis.DeleteJobType(
      Id,
      (res) => {
        setJobTypes(res);
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };

  const getSingleJobType = async (Id) => {
    console.log(Id)
    await jobTypeAllApis.getSingleJobType(
      Id,
      (res) => {
        setSingleJobTypes(res.singleJobType);
        setJobName(res.singleJobType.jobName);
        setStatus(res.singleJobType.jobStatus);
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };



console.log(singleJobTypes)
// console.log(jobTypes.jobType)
// console.log(status,jobName,jobId)




  return( <div>
	{/* <!-- Page Content --> */}
                <div class="content container-fluid">
				
					<Header />
					<MainBodyJobType setJobId={setJobId} jobTypes={jobTypes} getSingleJobType={getSingleJobType} status={status}/>
					
                </div>
				
				
				<AddJobType setJobName ={setJobName} setStatus={setStatus} addJobTypes={addJobTypes}/>
			
 
                <EditJobTypes singleJobTypes={singleJobTypes} EditJob={EditJob} setJobName={setJobName} setStatus={setStatus} jobStatus={jobName} jobName={jobName}/>
				
                <DeleteJobType DeleteJobTypes={DeleteJobTypes} jobId={jobId}/>
				
  </div>);
}

export default JobTypes;
