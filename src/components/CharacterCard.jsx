export function CharacterCard({ image, name, species }) {
  return (
    <>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{species}</p>
    </>
  );
}
