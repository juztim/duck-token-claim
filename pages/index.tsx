import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="http://duck.vip/">Uglyduck</a>!
        </h1>

        <p className={styles.description}>
          Claim your tokens by connecting your wallet using the button below!
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

      </main>
    </div>
  );
};

export default Home;
