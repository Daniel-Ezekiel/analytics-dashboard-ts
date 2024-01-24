// import { useState } from "react";
// import { formatDate } from "../../util/formatDate";
import {
  // ArrowDownwardRounded,
  // ArrowDropDown,
  // ArrowDropDownRounded,
  // CalendarMonth,
  // CalendarMonthRounded,
  // ExpandMoreRounded,
  MenuRounded,
  // NotificationsRounded,
  // SearchRounded,
} from "@mui/icons-material";

export const Header = () => {
  // const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <header className='p-4 grid grid-cols-[auto_1fr] items-center gap-4 gap-y-3 border border-b-gray-200'>
      <h1 className='font-semibold text-xl md:text-xl'>Dashboard</h1>
      {/* <div className='flex'>
        <div className='w-fit p-2 flex items-center gap-2 border border-gray-600 bg-white rounded-full'>
          <SearchRounded />
          <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
            className='hidden w-full bg-white placeholder:text-gray-600 text-dark text-base'
          />
        </div>

        <span className='flex items-center gap-2'>
          <CalendarMonthRounded />
        </span>

        <button className='col-start-2 row-start-1'>
          <NotificationsRounded />
        </button>

        <div className='w-fit place-self-end p-2 row-start-1 col-start-3 flex gap-1 border border-gray-600 rounded-full'>
          <img
            src='/profile.jpeg'
            alt='Profile picture'
            className='w-10 h-10 object-cover object-center rounded-full'
          />
          <div className='hidden flex-col md:flex'>
            <span>Justin Bergson</span>
            <span className='text-sm'>justin@gmail.com</span>
          </div>
          <button>
            <ExpandMoreRounded />
          </button>
        </div>
      </div> */}
      <button className='place-self-end'>
        <MenuRounded sx={{ color: "#34CAA5" }} />
      </button>{" "}
    </header>
  );
};
