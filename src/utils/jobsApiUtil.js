import { apiUrl } from "../constants/apiUrl";
import { jobsApiUrl } from "../constants/jobsApiUrl";

import { apiHelper, httpMethodTypes } from "../helpers/apiHelper";

export const jobsAllApis = { getJobs, addJobs };

function getJobs(successCallBack, errorCallBack) {
  let requestOptions = apiHelper.createRequestOptions(httpMethodTypes.GET);
  apiHelper.sendRequest(
    apiUrl.base + jobsApiUrl.getJobs,
    requestOptions,
    successCallBack,
    errorCallBack
  );
}

function addJobs(dataBlock, successCallBack, errorCallBack) {
  let requestOptions = apiHelper.createRequestOptions(
    httpMethodTypes.POST,
    false,
    dataBlock
  );
  apiHelper.sendRequest(
    apiUrl.base + jobsApiUrl.addJobs,
    requestOptions,
    successCallBack,
    errorCallBack
  );
}
