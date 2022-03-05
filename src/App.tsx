interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className={`text-3xl bold`}>Template for react + redux + saga + tailwind + vite + connect router</h1>
    </div>
  );
};

export default App;
