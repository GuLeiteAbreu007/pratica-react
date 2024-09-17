import styles from './App.css';
import Card from '../Card/Card.jsx'
import check from '../../assets/check.svg'
import x from '../../assets/x.svg'

let preco1 = 0
let preco2 = 99
let preco3 = 199

function App() {
  return (
    <div>
      <Card titulo1='FREE' titulo2='PREMIUM' titulo3='PRO' check_path={check} x_path={x} preco1={preco1} preco2={preco2} preco3={preco3}></Card>
    </div>
    );
}

export default App;
