interface IDataItem {
  id: number;
  image: string;
  name: string;
  year: string;
  initial: string;
  final: string;
  classification: number;
  avaliable: boolean;
}

interface IDataItems extends Array<IDataItem> {}

export const data: IDataItems = [
  {
    id: 1,
    image: "/car.png",
    name: "Mini Cooper",
    year: "2020",
    initial: "06/06/2024",
    final: "12/06/2024",
    classification: 5,
    avaliable: true,
  },
  {
    id: 2,
    image: "/car.png",
    name: "Mini Cooper",
    year: "2020",
    initial: "11/07/2024",
    final: "12/06/2024",
    classification: 5,
    avaliable: true,
  },
  {
    id: 3,
    image: "/car.png",
    name: "Mini Cooper",
    year: "2020",
    initial: "06/06/2024",
    final: "12/06/2024",
    classification: 5,
    avaliable: true,
  },
];
