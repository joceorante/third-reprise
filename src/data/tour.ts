export interface TourStop {
  date: string;
  city: string;
  ticketUrl: string;
}

export const tourStops: TourStop[] = [
  { date: "9.15", city: "Washington D.C.", ticketUrl: "#" },
  { date: "9.16", city: "Philadelphia, PA", ticketUrl: "#" },
  { date: "9.18", city: "Boston, MA", ticketUrl: "#" },
  { date: "9.25", city: "Brooklyn, NY", ticketUrl: "#" },
];
