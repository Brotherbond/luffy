import { MouseEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Images from "../images";
import styles from "../styles/modules/header.module.scss";
import { Routes } from "../util/routes";

const Header = (): JSX.Element => {
    const close: boolean = true
    const [nav, setNav] = useState(close)
    const NavOptions = (e: MouseEvent): void => {
        e.stopPropagation()
        setNav(!nav)
    }
    useEffect(() => {
        const resetHeader = () => setNav(close)
        window.addEventListener('click', resetHeader)
        return () => window.removeEventListener('click', resetHeader)
    }, [close])

    return (
        <>
            <header className={styles.header}>
                <Link to={Routes.home}>
                    <img src={Images['Logo']} alt="logo" height={75} />
                </Link>
                <nav id="nav" className={`${nav ? "none_t" : ""} flex_cr`}>
                    <a href={Routes.external.uniswap} className={styles.button}>How to Swap</a>
                    <a href={Routes.external.pricing} className={styles.button}>Pricing</a>
                </nav>

                <span id={styles.icon} className="show_t" onClick={NavOptions}>
                    <svg className={`${!nav ? "none_t" : ""} `} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                        <path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#fff" stroke="#fff"
                            strokeWidth="1.5" />
                        <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
                    </svg>
                    <svg className={`${nav ? "none_t" : ""} `} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                        clipRule="evenodd">
                        <path
                            d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"
                            fill="#fff" stroke="#fff" strokeWidth="1.5" />
                    </svg>
                </span>

            </header>
        </>
    )
}
export default Header 