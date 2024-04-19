import Image from "next/image";
import InnerBanner from "/components/layouts/InnerBanner";
import styles from "/styles/Program.module.scss";
const Program = () => {
  return (
    <div className={styles.program_page}>
      <InnerBanner />
      <div className={styles.program_section}>
        hello world
        <span>dvv</span>
      </div>
    </div>
  );
};

export default Program;
