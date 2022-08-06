import React from "react";
import { useDispatch } from "react-redux";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { pickPizza } from "../store/actions";

const MenuItems = ({ name, price, image, id }) => {
  const dispatch = useDispatch();

  const clickHandler = payload => {
    dispatch(pickPizza(payload));
  };

  return (
    <TouchableOpacity
      style={styles.listItem}
      underlayColor={"#fff"}
      onPress={() =>
        clickHandler({
          id,
          name,
          price,
          amount: 1
        })
      }
    >
      <Image
        style={styles.image}
        source={{
          uri: image
        }}
        resizeMode={"contain"}
      />

      <Text>{name}</Text>
      <Text>{price} KGS</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50
  },
  listItem: {
    paddingHorizontal: 10,
    margin: 5,
    backgroundColor: "#f79999",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10
  }
});

export default MenuItems;
