import styled from '@emotion/styled';

export const FormContainer = styled.form`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;

  .form-control {
    margin-bottom: 1rem;
  }
`;

export const LabelContainer = styled.label`
  display: block;
  width: 100%;
  font-weight: bold;
`;

export const InputContainer = styled.input`
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.25rem;

  &:focus {
    outline: none;
    border-color: #50005a;
  }
`;

export const ButtonContainer = styled.button`
  background-color: #50005a;
  border: 1px solid #50005a;
  color: white;
  padding: 0.5rem 1.5rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background-color: #6a0a77;
    border-color: #6a0a77;
  }
`;
