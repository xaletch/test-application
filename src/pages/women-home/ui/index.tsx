import { CardShoes } from "@/app/types/global"
import { Container, Wrapper } from "@/shared/ui"
import { Navigation } from "@/widgets/navigation"
import { ProductSlider } from "@/widgets/product-slider"
import { SectionTitle } from "@/widgets/section-title"
import { Shoes } from "@/widgets/shoes"

const data = [
  {
    link: '#',
    name: 'Кроссовки и кеды',
    image: 'https://unicorngo.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsneakers.fa8d817f.jpg&w=1920&q=75',
  },
  {
    link: '#',
    name: 'Обувь для спорта',
    image: 'https://unicorngo.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsneakers.fa8d817f.jpg&w=1920&q=75',
  },
  {
    link: '#',
    name: 'Кастомные кроссовки',
    image: 'https://unicorngo.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsneakers.fa8d817f.jpg&w=1920&q=75',
  },
  {
    link: '#',
    name: 'Ботинки',
    image: 'https://unicorngo.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsneakers.fa8d817f.jpg&w=1920&q=75',
  },
  {
    link: '#',
    name: 'Тапки',
    image: 'https://unicorngo.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsneakers.fa8d817f.jpg&w=1920&q=75',
  },
  {
    link: '#',
    name: 'Сапоги',
    image: 'https://unicorngo.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsneakers.fa8d817f.jpg&w=1920&q=75',
  },
] as CardShoes[];

export const WomenHome = () => {
  return (
    <Container>
      <Wrapper>
        <Navigation />

        <div>
          <SectionTitle title={"Обувь"} path={"#"}/>
          <Shoes data={data}/>
        </div>

        <div>
          <SectionTitle title={"Только что купили"} path={"#"}/>
          <ProductSlider />
        </div>
      </Wrapper>
    </Container>
  )
}
