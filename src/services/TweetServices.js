// import api from "./Http-common";

const getAllTweets = () => {
  // return api.get("/Tweet/").then((response) => {
  //   return response.data;
  // });
  fetch("/Tweet")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    });
};

const TweetServices = {
  getAllTweets,
};

export default TweetServices;
