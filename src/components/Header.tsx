import { useContext, useState } from "react";
import { formatDate } from "../../util/formatDate";
import {
  ArrowDown2,
  Calendar1,
  Notification,
  SearchNormal1,
} from "iconsax-react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { motion } from "framer-motion";

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [inputShown, setInputShown] = useState<boolean>(false);

  const toggleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const parent = e.currentTarget.closest("div");
    if (inputShown) {
      parent?.querySelector("input")?.classList.remove("-bottom-14");
      parent?.querySelector("input")?.classList.add("bottom-[50vh]");
      setInputShown(false);
    } else {
      parent?.querySelector("input")?.classList.remove("bottom-[50vh]");
      parent?.querySelector("input")?.classList.add("-bottom-14");
      setInputShown(true);
    }
  };

  const toggleNotificationModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    e.currentTarget.querySelector("div")?.classList.toggle("hidden");
  };
  const toggleProfileDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    e.currentTarget.querySelector("button div")?.classList.toggle("hidden");
  };

  const headerFadeInVariant = {
    unhidden: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
      },
    },
    hidden: { opacity: 0, y: "-3rem" },
  };

  return (
    <motion.header
      variants={headerFadeInVariant}
      initial='hidden'
      animate='unhidden'
    >
      <nav className='relative p-4 flex justify-between items-center gap-4 border-b border-b-gray-300'>
        <h1 className='font-semibold text-xl md:text-xl dark:text-white'>
          Dashboard
        </h1>
        <div className='flex stretch gap-3 md:gap-4 lg:w-[80%] lg:gap-6'>
          <div className='w-fit h-fit flex place-self-center items-center gap-2 sm:p-2 sm:border sm:border-gray-600 sm:bg-white sm:rounded-full lg:ml-auto lg:w-[15rem] xl:w-[25rem] dark:bg-dark'>
            <button type='button' onClick={toggleSearch}>
              <SearchNormal1
                size='24'
                color={`${theme === "dark" ? "#A3A3A3" : "#787878"}`}
                variant='Outline'
              />
            </button>
            <input
              type='text'
              placeholder='Search...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.currentTarget.value)}
              className='absolute left-1/2 bottom-[50vh] -translate-x-1/2 w-[95%] p-2 px-4 rounded-full border border-gray-300 bg-white placeholder:text-gray-600 text-dark text-base transition-all ease duration-500 sm:static sm:block sm:translate-x-0 sm:border-none sm:p-[0.08rem] sm:px-2 dark:bg-dark dark:text-white'
            />
          </div>

          <span className='hidden place-self-center items-center gap-1 lg:flex lg:gap-2 dark:text-white'>
            <Calendar1
              size='24'
              color={`${theme === "dark" ? "#fff" : "#292d32"}`}
              variant='Outline'
            />
            {formatDate()}
          </span>

          <button
            className='relative col-start-2 row-start-1 place-self-center w-fit h-fit border border-gray-300 p-2 rounded-full'
            onClick={toggleNotificationModal}
          >
            <Notification
              size='24'
              color={`${theme === "dark" ? "#fff" : "#292d32"}`}
              variant='Outline'
            />
            <div className='hidden absolute w-[12rem] right-0 top-[3rem] bg-white border border-gray-300 rounded-lg shadow-lg dark:border dark:border-gray-500 dark:bg-black dark:text-white md:w-[20rem]'>
              <p className='border-b border-gray-500 p-4 font-semibold'>
                Notifications
              </p>

              <div className='p-2'>
                <p>No notifications to show.</p>
              </div>
            </div>
          </button>

          <div
            className='w-fit place-self-end p-1 flex items-center gap-1 border border-gray-600 rounded-full cursor-pointer md:gap-2'
            onClick={toggleProfileDropdown}
          >
            <img
              src='/profile.jpg'
              alt='Profile picture'
              className='w-8 h-8 object-cover object-center rounded-full md:w-10 md:h-10 border'
            />
            <div className='hidden flex-col items-end lg:flex dark:text-white'>
              <span className='font-semibold'>Justin Bergson</span>
              <span className='text-sm'>justin@gmail.com</span>
            </div>
            <button className='relative'>
              <ArrowDown2
                size='18'
                color={`${theme === "dark" ? "#fff" : "#292d32"}`}
                variant='Outline'
              />
              <div className='hidden absolute top-10 right-0 w-[12rem] border border-gray-500 rounded-lg bg-white shadow-lg flex-col justify-start'>
                <div className='border-b p-4 flex flex-col items-end lg:hidden dark:text-white'>
                  <span className='font-semibold'>Justin Bergson</span>
                  <span className='text-sm'>justin@gmail.com</span>
                </div>
                <span
                  className='block p-3 font-semibold text-start'
                  role='button'
                >
                  View profile
                </span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
