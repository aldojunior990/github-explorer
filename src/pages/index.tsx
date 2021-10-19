import React, { ReactNode, useEffect, useState } from "react";
import { Search } from "../components/search";
import { User } from "../components/user";
import { useRepository } from "../hooks/useRepository";

export default function Home() {
  const { nextPage } = useRepository();

  const [page, setPage] = useState(0);

  useEffect(() => {
    if (nextPage === false) {
      return setPage(0);
    } else {
      return setPage(1);
    }
  }, [nextPage]);

  if (page === 0) {
    return <Search />;
  } else {
    return <User />;
  }
}
