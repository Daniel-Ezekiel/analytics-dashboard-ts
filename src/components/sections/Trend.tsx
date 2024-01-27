export const Trend = () => {
  return (
    <section className='flex flex-wrap justify-between items-start gap-4 p-3 bg-white border border-gray-200 rounded-xl md:col-span-full lg:col-span-7 dark:bg-black dark:text-white'>
      <h2 className='font-semibold text-lg'>Sales Trend</h2>
      <div className='flex items-center gap-2 justify-self-end place-self-center font-medium text-sm lg:place-self-start'>
        <span>Sort by:</span>
        <select
          name='sort-value'
          id='sort-value'
          className='px-2 py-1 border border-gray-600 rounded-full text-[0.75rem] dark:text-dark'
        >
          <option value='week'>Weekly</option>
        </select>
      </div>

      <div className='w-full h-full'>
        <img src='/chart.png' alt='Sales chart' className='h-auto w-full' />
      </div>
    </section>
  );
};
