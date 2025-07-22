import IncreaseWalet from '../components/walet/IncreaseWalet';
import UserCarts from '../components/walet/UserCarts';

const Walet = () => {
  return (
    <main className="flex-1 p-4 md:p-8">
      <h2 className="mb-6 text-xl font-semibold">کیف پول</h2>

      <UserCarts />
      <IncreaseWalet />
    </main>
  );
};

export default Walet;
