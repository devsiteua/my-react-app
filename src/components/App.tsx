export default function App() {
  const myKey = import.meta.env.VITE_API_KEY;

  return (
    <>
      <h1>test {myKey}</h1>
    </>
  );
}
