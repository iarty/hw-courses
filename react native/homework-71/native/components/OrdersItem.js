import React from "react";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { deletePizza } from "../store/actions";
import { useFetch } from "../hooks/useFetch";

const OrdersItem = ({ name, price, amount, id }) => {
  const dispatch = useDispatch();

  const removePizza = id => {
    dispatch(deletePizza(id));
  };

  return (
    <View style={styles.list}>
      <Text style={{ fontSize: 18 }}>
        {name} x{amount}
      </Text>
      <View style={styles.btnWrap}>
        <Text style={{ fontWeight: "bold", marginRight: 10 }}>
          {price * amount} KGS
        </Text>
        <Button
          type="clear"
          icon={<Icon name="trash" size={30} color="white" />}
          onPress={() => removePizza(id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10
  },
  btnWrap: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default OrdersItem;
