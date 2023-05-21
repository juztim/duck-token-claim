import {Web3Button} from "@thirdweb-dev/react";
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
          Claim your tokens using the button below!
        </p>

        <div className={styles.connect}>
          <Web3Button
              contractAddress="0x2Da3a9d7bCEcECfa4f69fb46Fd2e9F0ded2AE12e"
              action={(contract) => contract.erc20.claim(1)}
              onSuccess={() => alert("Claimed!")}
              onError={(err) => alert(err)}
          >Claim</Web3Button>
        </div>

      </main>
    </div>
  );
};

export default Home;
