import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image, Text, Linking } from "react-native";
import * as MailComposer from "expo-mail-composer";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Incidents() {
  const navigation = useNavigation();
  const message =
    'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de  R$120,00';

  function navigateBack() {
    navigation.goBack();
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: "Herói do caso: Cadelinha atrpelada",
      recipients: ["diego@rocketseat.com.br"],
      body: message
    });
  }

  function sendWpp() {
    Linking.openURL(`whatsapp://send?phone=22998399070?text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incidents}>
        <Text style={(styles.incidentProperty, { marginTop: 0 })}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProperty}>Caso:</Text>
        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

        <Text style={styles.incidentProperty}>Valor:</Text>
        <Text style={styles.incidentValue}>R$ 120,00</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroTitlDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWpp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendEmail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}