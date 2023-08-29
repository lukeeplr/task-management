import './Header.css'
import Alert from './Alert';
import { useGlobalContext } from './Context';

const Header = () => {

    const { alert } = useGlobalContext()

    const date = new Date();
    let currentDay= String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    let currentYear = date.getFullYear();


    return (
        <>
        {alert.active && <Alert/>}
        <h1 className="header-title">TAREFAS</h1>
        <p className='header-date'>{`${currentDay} / ${currentMonth} / ${currentYear}`}</p>
        </> 
     );
}
 
export default Header;