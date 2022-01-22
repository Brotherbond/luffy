import Images from "../images"
import styles from "../styles/modules/footer.module.scss"
import { Routes } from "../util/routes"

const Footer = (): JSX.Element =>
            <footer className={`${styles.footer || ""}`}>
                <div className="flex_r">
                    <a className="flex_r" href={Routes.external.myGithub} target="_blank" rel="noreferrer">
                        <img src={Images.github} alt="github" />
                      <span>
                        By Brotherbond
                      </span>
                    </a>
                </div>
                <div> &copy; {new Date().getFullYear()}{/*Intentionally made to show current n not production year*/}</div>
            </footer>
export default Footer 