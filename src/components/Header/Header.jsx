import classes from './Header.module.scss'

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='./assets/img/logo.png' alt='yima'/>
            {/* <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png' alt='logo' /> */}
        </header>
    );
}

export default Header