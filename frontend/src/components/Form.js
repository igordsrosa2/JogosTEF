import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #003049;
  color: white;
  height: 42px;
`;

const Form = ({ onEdit, setOnEdit, getJogos }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const jogo = ref.current;

      // Preenche os campos apenas se os valores forem definidos
      jogo.adversario.value = onEdit.adversario || "";
      jogo.local.value = onEdit.local || "";
      jogo.data.value = onEdit.data || "";
      jogo.resultado.value = onEdit.resultado || "";
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jogo = ref.current;

    // Verificação de preenchimento dos campos
    if (
      !jogo.adversario.value ||
      !jogo.local.value ||
      !jogo.data.value ||
      !jogo.resultado.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }
    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          adversario: jogo.adversario.value,
          local: jogo.local.value,
          data: jogo.data.value,
          resultado: jogo.resultado.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          adversario: jogo.adversario.value,
          local: jogo.local.value,
          data: jogo.data.value,
          resultado: jogo.resultado.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    jogo.adversario.value = "";
    jogo.local.value = "";
    jogo.data.value = "";
    jogo.resultado.value = "";

    setOnEdit(null);
    getJogos();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Adversário</Label>
        <Input name="adversario" />
      </InputArea>
      <InputArea>
        <Label>Local</Label>
        <Input name="local" />
      </InputArea>
      <InputArea>
        <Label>Data</Label>
        <Input name="data" type="date" />
      </InputArea>
      <InputArea>
        <Label>Resultado</Label>
        <Input name="resultado" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
