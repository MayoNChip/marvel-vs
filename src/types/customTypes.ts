export type character = {
  id: number;
  name: string;
  thumbnail: { extension: string; path: string };
  description: string;
  modified: Date;
  resourceURI: string;
  urls: { type: string; url: string }[];
  comics: {
    available: number;
    returned: number;
    collectionURI: string;
    items: { resourceURI: string; name: string }[];
  };
  stories: {
    available: number;
    returned: number;
    collectionURI: string;
    items: { resourceURI: string; name: string; type: string }[];
  };
  events: {
    available: number;
    returned: number;
    collectionURI: string;
    items: { resourceURI: string; name: string }[];
  };
  series: {
    available: number;
    returned: number;
    collectionURI: string;
    items: { resourceURI: string; name: string }[];
  };
};
