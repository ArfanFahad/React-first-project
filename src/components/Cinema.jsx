const Cinema = ({ name, imdb, image, plot }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 w-[400px] border-2 border-blue-700 rounded-xl p-4">
        <img
          src={image}
          alt="Mission Impossible Poster"
          className="object-cover rounded-2xl w-full max-h-96"
        />
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-lg font-semibold">{name}</h1>
          <h3>
            <span>IMDB Rating:</span> {imdb}
          </h3>
          <p>Genre: Action, Thriller</p>
          <p className="text-justify">Plot: {plot}</p>
        </div>
      </div>
    </>
  );
};

export default Cinema;
