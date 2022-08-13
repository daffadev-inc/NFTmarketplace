import { useAddress } from "@thirdweb-dev/react";
import Upload from "../components/upload/uploadNft";
import Cover from "../components/cover/Cover";
import styles from "../styles/Theme.module.scss";

export default function Listings() {
  const address = useAddress();

  return (
<>
        {address ? (
    <Upload />
        ) : (
        <div className={styles.cover}>
            <Cover />
        </div>
        )}
</>
  );
}

