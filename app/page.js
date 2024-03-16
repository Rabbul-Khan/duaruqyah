import Image from 'next/image';
import CategoriesList from './components/CategoryList';
import CategoryList from './components/CategoryList';

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-[1fr_2fr] p-24 gap-5 bg-gray-400 text-black">
      <div className="bg-white ">
        <CategoryList />
      </div>
      <div className="bg-white ">Dua</div>
    </main>
  );
}
