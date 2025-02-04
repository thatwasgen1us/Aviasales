import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import logo from '../../assets/Logo.svg'
import { toggleCounter } from '../../redux/action'
import Filter from '../Aside/Filter'
import Cards from '../Cards/Cards'
import RadioButtons from '../RadioButtons/RadioButtons'
import classes from './App.module.scss'

const App: React.FC = () => {
  const dispatch = useDispatch();

  const handleCountPage = () => {
    dispatch(toggleCounter);
  };
  return (
    <>
      <div className={classes.container}>
        <img src={logo} alt="Aviasales" className={classes.logo} />
        <main className={classes.main}>
          <Filter />
          <section className={classes.cards}>
            <RadioButtons />
            <Cards />
            <Button
              type="primary"
              size="large"
              onClick={() => handleCountPage()}
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
