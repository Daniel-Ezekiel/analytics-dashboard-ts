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

  return (
    <div className='fixed min-w-screen bottom-0 left-0 right-0 bg-gray-120 border border-t-gray-300 z-10 sm:top-0 sm:right-[unset] sm:max-w-[6rem] sm:min-h-screen'>
      <nav className='flex items-center pl-4 sm:flex-col sm:p-0 sm:py-4'>
        <div className='w-[8rem] h-full pr-4 border-r sm:mx-auto sm:border-0 sm:w-fit sm:place-self-center sm:p-0 sm:pb-8 sm:pt-1'>
          <img src='/logo.png' alt='Logo' className='w-10 h-10' />
        </div>
        <ul className=' flex justify-between items-center overflow-auto gap-8 sm:flex-col sm:justify-start sm:gap-8'>
          <li className='py-5 sm:py-0 sm:px-8'>
            <Category size={32} color='#0d062d' variant='Bulk' />
          </li>

          <li className='py-5 sm:py-0 sm:px-8'>
            <TrendUp size={32} color='#b2abab' variant='Broken' />
          </li>

          <li className='py-5 sm:py-0 sm:px-8'>
            <Profile2User size={32} color='#b2abab' variant='Broken' />
          </li>

          <li className='py-5 sm:py-0 sm:px-8'>
            <Box size={32} color='#b2abab' variant='Broken' />
          </li>

          <li className='py-5 sm:py-0 sm:px-8'>
            <DiscountShape size={32} color='#b2abab' variant='Broken' />
          </li>

          <li className='py-5 sm:py-0 sm:px-8'>
            <InfoCircle size={32} color='#b2abab' variant='Broken' />
          </li>

          <div className='px-8 border-x border-gray-300 sm:border-y sm:border-x-0 sm:p-0 sm:py-8'>
            <div
              className='flex gap-4 bg-white p-2 rounded-full border border-gray-280 sm:flex-col'
              onClick={setTheme as unknown as () => void}
            >
              <button
                className={`p-1 rounded-full ${
                  theme === "light" ? "bg-green" : "bg-transparent"
                }`}
              >
                <Sun1
                  size={32}
                  color={`${theme === "light" ? "#fff" : "#b2abab"}`}
                  variant='Bold'
                />
              </button>
              <button
                className={`p-1 rounded-full${
                  theme === "darkt" ? "bg-green" : "bg-transparent"
                }`}
              >
                <Moon size={32} color='#b2abab' variant='Bold' />
              </button>
            </div>
          </div>

          <div className='flex gap-5 sm:flex-col sm:mt-8'>
            <li className='py-5 sm:py-0 sm:px-8'>
              <ArrowCircleRight2 size={32} color='#b2abab' variant='Broken' />
            </li>
            <li className='py-5 sm:py-0 sm:px-8'>
              <Setting2 size={32} color='#b2abab' variant='Broken' />
            </li>
            <li className='py-5 sm:py-0 sm:px-8'>
              <Logout size={32} color='#b2abab' variant='Broken' />
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};
