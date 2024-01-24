import { Header } from "../components/Header";

interface MainLayoutProps {
  showDashboard: boolean;
  children?: React.ReactNode;
}

export const MainLayout = ({ showDashboard, children }: MainLayoutProps) => {
  return (
    <>
      <div className='min-h-screen w-screen bg-gray-100 text-dark dark:bg-[#242424] dark:text-white transition-all ease-in-out duration-300 text-base'>
        {!showDashboard && <header>Dash</header>}
        <Header />
        <main className='mt-6 grid p-4 gap-4'>
          {children}
          <section className='grid grid-cols-2 gap-4 p-3 bg-white border border-gray-200 rounded-xl'>
            <h2 className='font-semibold text-lg'>Sales Trend</h2>
            <div className='flex items-center gap-2 justify-self-end place-self-center font-medium text-sm'>
              <span>Sort by:</span>
              <select
                name='sort-value'
                id='sort-value'
                className='px-2 py-1 border border-gray-600 rounded-full text-[0.75rem]'
              >
                <option value='week'>Weekly</option>
              </select>
            </div>

            <div className='col-span-full'>
              <img src='./chart.png' alt='Sales chart' className='h-full' />
            </div>
          </section>
        </main>
        {/* <footer>Footer</footer> */}
      </div>
    </>
  );
};
