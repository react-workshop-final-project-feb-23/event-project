export default interface IEventQueryParams {
  keyword?: string;
  latlong?: string;
  startDateTime?: string | null;
  endDateTime?: string | null;
  id?: string;
  paginationUrl?: string;
}
