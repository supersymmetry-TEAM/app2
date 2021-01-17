import axios from "axios";


const callApi = async (method, path, data, jwt) => 
{
    const headers = {
        Authorization: `Bearer ${jwt}`,
        "Content-Type" : "application/json"
    };
    
    const baseUrl = "http://13.124.7.115:7777";

    const fullUrl = baseUrl + path;
    if (method === "get" || method === "delete"){
        return axios[method](fullUrl, { headers });
    } else {
        return axios[method](fullUrl, data, { headers });
    }
};



export default {

    createAccount: form => callApi("post", "/usrs/v1/", form),

    login: form => callApi("post", "/usrs/v1/login/", form),
    
    foods_by_name: (search, page,token) => 
       callApi("get", `/nutfood/search_nut/?pd_name=${search}&page=${page}`,null,token),
    
    nute_by_name: (foodname,token) => callApi ("get", `/search_nut/?pd_name=${foodname}`,null,token)
  };