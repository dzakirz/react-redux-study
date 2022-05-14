import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input,
  button {
    font: inherit;
    padding: 0.5rem;
  }

  input {
    text-align: center;
    max-width: 2.5em;
  }

  button {
    font-size: 2rem;
    margin: 0.5em 0 0.5em 0.5em;
    min-width: 2em;
  }

  button:first-child {
    margin-left: 0;
  }
`