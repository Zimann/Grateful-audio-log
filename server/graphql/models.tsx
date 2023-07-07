export type HomeData = {
  homeIntro: {
    headline: string;
    descriptions: HomeDescription[];
  }
}

type HomeDescription = {
  title: string;
  imageUrl: string;
  functionality: string;
  icon: string
}