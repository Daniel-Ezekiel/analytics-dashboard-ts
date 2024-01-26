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
    <div className='fixed min-w-screen bottom-0 left-0 right-0 bg-gray-120 border border-t-gray-300 z-10'>
      <nav className=''>
        <ul className='p-4 flex justify-between items-center overflow-x-auto gap-8'>
          <li>
            <Category size={32} color='#0d062d' variant='Bulk' />
          </li>

          <li>
            <TrendUp size={32} color='#b2abab' variant='Broken' />
          </li>

          <li>
            <Profile2User size={32} color='#b2abab' variant='Broken' />
          </li>

          <li>
            <Box size={32} color='#b2abab' variant='Broken' />
          </li>

          <li>
            <DiscountShape size={32} color='#b2abab' variant='Broken' />
          </li>

          <li>
            <InfoCircle size={32} color='#b2abab' variant='Broken' />
          </li>

          <div className='px-8 border-x border-gray-300'>
            <div
              className='flex gap-4 bg-white p-2 rounded-full border border-gray-280'
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

          <div className='flex gap-5 '>
            <li>
              <ArrowCircleRight2 size={32} color='#b2abab' variant='Broken' />
            </li>
            <li>
              <Setting2 size={32} color='#b2abab' variant='Broken' />
            </li>
            <li>
              <Logout size={32} color='#b2abab' variant='Broken' />
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};
