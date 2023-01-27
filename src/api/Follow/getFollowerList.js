import { axiosPrivate } from '../api';

const getFollowersList = async (account) => {
  try {
    const response = await axiosPrivate.get(
      `/profile/${account}/follower?limit=1000`
    );
    return response.data;
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
  return null;
};
export default getFollowersList;
