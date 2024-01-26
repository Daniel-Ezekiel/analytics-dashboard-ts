import { useState } from "react";
import { formatDate } from "../../util/formatDate";
import {
  ArrowDown2,
  Calendar1,
  HambergerMenu,
  Notification,
  SearchNormal1,
} from "iconsax-react";

export const Header = () => {
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

  return (
    <header>
      <nav className='relative p-4 flex justify-between items-center gap-4 border border-b-gray-200'>
        <h1 className='font-semibold text-xl md:text-xl'>Dashboard</h1>
        <div className='flex stretch gap-3 md:gap-4 lg:w-[80%] lg:gap-8'>
          <div className='w-fit h-fit flex place-self-center items-center gap-2 sm:p-2 sm:border sm:border-gray-600 sm:bg-white sm:rounded-full lg:ml-auto lg:w-[22rem] xl:w-[30rem]'>
            <button type='button' onClick={toggleSearch}>
              <SearchNormal1 size='24' color='#78828A' variant='Outline' />
            </button>
            <input
              type='text'
              placeholder='Search...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.currentTarget.value)}
              className='absolute left-1/2 bottom-[50vh] -translate-x-1/2 w-[95%] p-2 px-4 rounded-full border border-gray-300 bg-white placeholder:text-gray-600 text-dark text-base transition-all ease duration-500 sm:static sm:block sm:translate-x-0 sm:border-none sm:p-[0.08rem] sm:px-2'
            />
          </div>

          <span className='hidden place-self-center items-center gap-1 md:flex lg:gap-2'>
            <Calendar1 size='24' color='#292d32' variant='Outline' />
            {formatDate()}
          </span>

          <button className='col-start-2 row-start-1 place-self-center w-fit h-fit border border-gray-300 p-2 rounded-full'>
            <Notification size='24' color='#292d32' variant='Outline' />
          </button>

          <div className='w-fit place-self-end p-1 flex gap-1 border border-gray-600 rounded-full md:gap-2'>
            <img
              src='/profile.jpg'
              alt='Profile picture'
              className='w-8 h-8 object-cover object-center rounded-full md:w-10 md:h-10'
            />
            <div className='hidden flex-col lg:flex'>
              <span>Justin Bergson</span>
              <span className='text-sm'>justin@gmail.com</span>
            </div>
            <button>
              <ArrowDown2 size='15' color='#292d32' variant='Outline' />
            </button>
          </div>
        </div>
        <button className='hidden place-self-center'>
          <HambergerMenu size='24' color='#292d32' variant='Broken' />
        </button>{" "}
      </nav>
    </header>
  );
};
