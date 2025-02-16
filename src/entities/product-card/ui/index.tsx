import { Link } from "react-router";
import './index.css'

interface ProductCardProps {
  link: string;
  name: string;
  image: string;
  cl?: string;
}

export const ProductCard = ({ link, name, image, cl }: ProductCardProps) => {
  return (
    <Link to={link} className={`rounded-2xl bg-[#efedec] flex ${cl}`}>
      <div className="flex-1 flex flex-col p-2.5 md:p-5 overflow-hidden">
        <h3 className="w-40 text-sm font-bold md:text-2xl mb-2">{name}</h3>
        <div className="flex-1 min-h-0 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Link>
  )
}
