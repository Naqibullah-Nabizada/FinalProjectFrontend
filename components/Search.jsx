"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(search ? search.get("search") : null);
  const router = useRouter();

  const onSearch = (e) => {
    e.preventDefault();

    const encodeedSearchQuery = encodeURI(searchQuery || '');
    router.push(`/income/id-cards/?search=${encodeedSearchQuery}`);

  };

  return (
    <>
      <form className="flex w-[85%] my-4 mx-auto" onSubmit={onSearch}>
        <select name="searchBy" className="form-control w-48 mx-1">
          <option value="reference">مرجع</option>
          <option value="tariff_num">نمبر تعرفه</option>
          <option value="tariff_date">تاریخ تعرفه</option>
          <option value="pendant_num">نمبر آویز</option>
          <option value="pendant_date">تاریخ آویز</option>
        </select>
        <input type="search"
          value={searchQuery || ''}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control" placeholder="جستجو" />
        <button type="submit" className="btn btn-outline-success mx-2"><FaSearch className="bg-transparent" /></button>
      </form>
    </>
  )
}

export default Search;