import React from "react";
import { useState, useEffect } from "react";
// import TweetServices from "../services/TweetServices";

function Feed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // setTweets(TweetServices.getAllTweets());
    // console.log(tweets);

    fetch("/Tweet")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setTweets(response);
      });
  }, []);

  return (
    <div>
      {tweets.map((tweet) => (
        <li key={tweet.tweetername}>{tweet.content}</li>
      ))}
    </div>
  );
}

export default Feed;
