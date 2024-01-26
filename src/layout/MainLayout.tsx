import {
  BoxTick,
  Calendar1,
  Coin1,
  I3DRotate,
  ShoppingCart,
} from "iconsax-react";
import { Header } from "../components/Header";
import { SummaryCard } from "../components/SummaryCard";
import { Link, MemoryRouter } from "react-router-dom";
import { PlatformDetails } from "../components/PlatformDetails";
import OrdersTable from "../components/OrdersTable";
import { formatDate } from "../../util/formatDate";
import { Sidebar } from "../components/Sidebar";

interface MainLayoutProps {
  showDashboard: boolean;
  children?: React.ReactNode;
}

export const MainLayout = ({ showDashboard, children }: MainLayoutProps) => {
  return (
    <>
      <div className='min-h-screen max-w-screen bg-gray-100 text-dark dark:bg-[#242424] transition-all ease-in-out duration-300 text-base pb-[8rem] md:pb-3'>
        {showDashboard && <Sidebar />}
        <div className='md:ml-[6rem]'>
          <Header />
          <main className='mt-4 grid p-4 gap-5 md:grid-cols-2 lg:grid-cols-12'>
            {children}
            <span className='place-self-end flex items-center gap-2 md:hidden'>
              <Calendar1 size='24' color='#292d32' variant='Outline' />
              {formatDate()}
            </span>

            <section className='grid grid-cols-2 gap-4 p-3 bg-white border border-gray-200 rounded-xl md:col-span-full lg:col-span-7 dark:bg-black dark:text-white'>
              <h2 className='font-semibold text-lg'>Sales Trend</h2>
              <div className='flex items-center gap-2 justify-self-end place-self-center font-medium text-sm'>
                <span>Sort by:</span>
                <select
                  name='sort-value'
                  id='sort-value'
                  className='px-2 py-1 border border-gray-600 rounded-full text-[0.75rem] dark:text-dark'
                >
                  <option value='week'>Weekly</option>
                </select>
              </div>

              <div className='col-span-full'>
                <img
                  src='/chart.png'
                  alt='Sales chart'
                  className='h-auto w-full'
                />
              </div>
            </section>

            <section className='p-4 bg-white border border-gray-200 rounded-xl flex flex-col gap-5 col-span-full lg:col-span-7 overflow-x-auto dark:bg-black'>
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

            <section className='grid gap-4 min-[425px]:grid-cols-2 sm:grid-cols-2 lg:col-span-5 lg:col-start-8 lg:row-start-1'>
              <SummaryCard
                cardTitle='Total Order'
                cardValue={350}
                cardRate={23.5}
                isRatePositive={true}
                chartImageURL='./card-chart-1.png'
              >
                <BoxTick size='24' color='#34caa5' variant='Bulk' />
              </SummaryCard>

              <SummaryCard
                cardTitle='Total Refund'
                cardValue={270}
                cardRate={23.5}
                isRatePositive={false}
                chartImageURL='./card-chart-2.png'
              >
                <I3DRotate size='24' color='#34caa5' variant='Bulk' />
              </SummaryCard>

              <SummaryCard
                cardTitle='Average Sales'
                cardValue={1567}
                cardRate={23.5}
                isRatePositive={false}
                chartImageURL='./card-chart-2.png'
              >
                <ShoppingCart size='24' color='#34caa5' variant='Bulk' />
              </SummaryCard>

              <SummaryCard
                cardTitle='Total Income'
                cardValue={"$350.000"}
                cardRate={23.5}
                isRatePositive={true}
                chartImageURL='./card-chart-1.png'
              >
                <Coin1 size='24' color='#34caa5' variant='Bulk' />
              </SummaryCard>
            </section>

            <section className='p-4 bg-white border border-gray-200 rounded-xl flex flex-col gap-5 lg:col-span-5 lg:col-start-8 dark:bg-black'>
              <div className='flex justify-between'>
                <h2 className='font-semibold dark:text-white'>Top Platform</h2>
                <MemoryRouter>
                  <Link to={""} className='font-medium text-green'>
                    See all
                  </Link>
                </MemoryRouter>
              </div>

              <PlatformDetails
                platformName='Book Bazaar'
                barWidth={60}
                barColor='#6C63FF'
                currency='$'
                platformIncome={"2,500,000"}
                platformRate={15}
              />

              <PlatformDetails
                platformName='Artisan Aisle'
                barWidth={45}
                barColor='#54C5EB'
                currency='$'
                platformIncome={"1,800,000"}
                platformRate={10}
              />

              <PlatformDetails
                platformName='Toy Troop'
                barWidth='35'
                barColor='#FFB74A'
                currency='$'
                platformIncome={"1,200,000"}
                platformRate={8}
              />

              <PlatformDetails
                platformName='XStore'
                barWidth='35'
                barColor='#FF4A55'
                currency='$'
                platformIncome={"800,000"}
                platformRate={6}
              />
            </section>
          </main>
        </div>
        {/* <footer>Footer</footer> */}
      </div>
    </>
  );
};
