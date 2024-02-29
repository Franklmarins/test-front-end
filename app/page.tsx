import Image from "next/image";
import { data } from "./data";

interface ITotalClassificationProps {
  total: number;
}

export default function Home() {
  const TotalClassification = ({
    total,
  }: ITotalClassificationProps): JSX.Element => {
    const stars = Array.from({ length: total }).map((_, index: number) => (
      <Image key={index} src="/star.png" width={20} height={20} alt="star" />
    ));

    return <>{stars}</>;
  };

  const formatDate = (
    carInitialDate: string,
    carFinalDate: string,
    isMobile: boolean
  ): string => {
    const [day, month] = carInitialDate.split("/");
    const [dayFinal, monthFinal] = carFinalDate.split("/");
    const monthNames: string[] = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (isMobile) {
      return `${day}/${month}`;
    } else {
      return `${monthNames[parseInt(month) - 1]} ${day} - ${
        monthNames[parseInt(monthFinal) - 1]
      } ${dayFinal}`;
    }
  };

  return (
    <main className="container mx-auto">
      <div className="flex items-center justify-between p-4 bg-gray-50 text-gray-500 mt-4 md:hidden ">
        <h2>CAR</h2>
        <h2></h2>
        <h2>NEXT RESERVATION</h2>
        <h2>STATUS</h2>
        <h2>RATING</h2>
        <h2>ACTIONS</h2>
      </div>
      <ul className="flex flex-col items-center">
        {data.map((car) => (
          <li
            className="flex items-center w-full text-sm relative border-2 border-gray-50 p-4"
            key={car.id}
          >
            <div className="flex w-24 h-24 items-center">
              <div className="w-max relative">
                <Image
                  src={car.image}
                  width={85}
                  height={85}
                  alt="Picture of the author"
                />
                {car.avaliable ? (
                  <Image
                    className="absolute top-0 left-0 lg:hidden"
                    src="/indicators.png"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                ) : (
                  <Image
                    className="absolute top-0 left-0 lg:hidden"
                    src="/remove.png"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col h-24 md:pl-2 lg:flex-row w-full justify-around">
              <h2 className="flex items-center text-base text-gray-900 lg:-ml-10 lg:mr-10">
                {car.name} {car.year}
              </h2>
              <div className="flex items-center lg:p-4">
                <span className="text-xs lg:hidden text-gray-600">
                  Next reservation:{" "}
                </span>
                <span className="text-xs lg:hidden text-gray-600">
                  {formatDate(car.initial, car.final, true)}
                </span>
                <span className="flex items-center text-xs md:hidden text-gray-600 lg:-ml-20 lg:mr-20">
                  {formatDate(car.initial, car.final, false)}
                </span>
              </div>
              <div className="flex items-center lg:p-4">
                {car.avaliable ? (
                  <span className="md:hidden px-2.5 py-0.5 bg-green-100 text-green-800 rounded-md lg:-ml-4 lg:mr-4">
                    Avaliable
                  </span>
                ) : (
                  <span className="md:hidden px-2.5 py-0.5 bg-red-100 text-red-800 rounded-md lg:-ml-4 lg:mr-4">
                    Not Avaliable
                  </span>
                )}
              </div>

              <div className="lg:flex lg:items-center lg:justify-start lg:p-4 lg:-ml-8 lg:mr-8">
                <div className="flex">
                  <TotalClassification total={car.classification} />
                </div>
              </div>
            </div>
            <div className="flex lg:p-4 md:w-6 md:h-24">
              <div className="w-max h-max">
                <Image
                  src="/dots-vertical.png"
                  width={24}
                  height={24}
                  alt="star"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
