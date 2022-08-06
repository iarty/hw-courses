import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import MenuItems from "../components/MenuItems";
import { useFetch } from "../hooks/useFetch";

export default function HomeScreen() {
  const { request } = useFetch();
  const [dishes, setDishes] = useState([]);

  const dataHandler = async () => {
    const response = await request("dishes");
    const dishes = Object.keys(response).map(key => ({
      id: key,
      ...response[key]
    }));
    setDishes(dishes);
  };

  useEffect(() => {
    dataHandler();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text />
      </View>

      <ScrollView style={styles.container}>
        {dishes.map((dish, index) => (
          <MenuItems
            key={index}
            name={dish.name}
            price={dish.price}
            image={dish.url}
            id={dish.id}
          />
        ))}
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: "Arty Pizza Station",
  headerStyle: {
    backgroundColor: "#f4511e"
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  }
});
