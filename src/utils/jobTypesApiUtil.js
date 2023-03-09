import { apiUrl } from "../constants/apiUrl";
import { jobTypesApiUrl } from "../constants/jobsTypesApi";

import { apiHelper, httpMethodTypes } from "../helpers/apiHelper";

export const jobTypeAllApis = { getJobTypes,addJobTypes,EditJobType,DeleteJobType,getSingleJobType}; //, addJobTypes 

function getJobTypes(successCallBack, errorCallBack) {
  let requestOptions = apiHelper.createRequestOptions(httpMethodTypes.GET);
  apiHelper.sendRequest(
    apiUrl.base + jobTypesApiUrl.getJobType,
    requestOptions,
    successCallBack,
    errorCallBack
  );
}

function addJobTypes(dataBlock, successCallBack, errorCallBack) {
  let requestOptions = apiHelper.createRequestOptions(
    httpMethodTypes.POST,
    false,
    dataBlock
  );
  apiHelper.sendRequest(
    apiUrl.base + jobTypesApiUrl.addJobType,
    requestOptions,
    successCallBack,
    errorCallBack
  );
}

function EditJobType(dataBlock, successCallBack, errorCallBack) {
  let requestOptions = apiHelper.createRequestOptions(
    httpMethodTypes.PUT,
    false,
    dataBlock
  );
  apiHelper.sendRequest(
    apiUrl.base + jobTypesApiUrl.updateJobType,
    requestOptions,
    successCallBack,
    errorCallBack
  );
}

function DeleteJobType(Id, successCallBack, errorCallBack) {
  let requestOptions = apiHelper.createRequestOptions(
    httpMethodTypes.DELETE
  );
  apiHelper.sendRequest(
    apiUrl.base + jobTypesApiUrl.deleteJobs +Id,
    requestOptions,
    successCallBack,
    errorCallBack
  );
}

function getSingleJobType(Id, successCallBack, errorCallBack) {
  let requestOptions = apiHelper.createRequestOptions(
    httpMethodTypes.GET
  );
  apiHelper.sendRequest(
    apiUrl.base + jobTypesApiUrl.getSingleJobTypes +Id,
    requestOptions,
    successCallBack,
    errorCallBack
  );
}