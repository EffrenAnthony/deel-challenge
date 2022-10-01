import React from "react";
import Highlighted from "../HighlightText";
import "./Search.css";

interface TSearchListProps {
  searchList: TEntry[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  refreshEntries: () => void;
}

const disableListOnFind = (list: TEntry[], query: String) => {
  if (list.length === 1) {
    if (query === list[0].API) {
      return false;
    }
  }
  return true;
};
const SearchList = ({
  searchList,
  query,
  setQuery,
  loading,
  refreshEntries,
}: TSearchListProps): JSX.Element => {
  const handleSelectItem = (searchListItem: TEntry) => {
    setQuery(searchListItem.API);
    refreshEntries();
  };
  return (
    <div className="searchList__container">
      <div className="searchList__list">
        {loading ? (
          <div className="searchList__loader--container">
            <span className="searchList__loader"></span>
          </div>
        ) : (
          <>
            {searchList?.map((searchListItem: TEntry, key: number) => (
              <div key={key}>
                {disableListOnFind(searchList, query) && (
                  <div
                    className="searchList__item"
                    onClick={() => handleSelectItem(searchListItem)}
                  >
                    <Highlighted text={searchListItem.API} highlight={query} />
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchList;
