export type HomeData = {
  homeIntro: {
    headline: string;
    descriptions: HomeDescription[];
  }
}

export type HomeDescription = {
  id: number;
  title: string;
  functionality: string;
  icon: string,
  action: string,
  route: string
}