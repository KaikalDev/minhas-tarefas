import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40;
  font-size: 18px;
  font-weight: bold;
`
export const Campo = styled.input`
  border-radius: 8px;
  color: #666666;
  border: 2px solid #666666;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  width: 100%;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 8px;
  background-color: ${variaveis.azulEscuro};
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export default EstiloGlobal