import Link from "next/link";
import styles from "./page.module.css";
import { FaHouse } from "react-icons/fa6";

export default function Page04() {
  return (
    <div className="pageContainer">
      <h2 className={styles["title"]}>Hello This is Page 04</h2>

      <Link  href="/" className={styles["link-home"]} >
    <div className={styles.icon}> <FaHouse /></div>  
      </Link>
    </div>
  );
}