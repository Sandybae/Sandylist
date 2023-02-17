export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((queen) => {
    return {
      params: { id: queen.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { queen: data },
  };
};

const Details = ({ queen }) => {
  return (
    <div>
      <h1>{queen.name}</h1>
      <p>{queen.email}</p>
      <p>{queen.website}</p>
      <p>{queen.address?.city}</p>
    </div>
  );
};

export default Details;
