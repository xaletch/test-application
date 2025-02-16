import { CardShoes } from "@/app/types/global"
import { ProductCard } from "@/entities/product-card"

interface ShoesProps {
  data: CardShoes[];
}

export const Shoes = ({ data }: ShoesProps) => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-6 md:grid-cols-10 gap-2 md:h-[500px]">
        {data.map((item, index) => (
          <ProductCard 
            key={index} 
            cl={`card-${index+1}`} 
            name={item.name} 
            link={item.link} 
            image={item.image} 
          />
        ))}
      </div>
    </div>
  )
}
