import MonsterCard from './components/MonsterCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      {/* Container to simulate mobile screen or restricted width if needed */}
      <div className="w-full max-w-[480px]">
        <MonsterCard />
      </div>
    </div>
  );
}

export default App;
