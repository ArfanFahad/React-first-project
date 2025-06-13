import Cinema from "../components/Cinema";

const Home = () => {
  return (
    <>
      <div className="m-18">
        <h1 className="text-3xl mt-[-40px]">Latest Cinema</h1>
        <div className="flex flex-wrap gap-4 m-4">
          <Cinema
            name="Mission Impossible"
            imdb="7.2"
            image="/MissionImpossiblePoster.jpg"
            plot="Ethan Hunt is a spy who has been falsely accused of disloyalty. He must now prove his innocence and bring to light the real miscreant minus the support of the organisation he worked for."
          />
          <Cinema
            name="Mission Impossible - II"
            imdb="7.8"
            image="/MissionImpossible2.jpg"
            plot="Ethan Hunt, an IMF agent has been sent on a mission to retrieve and destroy a genetically created disease called chimera. He has to compete with a terrorist gang before they infect the whole world."
          />
          <Cinema
            name="Mission Impossible - III"
            imdb="8.2"
            image="/MissionImpossible3.jpg"
            plot="Ethan Hunt is forced out of retirement to rescue his student captured by an arms dealer. His mission to rescue her not only gets his fiancee kidnapped but also exposes a mole in his organisation."
          />
        </div>
      </div>
    </>
  );
};

export default Home;
