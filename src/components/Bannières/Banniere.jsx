const Banniere = ({ objBanniere }) => {
  return (
    <div>
      <h1>{objBanniere.title}</h1>
      <img src={objBanniere.photoName} alt={objBanniere.title} />
    </div>
  );
};

export default Banniere;
