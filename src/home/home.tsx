import styled from 'styled-components'

const App = styled.div`
  text-align: center;
` 

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export default () => {
  return (
    <App>
      <Header>
        home page
      </Header>
    </App>
  );
}

