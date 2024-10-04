import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="3xl:ml-[200px] 3xl:h-[60px] 3xl:w-[513px] 3xl:rounded-[16px] 3xl:px-6 3xl:mr-[42px] flex h-6 items-center bg-[#F9FAFB] max-lg:hidden lg:ml-[107px] lg:mr-[22px] lg:h-8 lg:w-[273px] lg:rounded-[8px] lg:px-3 xl:ml-[130px] xl:mr-[28px] xl:h-10 xl:w-[342px] xl:rounded-[10px] xl:px-4 2xl:ml-[160px] 2xl:mr-[32px] 2xl:h-[48px] 2xl:w-[410px] 2xl:rounded-[12px] 2xl:px-5">
      <div className="flex items-center gap-x-2">
        <SearchIcon size={20} color="#5D5FEF" strokeWidth={3} />
        <input
          className="3xl:text-[18px] w-full bg-[#F9FAFB] text-[#5D5FEF] outline-none lg:text-[9px] xl:text-xs 2xl:text-[14px]"
          type="text"
          placeholder="Search here.."
        />
      </div>
    </div>
  );
};

export default Search;
