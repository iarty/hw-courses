import React, { useEffect } from "react";
import {
  Modal,
  Text,
  View,
  Alert,
  Image,
  ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { getContactById, modalHandler } from "../store/actions/contactsActions";

const ArtyModal = () => {
  const { toggler, contact, id, loading } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactById(id));
  }, []);

  const handlerModal = () => {
    dispatch(modalHandler());
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={toggler}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        {loading && !contact.length ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={{ marginTop: 50 }}
          />
        ) : (
          <>
            <View
              style={{
                marginTop: 22,
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 30,
                    marginBottom: 10,
                    textAlign: "center"
                  }}
                >
                  {contact.name}
                </Text>
                <Image
                  style={{ width: 300, height: 300 }}
                  source={{
                    uri: contact.avatarUrl
                  }}
                  resizeMode={"contain"}
                />
                <View style={{ marginTop: 10, padding: 20 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Ionicons
                      name="md-call"
                      size={30}
                      style={{ marginRight: 15 }}
                    />
                    <Text style={{ fontSize: 25, marginBottom: 20 }}>
                      {contact.number}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Ionicons
                      name="md-mail"
                      size={30}
                      style={{ marginRight: 15 }}
                    />
                    <Text style={{ fontSize: 25 }}>{contact.email}</Text>
                  </View>
                </View>
              </View>
            </View>
            <Button
              style={{
                paddingHorizontal: 50,
                paddingVertical: 30,
                position: "absolute",
                bottom: 20,
                left: "38%"
              }}
              onPress={handlerModal}
            >
              <Text style={{ color: "#fff" }}>Exit</Text>
              <Ionicons
                name="md-exit"
                size={20}
                style={{ color: "#fff", marginLeft: 10, marginTop: 3 }}
              />
            </Button>
          </>
        )}
      </Modal>
    </View>
  );
};

export default ArtyModal;
