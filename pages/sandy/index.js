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
        <div key={queen.id}>
          <a className={styles.single}>
            <h3>{queen.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Sandy;
