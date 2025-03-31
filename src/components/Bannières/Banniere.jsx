const Banniere = ({ objBanniere }) => {
  return (
    <div className="banniere__recit--container__banniere">
      <h1>{objBanniere.title}</h1>
      <img
        className="banniere__recit--image"
        src={objBanniere.photoName}
        alt={objBanniere.title}
      />
    </div>
  );
};

export default Banniere;
