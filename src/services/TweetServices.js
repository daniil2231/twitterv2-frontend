import api from "./Http-common";

const getAllTweets = () => {
  return api.get("/Tweet").then((response) => {
    return response.data;
  });
};

const TweetServices = {
  getAllTweets,
};

export default TweetServices;
