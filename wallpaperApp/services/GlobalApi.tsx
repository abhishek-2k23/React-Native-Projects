import axios from "axios"

const axiosClient = axios.create({
  baseURL: "http://192.168.77.241:1337/api",
  headers: {
    'Authorization': 'Bearer ' + process.env.EXPO_PUBLIC_STRAPI_API_TOKEN,
  },
})

const getUserInfo =  (email: string) => {
  return axiosClient.get("/user-lists?find[userEmail][$eq]=" + email)
}
const createUser = (data: { userEmail: string; userName: string }) =>
  axiosClient.post("user-lists",{data: data})

export default { getUserInfo, createUser}
