import React from "react";
// import { Link } from "react-router-dom";
import Images from "../images";
import Alliances from "../data/alliances";
import styles from "../styles/modules/main.module.scss";
import ConnectWallet from "./SelectWallet";
import { Routes } from "../util/routes";

const temp:any[] = [];
Alliances.forEach(option => temp.push({ value: option.name, label: option.name }));
export const options = temp;


const Main = () => {
    return (
        <>
            <main className={` ${styles.flex_cr}`}>
                <section className={styles.intro}>
                    <h2>
                        Revolutionizing <br />
                        the Cryptoverse.
                    </h2>
                    <div>
                        Luffy wants to revolutionize the cryptoverse by creating a matchless ecosystem combined with an own blockchain.
                    </div>
                </section>
                <section className={styles.flex_c}>
                    <div className={styles.mt}>BALANCES</div>
                    <div>
                        <div className={styles.flex}><span className={styles.flex_r}><img src={Images.onealliance} width={60} height={60} alt={`${Images.onealliance} images`} /> LUFFY V2</span> <span><a href={Routes.external.luffy} className="button flex">Connect wallet</a></span></div>
                    </div>
                    <div className={`${styles.alliances} ${styles.flex_c} ${styles.mb}`}>
                        {
                            Alliances.map(alliance => <div className={styles.flex} key={alliance.name}><span className={styles.flex_r}><img src={alliance.img} width={60} height={60} alt={`${alliance.name} images`} /> ${alliance.name}</span> <span>${alliance.unit}</span></div>
                            )
                        }
                    </div>
                </section>
                <section className={styles.flex_c}>
                    <div className={styles.mt}>SWAP FOR LUFFY V2</div>
                    <div className={styles.connect}>
                        <ConnectWallet defaultValue={options[3].label}/>                        
                        <ConnectWallet defaultValue={options[0].label}/>                        
                        
                    </div>
                    <div className={`${styles.mb} flex_c`}><a href={Routes.external.luffy} className="w100 flex_r">Connect Wallet</a></div>
                </section>
            </main>
        </>
    )
}
export default Main 