import React from 'react'
import checkboxUnchecked from '../../assets/Checkbox.svg'
import checkboxChecked from '../../assets/CheckboxChecked.svg'
import classes from './Aside.module.scss'

const Aside: React.FC = () => {
  return (
    <aside className={classes.aside}>
      <div className={classes['aside-title']}>
        Количество пересадок
      </div>
      <form className={classes['aside-form']}>
        <label className={classes['custom-checkbox']}>
          <input type="checkbox" name="option1" value="option1" className={classes['checkbox']} />
          <span className={classes['checkbox-label']}>
            <img src={checkboxUnchecked} alt="" width='20px' height={'20px'} className={classes.unchecked} />
            <img src={checkboxChecked} alt="" width='20px' height={'20px'} className={classes.checked} />            Все
          </span>
        </label>
        <label className={classes['custom-checkbox']}>
          <input type="checkbox" name="option2" value="option2" className={classes['checkbox']} />
          <span className={classes['checkbox-label']}>
            <img src={checkboxUnchecked} alt="" width='20px' height={'20px'} className={classes.unchecked} />
            <img src={checkboxChecked} alt="" width='20px' height={'20px'} className={classes.checked} />            Без пересадок
          </span>
        </label>
        <label className={classes['custom-checkbox']}>
          <input type="checkbox" name="option3" value="option3" className={classes['checkbox']} />
          <span className={classes['checkbox-label']}>
            <img src={checkboxUnchecked} alt="" width='20px' height={'20px'} className={classes.unchecked} />
            <img src={checkboxChecked} alt="" width='20px' height={'20px'} className={classes.checked} />
            1 пересадка
          </span>
        </label>
        <label className={classes['custom-checkbox']}>
          <input type="checkbox" name="option4" value="option4" className={classes['checkbox']} />
          <span className={classes['checkbox-label']}>
            <img src={checkboxUnchecked} alt="" width='20px' height={'20px'} className={classes.unchecked} />
            <img src={checkboxChecked} alt="" width='20px' height={'20px'} className={classes.checked} />            2 пересадки
          </span>
        </label>
        <label className={classes['custom-checkbox']}>
          <input type="checkbox" name="option5" value="option5" className={classes['checkbox']} />
          <span className={classes['checkbox-label']}>
            <img src={checkboxUnchecked} alt="" width='20px' height={'20px'} className={classes.unchecked} />
            <img src={checkboxChecked} alt="" width='20px' height={'20px'} className={classes.checked} />            3 пересадки
          </span>
        </label>
      </form>
    </aside>
  )
}

export default Aside
