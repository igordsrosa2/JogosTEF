import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Footer from "./components/Footer.js";

const StatsCard = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  width: 95%;
  text-align: center;
  max-width: 800px;
  margin-bottom: 100px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2`
  padding: 30px;
  font-size: 32px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-top: -40px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;

function App() {
  const [jogos, setJogos] = useState([]);
  const [onEdit, setOnEdit] = useState([null]);
  const [stats, setStats] = useState({ vitorias: 0, derrotas: 0, empates: 0 });

  const getJogos = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      const sortedJogos = res.data.sort((a, b) =>
        a.adversario > b.adversario ? 1 : -1
      );
      setJogos(sortedJogos);
      calculateStats(sortedJogos);
    } catch (error) {
      toast.error(error);
    }
  };

  const calculateStats = (jogos) => {
    let vitorias = 0,
      derrotas = 0,
      empates = 0;

    jogos.forEach((jogo) => {
      if (jogo.resultado === "Vitória") {
        vitorias++;
      } else if (jogo.resultado === "Derrota") {
        derrotas++;
      } else if (jogo.resultado === "Empate") {
        empates++;
      }
    });

    setStats({ vitorias, derrotas, empates });
  };

  useEffect(() => {
    getJogos();
  }, [setJogos]);

  return (
    <>
      <Container>
        <Title>JOGOS DO TEF EM 2025</Title>
        <Subtitle>
          Tabela para controle dos jogos realizados pelo clube TEF em 2025
        </Subtitle>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getJogos={getJogos} />
        <Grid jogos={jogos} setJogos={setJogos} setOnEdit={setOnEdit} />

        {/* Card de Estatísticas */}
        <StatsCard>
          <h3>Estatísticas</h3>
          <p>Vitórias: {stats.vitorias}</p>
          <p>Derrotas: {stats.derrotas}</p>
          <p>Empates: {stats.empates}</p>
        </StatsCard>
      </Container>
      <Footer
        socialLinks={[
          { name: "GitHub", url: "https://github.com/igordsrosa2" },
          { name: "LinkedIn", url: "https://linkedin.com/in/igordsrosa" },
        ]}
      />
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  );
}

export default App;
