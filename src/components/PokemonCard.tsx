type Pokemon = {
  name: { name: string };
  imgSrc?: { imgSrc: string };
};

const PokemonCard = ({ name, imgSrc }: Pokemon) => {
  return (
    <>
      <figure>
        {imgSrc ? <img src={imgSrc.imgSrc} alt={name.name} /> : <p>"???"</p>}

        <figcaption> {name.name} </figcaption>
      </figure>
    </>
  );
};

export default PokemonCard;
