export default function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

function Greeting() {
  const name = "Kevin";
  return <h1 id="greeting">Hello {name}</h1>;
}
