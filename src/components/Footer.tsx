import Images from "../images"
import styles from "../styles/modules/footer.module.scss"
import { Routes } from "../util/routes"

const Footer = () => {

    return (
        <>
            <footer className={`${styles.footer || ""}`}>
                <div className="flex_r">
                    <a className="flex_r" href={Routes.external.myGithub} target="_blank">
                        <img src={Images.github} alt="github image" />
                      <span>
                        By Brotherbond
                      </span>
                    </a>
                </div>
                <div> &copy; {new Date().getFullYear()}</div>
            </footer>
        </>
    )
}
export default Footer 