import axios from "axios";
export type ApiContainerState = {
  url: string;
};
const envurl = "https://snaazmnpbf.execute-api.ap-south-1.amazonaws.com/dev/getMetaData";
export const fetchMetaData = async (url: string) => {
  console.log(url);
  try {
    const resp = await axios.post(envurl, {
       url
    });
    console.log(resp);
    return resp;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const registerCall = async (
  emailId: string,
  passWord: string,
  userName: string
) => {
  try {
    const resp = await axios.post("http://localhost:3000/register", {
      emailId,
      passWord,
      userName
    });
    console.log(resp);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
