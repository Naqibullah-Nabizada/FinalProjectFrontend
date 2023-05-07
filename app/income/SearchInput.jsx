"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(search ? search.get("q") : null);
  const router = useRouter();

  const onSearch = (e) => {
    e.preventDefault();

    const encodeedSearchQuery = encodeURI(searchQuery || '');
    router.push(`/income/search/?q=${encodeedSearchQuery}`);

  };

  return (
    <form onSubmit={onSearch} className="w-2/4 flex justify-center">
      <input value={searchQuery || ''}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="form-control"
      />
    </form>
  )
}

export default SearchInput;