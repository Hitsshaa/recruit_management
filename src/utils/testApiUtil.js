import { apiUrl } from "../constants/apiUrl";
import { apiHelper, httpMethodTypes } from "../helpers/apiHelper";

export const testApis = { testApi };

function testApi(successCallBack, errorCallBack) {
  let requestOptions = apiHelper.createRequestOptions(httpMethodTypes.GET);
  apiHelper.sendRequest(
    apiUrl.base,
    requestOptions,
    successCallBack,
    errorCallBack
  );
}
