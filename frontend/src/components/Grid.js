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
  word-break: break-word;
`;

// Estilos do cabeçalho e corpo da tabela
export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;

// Estilos para as células do cabeçalho
export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.$onlyWeb && "display: none"}
  }
`;

// Estilos para as células do corpo da tabela
export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.$alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.$onlyWeb && "display: none"}
  }
`;

// Estilos para os botões de ação (Editar/Excluir)
const IconButton = styled.div`
  cursor: pointer;
  display: inline-block;
  padding: 5px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Grid = ({ jogos, setJogos, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8800/${id}`);
      setJogos((prev) => prev.filter((jogo) => jogo.id !== id));
      toast.success(response.data);
    } catch (error) {
      toast.error("Erro ao deletar jogo.");
    }
    setOnEdit(null);
  };

  // Ordena os jogos pela data antes de exibi-los
  const sortedJogos = [...jogos].sort(
    (a, b) => new Date(b.data) - new Date(a.data)
  );

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Adversário</Th>
          <Th $onlyWeb>Local</Th>
          <Th $onlyWeb>Data</Th>
          <Th>Resultado</Th>
          <Th>Ações</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sortedJogos.map((item, i) => (
          <Tr key={i}>
            <Td width="25%">{item.adversario}</Td>
            <Td $onlyWeb width="35%">
              {item.local}
            </Td>
            <Td $onlyWeb width="15%">
              {item.data}
            </Td>
            <Td width="15%">{item.resultado}</Td>
            <Td $alignCenter width="10%">
              <IconButton onClick={() => handleEdit(item)}>
                <FaEdit size={20} />
              </IconButton>
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
