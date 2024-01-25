interface SummaryCardProps {
  cardTitle: string;
  cardValue: string | number;
  cardRate: string | number;
  isRatePositive: boolean;
  children?: React.ReactNode;
  chartImageURL?: string;
}

export const SummaryCard = ({
  cardTitle,
  cardValue,
  cardRate,
  isRatePositive = true,
  children,
  chartImageURL,
}: SummaryCardProps) => {
  return (
    <div className='flex flex-wrap justify-between gap-3 p-4 bg-white border border-gray-200 rounded-xl md:col-span-full lg:col-span-1'>
      <div className='w-full flex justify-between gap-7'>
        <div className='border border-gray-250 rounded-full p-2'>
          {children}
        </div>
        <div>
          <img src={chartImageURL} alt='card chart' className='h-full' />
        </div>
      </div>

      <h4 className='mt-2 w-full flex flex-col font-medium text-lg text-gray-800 xl:mt-0'>
        {cardTitle}{" "}
        <span className='font-semibold text-2xl text-dark'>{cardValue}</span>
      </h4>

      <p className='mt-2 flex flex-wrap items-center gap-2 text-sm xl:mt-0'>
        <span
          className={`flex gap-1 bg-opacity-20 px-2 py-1 rounded-full ${
            isRatePositive ? "bg-green text-green" : "bg-red text-red"
          }`}
        >
          {isRatePositive ? (
            <img src='./trending-up.svg' alt='' />
          ) : (
            <img src='./trending-down.svg' alt='' />
          )}
          {cardRate}%
        </span>{" "}
        vs. previous month
      </p>
    </div>
  );
};
