import React from "react";

interface PageControlProps {
  page: number;
  totalPages: number;
}

const PageControl = ({ page, totalPages }: PageControlProps) => {
  return (
    <div className="grid grid-cols-3 w-full items-center p-2 gap-4 bg-primary rounded-2xl">
      {page > 1 ? (
        <a
          href={`/pokedex?page=${page - 1}`}
          className="text-foreground font-extrabold text-center hover:scale-105"
        >
          PREVIOUS
        </a>
      ) : (
        <span></span>
      )}
      <span className="text-foreground font-light text-center">
        {page} / {totalPages}
      </span>
      {page < totalPages ? (
        <a
          href={`/pokedex?page=${page + 1}`}
          className="text-foreground font-extrabold text-center hover:scale-105"
        >
          NEXT
        </a>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default PageControl;
