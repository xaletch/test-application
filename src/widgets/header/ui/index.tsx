import { Account } from "@/features/account"
import { HeaderItem } from "@/features/header-item"
import { SearchButton } from "@/features/search"
import { Container } from "@/shared/ui"
import { Link } from "react-router"

const header_list = [
  {
    path: '/',
    name: 'Распродажа'
  },
  {
    path: '/',
    name: 'Лукбук'
  },
  {
    path: '/',
    name: 'Обувь'
  },
  {
    path: '/',
    name: 'Одежда'
  },
  {
    path: '/',
    name: 'Аксессуары'
  },
  {
    path: '/',
    name: 'Оплата'
  },
  {
    path: '/',
    name: 'Доставка'
  },
  {
    path: '/',
    name: 'Отзывы'
  },
  {
    path: '/',
    name: 'Помощь'
  },
  {
    path: '/',
    name: 'Команда'
  },
  {
    path: '/',
    name: 'Магазин в москве'
  },
  {
    path: '/',
    name: 'Бренды'
  },
  {
    path: '/',
    name: 'Блог'
  },
]

export const Header = () => {
  return (
    <Container>
      <div className="px-3 py-2 flex justify-between items-center">
        <div className="flex gap-3 items-center flex-1">
          <Link to={'#'} className="font-bold">UNICORN</Link>

          <nav className="flex-1 overflow-x-auto no-scrollbar">
            <ul className="flex items-center gap-3 max-w-[120px]  whitespace-nowrap">
              {header_list.map((item, index) => (
                <HeaderItem key={index} {...item} />
              ))}
            </ul>
          </nav>

        </div>
        <div className="flex items-center gap-5 ml-3">
          <SearchButton />
          <Account />
        </div>
      </div>
    </Container>
  )
}
