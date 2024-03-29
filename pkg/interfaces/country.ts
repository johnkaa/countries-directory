type ImageType = {
  png: string;
  svg: string;
  alt?: string;
};
type MapsType = {
  googleMaps: string;
  openStreetMaps: string;
};
type NameType = {
  common: string;
  official: string;
  nativeName?: Record<string, NameType>;
};

export default interface ICountry {
  borders: string[];
  cca3: string;
  flags: ImageType;
  maps: MapsType;
  name: NameType;
  population: number;
}
