interface PlatformDetailsProps {
  platformName: string;
  barWidth: string | number;
  barColor: string;
  currency?: string;
  platformIncome: string | number;
  platformRate: string | number;
}

export const PlatformDetails = ({
  platformName,
  barWidth,
  barColor,
  currency = "$",
  platformIncome,
  platformRate,
}: PlatformDetailsProps) => {
  return (
    <div className='grid grid-cols-2 justify-between items-between gap-4 text-lg'>
      <h4 className='font-semibold dark:text-white'>{platformName}</h4>
      <div className={`relative col-span-full bg-gray-150 rounded-full h-3`}>
        <div
          style={{ width: `${barWidth}%`, backgroundColor: barColor }}
          className={`h-full rounded-full`}
        ></div>
      </div>
      <span className='text-gray-900 dark:text-gray-400'>
        {currency}
        {platformIncome}
      </span>
      <span className='place-self-end text-gray-900 dark:text-gray-400'>
        +{platformRate}%
      </span>
    </div>
  );
};
