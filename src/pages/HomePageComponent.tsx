import config from "../config";

export default function HomePageComponent() {
  return (
    <>
      <h1>Home</h1>
      <h2>Url API:</h2> <span>{config.apiBaseUrl}</span>
    </>
  );
}
