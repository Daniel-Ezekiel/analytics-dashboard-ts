import { useContext } from "react";
import Chart from "react-apexcharts";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { ApexOptions } from "apexcharts";

export const Trend = () => {
  const { theme } = useContext(ThemeContext);

  const series = [
    {
      name: "Sales ",
      data: [
        14000, 18000, 32000, 5000, 10000, 5000, 43000, 13250, 28000, 36100,
        20960, 44000,
      ],
    },
  ];

  const options: ApexOptions = {
    colors: ["#34CAA53A"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    plotOptions: {
      bar: {
        borderRadius: 15,
        columnWidth: "30rem",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },
    chart: {
      id: "trends-bar",
      fontFamily: "Plus Jakarta Sans",
      toolbar: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 500,
          colors: theme === "light" ? "#000" : "#fff",
        },
      },
    },
    xaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 500,
          colors: theme === "light" ? "#000" : "#fff",
        },
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  return (
    <section className='max-h-[30rem] overflow-x-auto flex flex-wrap justify-between items-start gap-4 p-3 bg-white border border-gray-200 rounded-xl md:col-span-full lg:col-span-7 dark:bg-black dark:border-gray-500 dark:text-white shadow-sm'>
      <h2 className='font-semibold text-lg'>Sales Trend</h2>
      <div className='flex items-center gap-2 justify-self-end place-self-center font-medium text-sm lg:place-self-start'>
        <span>Sort by:</span>
        <select
          name='sort-value'
          id='sort-value'
          className='px-2 py-1 border border-gray-600 rounded-full text-[0.75rem] dark:bg-transparent dark:text-white'
        >
          <option value='week'>Weekly</option>
        </select>
      </div>

      <div id='chart' className='min-w-[40rem] max-h-fit sm:min-w-full'>
        {/* <img src='/chart.png' alt='Sales chart' className='h-auto w-full' /> */}
        <Chart options={options} type='bar' series={series} height={360} />
      </div>
    </section>
  );
};
