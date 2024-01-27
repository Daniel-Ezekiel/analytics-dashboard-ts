import { Calendar1 } from "iconsax-react";
import { Header } from "../components/Header";
import { formatDate } from "../../util/formatDate";
import { Sidebar } from "../components/Sidebar";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { motion } from "framer-motion";
import { Trend } from "../components/sections/Trend";
import { Orders } from "../components/sections/Orders";
import { Platforms } from "../components/sections/Platforms";
import { Summary } from "../components/sections/Summary";

interface MainLayoutProps {
  showDashboard: boolean;
  children?: React.ReactNode;
}

export const MainLayout = ({ showDashboard, children }: MainLayoutProps) => {
  const { theme } = useContext(ThemeContext);

  const sectionFadeInVariant = {
    unhidden: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.75,
      },
    },
    hidden: { opacity: 0, y: "-3rem" },
  };

  return (
    <>
      <div className='min-h-screen max-w-screen bg-gray-100 text-dark dark:bg-[#242424] transition-all ease-in-out duration-300 text-base pb-[8rem] md:pb-3'>
        {showDashboard && <Sidebar />}
        <div className='md:ml-[6rem]'>
          <Header />
          <motion.main
            variants={sectionFadeInVariant}
            initial='hidden'
            animate='unhidden'
            className='mt-4 grid p-4 gap-5 md:grid-cols-2 lg:grid-cols-12'
          >
            {children}
            <span className='place-self-end flex items-center gap-2 md:col-span-full lg:hidden dark:text-white'>
              <Calendar1
                size='24'
                color={`${theme === "dark" ? "#fff" : "#292d32"}`}
                variant='Outline'
              />
              {formatDate()}
            </span>

            <Trend />
            <Orders />
            <Summary />
            <Platforms />
          </motion.main>
        </div>
        {/* <footer>Footer</footer> */}
      </div>
    </>
  );
};
