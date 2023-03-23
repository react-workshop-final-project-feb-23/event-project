interface IDates {
  spanMultipleDays: boolean;
  start: { localDate: string }
  status: { code: string }
  timezone: string;
}

interface IImage {
  ratio: string
  url: string
  height: number
  width: number
  fallback: boolean
}

export default interface IEvent {
  id: string;
  name: string;
  url: string;
  dates?: IDates
  images?: IImage[]
}
