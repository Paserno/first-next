import { ActiveLink } from "./ActiveLink"
// Implementar /style.moudle.css para las importaciones de elementos css que permiten classes.
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={styles['menu-container']}>
            <ActiveLink text="Home" href='/' />
            <ActiveLink text="About" href='/about' />
            <ActiveLink text="Contact" href='/contact' />
        </nav>
    )
}
