import React, { useEffect } from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Title,
  Text
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import ContactItem from "../components/ContactItem";
import { getContacts } from "../store/actions/contactsActions";
import { useDispatch, useSelector } from "react-redux";
import ArtyModal from "../components/ArtyModal";
import { ActivityIndicator } from "react-native";

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts, toggler, loading } = useSelector(state => state);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <Container>
      <Header>
        <Title style={{ marginTop: 20 }}>
          Contacts Book{" "}
          <Ionicons name="md-contacts" size={20} style={{ marginRight: 15 }} />
        </Title>
      </Header>
      <Content style={{ backgroundColor: "#f7f7f7" }}>
        {toggler && <ArtyModal />}
        {!contacts.length && loading ? (
          <ActivityIndicator size="large" color="#0000ff" style={{marginTop:50}}/>
        ) : (
          contacts.map(contact => (
            <ContactItem
              key={contact.id}
              name={contact.name}
              id={contact.id}
              imageUrl={contact.avatarUrl}
            />
          ))
        )}
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default Contacts;
