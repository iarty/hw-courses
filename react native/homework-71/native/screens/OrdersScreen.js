import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import OrderItem from "../components/OrdersItem";
import { useFetch } from "../hooks/useFetch";
import { clearState } from "../store/actions";

export default function OrdersScreen() {
  const { orders, isComplete } = useSelector(state => state);
  const dispatch = useDispatch();
  const { request } = useFetch();
  const delivery = 150;
  let total = 0;
  orders.forEach(el => (total += el.price * el.amount));

  const sendData = async () => {
    const data = {};
    orders.forEach(el => (data[el.id] = el.amount));
    await request("orders", "POST", data);
    dispatch(clearState());
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headline}>Your orders:</Text>
        <View
          underlayColor={"#fff"}
          style={{
            backgroundColor: !isComplete ? "#f79999" : "#63bf7c",
            paddingHorizontal: 10,
            margin: 5
          }}
        >
          {!!orders.length ? (
            orders.map((el, index) => (
              <OrderItem
                key={index}
                name={el.name}
                id={el.id}
                price={el.price}
                amount={el.amount}
              />
            ))
          ) : isComplete ? (
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                Complete!
              </Text>
            </View>
          ) : (
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                No Orders!!!
              </Text>
            </View>
          )}
        </View>
        {!!orders.length && (
          <View style={styles.totalWrap}>
            <Text style={styles.totalText}>Delivery {delivery} KSG</Text>
            <Text style={styles.totalText}>Total {delivery + total} KSG</Text>
          </View>
        )}
      </View>
      {!!orders.length && (
        <View
          style={{
            width: 150,
            alignSelf: "center",
            marginRight: 20,
            bottom: 15,
            position: "absolute"
          }}
        >
          <Button
            icon={
              <Icon
                name="truck"
                size={20}
                color="white"
                style={{ marginRight: 5 }}
              />
            }
            title="Order"
            onPress={sendData}
          />
        </View>
      )}
    </View>
  );
}

OrdersScreen.navigationOptions = {
  title: "Orders",
  headerStyle: {
    backgroundColor: "#f4511e"
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  headline: {
    fontSize: 30,
    margin: 15
  },
  totalText: {
    fontSize: 18,
    margin: 10,
    marginRight: 20,
    textAlign: "right"
  }
});
