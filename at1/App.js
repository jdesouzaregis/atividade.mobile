import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  const [saudacao, setSaudacao] = useState("");

  const atualizarSaudacao = () => {
    const horaAtual = new Date().getHours();
    let mensagem = "";

    if (horaAtual < 12) {
      mensagem = `Bom dia, ${nome}! Bem-vindo(a) ao nosso App!`;
    } else if (horaAtual < 18) {
      mensagem = `Boa tarde, ${nome}! Bem-vindo(a) ao nosso App!`;
    } else {
      mensagem = `Boa noite, ${nome}! Bem-vindo(a) ao meu App!`;
    }

    setSaudacao(mensagem);
  };

  const limparCampos = () => {
    setNome("");
    setSaudacao("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Saudação Personalizada</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <View style={styles.botoes}>
        <Button title="Atualizar Saudação" onPress={atualizarSaudacao} />
        <Button title="Limpar" color="red" onPress={limparCampos} />
      </View>
      {saudacao ? <Text style={styles.saudacao}>{saudacao}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "100%",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  saudacao: {
    fontSize: 20,
    color: "#555",
    marginTop: 20,
  },
});