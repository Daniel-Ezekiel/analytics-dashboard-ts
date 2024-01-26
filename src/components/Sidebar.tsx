import {
  ArrowCircleRight2,
  Box,
  Category,
  DiscountShape,
  InfoCircle,
  Logout,
  Moon,
  Profile2User,
  Setting2,
  Sun1,
  TrendUp,
} from "iconsax-react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Sidebar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className='fixed min-w-screen bottom-0 left-0 right-0 bg-gray-120 border border-t-gray-300 z-10 md:top-0 md:right-[unset] md:max-w-[6rem] md:min-h-screen'>
      <nav className='flex items-center pl-4 md:flex-col md:p-0 md:py-4 md:justify-start  md:h-full'>
        <ul className=' flex justify-between items-center overflow-auto gap-8 md:flex-col md:justify-start md:gap-8 md:h-full'>
          <div className='w-[7rem] h-fit pr-4 border-r md:mx-auto md:border-0 md:w-fit md:place-self-center md:p-0 md:h-fit md:pt-1'>
            <img src='/logo.png' alt='Logo' className='w-10 h-10' />
          </div>
          <li className='py-5 md:py-0 md:px-8'>
            <Category size={28} color='#0d062d' variant='Bulk' />
          </li>

          <li className='py-5 md:py-0 md:px-8'>
            <TrendUp size={28} color='#b2abab' variant='Broken' />
          </li>

          <li className='py-5 md:py-0 md:px-8'>
            <Profile2User size={28} color='#b2abab' variant='Broken' />
          </li>

          <li className='py-5 md:py-0 md:px-8'>
            <Box size={28} color='#b2abab' variant='Broken' />
          </li>

          <li className='py-5 md:py-0 md:px-8'>
            <DiscountShape size={28} color='#b2abab' variant='Broken' />
          </li>

          <li className='py-5 md:py-0 md:px-8'>
            <InfoCircle size={28} color='#b2abab' variant='Broken' />
          </li>

          <div className='px-8 border-x border-gray-300 md:border-y md:border-x-0 md:p-0 md:py-8 md:mb-auto'>
            <div
              className='flex gap-4 bg-white p-2 rounded-full border border-gray-280 md:flex-col'
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onClick={toggleTheme}
            >
              <button
                className={`p-1 rounded-full ${
                  theme === "light" ? "bg-green" : "bg-transparent"
                } transition-colors ease-in-out duration-500`}
              >
                <Sun1
                  size={28}
                  color={`${theme === "light" ? "#fff" : "#b2abab"}`}
                  variant='Bold'
                  className='transition-colors ease-in-out duration-500'
                />
              </button>
              <button
                className={`p-1 rounded-full ${
                  theme === "dark" ? "bg-green" : "bg-transparent"
                } transition-colors ease-in-out duration-500`}
              >
                <Moon
                  size={28}
                  color={`${theme === "dark" ? "#fff" : "#b2abab"}`}
                  variant='Bold'
                  className='transition-colors ease-in-out duration-500'
                />
              </button>
            </div>
          </div>

          <ul className='flex gap-5 sm:flex-col md:mt-8 md:pb-4'>
            <li className='py-5 md:py-0 md:px-8'>
              <ArrowCircleRight2 size={28} color='#b2abab' variant='Broken' />
            </li>
            <li className='py-5 md:py-0 md:px-8'>
              <Setting2 size={28} color='#b2abab' variant='Broken' />
            </li>
            <li className='py-5 md:py-0 md:px-8'>
              <Logout size={28} color='#b2abab' variant='Broken' />
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
};
