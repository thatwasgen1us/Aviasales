import { Button } from 'antd'
import classes from './App.module.scss'
import logo from '../../assets/Logo.svg'
import Aside from '../Aside/Aside'
import RadioButtons from '../RadioButtons/RadioButtons'
import Cards from '../Cards/Cards'

const App: React.FC = () => {
  return (
    <>
      <div className={classes.container}>
        <img src={logo} alt="Aviasales" className={classes.logo} />
        <main className={classes.main}>
          <Aside />
          <section className={classes.cards}>
            <RadioButtons />
            <Cards />
            <Button
              type="primary"
              size="large"
            >
              Показать ещё 5 билетов!
            </Button>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
