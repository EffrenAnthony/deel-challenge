import { useCallback, useEffect, useState } from "react";
import { entriesServices } from "../../services/entriesService";
import Input from "./Input";
import ResultList from "./SearchList";

const AutocomenteComponent = (): JSX.Element => {
  const [query, setQuery] = useState<string>("");
  const [entryList, setEntryList] = useState<TEntry[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getEntries = useCallback(async (query: string) => {
    try {
      setLoading(true);
      const entries = await entriesServices._getEntriesByQuery(query);
      setEntryList(entries);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshEntries = (): void => {
    setEntryList([]);
  };
  useEffect(() => {
    getEntries(query);
  }, [query]);
  return (
    <div>
      <Input query={query} setQuery={setQuery} />
      <ResultList
        searchList={entryList!}
        query={query}
        setQuery={setQuery}
        loading={loading}
        refreshEntries={refreshEntries}
      />
    </div>
  );
};

export default AutocomenteComponent;
