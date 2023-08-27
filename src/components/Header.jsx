import './Header.css'

const Header = () => {

    const date = new Date();
    let currentDay= String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    let currentYear = date.getFullYear();


    return (
        <>
        <h1 className="header-title">Tarefas</h1>
        <p className='header-date'>{`${currentDay}/${currentMonth}/${currentYear}`}</p>
        </> 
     );
}
 
export default Header;