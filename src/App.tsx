import { MonsterCard } from './components/MonsterCard';
import monsterImage from './assets/monster.png';

function App() {
    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-slate-200">
            <MonsterCard
                imageUrl={monsterImage}
            />
        </div>
    )
}

export default App
