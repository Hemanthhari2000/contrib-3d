import PageTransition from "../../components/Animations/Transition/PageTransition";

async function getData() {
  const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
  return await res.json();
}

export default function ContribGraph() {
  return (
    <>
      <PageTransition>
        <h1>Jokes</h1>
      </PageTransition>
    </>
  );
}
