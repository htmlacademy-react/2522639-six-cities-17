import MainPage from '../../pages/main-page/main-page';
type AppProps = {
  maxCards: number;
};

function App({ maxCards }: AppProps): JSX.Element {
  return <MainPage maxCards={maxCards} />;
}

export default App;
