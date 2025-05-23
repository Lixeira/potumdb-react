import { Link } from "react-router";

function Home() {
  return (
    <main className="flex flex-col gap-6 justify-center items-center my-14">
      <Link
        className="block text-2xl p-[0.8rem] w-[70dvw] sm:w-[420px] hover:scale-103 transition-transform duration-500 rounded-md font-medium text-center bg-gray-50 hover:bg-gray-200 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/50 border border-blue-300 shadow-2xs"
        to="food"
      >
        Food Buff
      </Link>
      <a
        href="https://potumdb.pages.dev/xp"
        className="block text-2xl p-[0.8rem] w-[70dvw] sm:w-[420px] hover:scale-103 transition-transform duration-500 rounded-md font-medium text-center bg-gray-50 hover:bg-gray-200 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/50 border border-blue-300 shadow-2xs"
      >
        Quest Calulator
      </a>
      <Link
        className="block text-2xl p-[0.8rem] w-[70dvw] sm:w-[420px] hover:scale-103 transition-transform duration-500 rounded-md font-medium text-center bg-gray-50 hover:bg-gray-200 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/50 border border-blue-300 shadow-2xs"
        to="bag"
      >
        Bag Expansion
      </Link>
    </main>
  );
}

export default Home;
