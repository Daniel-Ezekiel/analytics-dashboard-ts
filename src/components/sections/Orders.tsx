import { MemoryRouter, Link } from "react-router-dom";
import OrdersTable from "../OrdersTable";

export const Orders = () => {
  return (
    <section className='p-4 bg-white border border-gray-200 rounded-xl flex flex-col gap-5 col-span-full lg:h-fit lg:col-span-7 overflow-x-auto dark:bg-black'>
      <div className='flex justify-between'>
        <h2 className='font-semibold dark:text-white'>Last orders</h2>
        <MemoryRouter>
          <Link to={""} className='font-medium text-green'>
            See all
          </Link>
        </MemoryRouter>
      </div>

      <OrdersTable />
    </section>
  );
};
