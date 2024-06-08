import { commonApi } from "./commonApi";
import { serverURL } from "./urlServer";


//api for book an appointment
export const bookingApi = async(reqbody)=>{
    return await commonApi('POST',`${serverURL}/details`,reqbody)
 }
 export const getbookingApi =  async()=>{
    return await commonApi('GET',`${serverURL}/details`,"")
}

export const deleteBookingApi = async(id)=>{
   return await commonApi('DELETE',`${serverURL}/details/${id}`,{});
}
export const profileApi = async(reqbody)=>{
   return await commonApi('POST',`${serverURL}/profile`,reqbody)
}
export const getprofileApi =  async()=>{
   return await commonApi('GET',`${serverURL}/profile`,"")
}
export const updateProfile = async (id, reqBody) => {
   return await commonApi('PUT', `${serverURL}/profile/${id}`, reqBody);
 };
 export const RegisterApi = async(reqbody)=>{
   return await commonApi('POST',`${serverURL}/auth`,reqbody)
}
export const loginApi =  async()=>{
   return await commonApi('GET',`${serverURL}/auth`,"")
}
//api for feedback
export const feedbackApi = async(reqbody)=>{
   return await commonApi('POST',`${serverURL}/feedback`,reqbody)
}
export const getFeedback =  async()=>{
   return await commonApi('GET',`${serverURL}/feedback`,"")
}