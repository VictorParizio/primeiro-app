import './App.css';
// import Button from './components/button/button'
import Card from './components/card/card'

function App() {
  return (
    <>
      <Card>
        <h3>Título card 1</h3>
        <p>esse é o texto do card 1</p>
      </Card>

      <Card>
        <h3>Título card 2</h3>
        <p>esse é o texto do card 2</p>
      </Card>
      
      <Card>
        <h3>Título card 3</h3>
        <p>esse é o texto do card 3</p>
      </Card>
    </>
  );
}

export default App;