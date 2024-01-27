import { Link, MemoryRouter } from "react-router-dom";
import { PlatformDetails } from "../PlatformDetails";

export const Platforms = () => {
  return (
    <section className='p-4 bg-white border border-gray-200 rounded-xl flex flex-col gap-5 lg:h-fit lg:col-span-5 lg:col-start-8 dark:bg-black shadow-sm'>
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
  );
};
