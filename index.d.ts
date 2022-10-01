type TEntry = {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
};

type EntriesResponseBody = {
  count: number;
  entries: TEntry[];
};
