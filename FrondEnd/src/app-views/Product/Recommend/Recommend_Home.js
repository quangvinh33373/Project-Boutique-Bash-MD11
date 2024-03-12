import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ListRecommend_Home from "./component/ListRecommend_Home";
import config from "../../../../config";

const Recommend_Home = () => {
  const IP = config.IP;

  const [data, setData] = useState([]);
  const getAPI = () => {
    return fetch(`http://${IP}:3000/API/product`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAPI();
  }, []);
  return (
    <>
      <View>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: "#fff",
            paddingBottom: 7,
          }}
        >
          <ListRecommend_Home data={data} />
        </View>
      </View>
    </>
  );
};
export default Recommend_Home;
