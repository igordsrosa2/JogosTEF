import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

// Estilos para a tabela
const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

// Estilos do cabeçalho da tabela
export const Thead = styled.thead``;
export const Tbody = styled.tbody``;

// Estilos para as linhas da tabela
export const Tr = styled.tr``;

// Estilos para as células da tabela
export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

// Estilos para os ícones
const IconButton = styled.div`
  cursor: pointer;
  display: inline-block;
  padding: 5px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

const Grid = ({ jogos, setJogos, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = jogos.filter((jogo) => jogo.id !== id);
        setJogos(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  // Ordena os jogos pela data antes de exibi-los
  const sortedJogos = jogos.sort((a, b) => new Date(b.data) - new Date(a.data));

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Adversário</Th>
          <Th onlyWeb>Local</Th>
          <Th onlyWeb>Data</Th>
          <Th>Resultado</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sortedJogos.map((item, i) => (
          <Tr key={i}>
            <Td width="25%">{item.adversario}</Td>
            <Td onlyWeb width="35%">
              {item.local}
            </Td>
            <Td onlyWeb width="15%">
              {item.data}
            </Td>
            <Td width="15%">{item.resultado}</Td>
            <Td alignCenter width="5%">
              <IconButton onClick={() => handleEdit(item)}>
                <FaEdit size={20} />
              </IconButton>
            </Td>
            <Td alignCenter width="5%">
              <IconButton onClick={() => handleDelete(item.id)}>
                <FaTrash size={20} />
              </IconButton>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
