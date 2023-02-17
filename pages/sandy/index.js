import Link from "next/link";
import styles from "../../styles/sandy.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { queens: data },
  };
};

const Sandy = ({ queens }) => {
  return (
    <div>
      <h1>All Queens</h1>
      {queens.map((queen) => (
        <Link
          href={"/sandy/" + queen.id}
          key={queen.id}
          className={styles.single}
        >
          <h3>{queen.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Sandy;
