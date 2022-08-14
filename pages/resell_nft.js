import { useAddress } from "@thirdweb-dev/react";
import Resell from "../components/resell/create";
import Cover from "../components/cover/Cover";
import styles from "../styles/Theme.module.scss";

export default function Listings() {
  const address = useAddress();

  return (
<>
        {address ? (
    <Resell />
        ) : (
        <div className={styles.cover}>
            <Cover />
        </div>
        )}
</>
  );
}

