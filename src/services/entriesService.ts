export const entriesServices = {
  _getEntriesByQuery: async (query: string): Promise<TEntry[] | undefined> => {
    try {
      const response = await fetch("https://api.publicapis.org/entries");
      if (query !== "") {
        const data: EntriesResponseBody = await response.json();
        const entriesFinded = data.entries.filter((entry) =>
          entry.API.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        );
        return entriesFinded;
      }
      return [];
    } catch (error) {
      console.log(error);
    }
  },
};
