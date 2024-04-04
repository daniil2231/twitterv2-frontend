import React from "react";
import { useState, useEffect } from "react";
import TweetServices from "../services/TweetServices";

function Test() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    TweetServices.getAllTweets().then((response) => {
      setTweets(response);
    });
  }, []);
  console.log(tweets);

  return (
    <div>
      {tweets.map((tweet) => (
        <li key={tweet.id}>{tweet.content}</li>
      ))}
    </div>
  );
}

export default Test;
