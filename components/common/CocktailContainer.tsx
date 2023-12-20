import Link from "next/link";
import Image from "next/image";
interface Props {
  strDrink: String;
  strDrinkThumb: String;
  idDrink: String;
}

export default function CocktailContainer({
  strDrink,
  strDrinkThumb,
  idDrink,
}: Props) {
  return (
    <div>
      <h1>{strDrink}</h1>
      <Image src={strDrinkThumb + ""} alt="" width={150} height={150} />
      <Link href={`/asd`}></Link>
    </div>
  );
}