import { NavigationButton } from '@/features/navigation'

export const Navigation = () => {
  return (
    <div className="max-w-full flex md:max-w-[300px] md:m-auto">
      <div className="p-1 rounded-2xl flex bg-[#efedec] flex-1">
        <NavigationButton text={"Мужчинам"} link={"/men-home"} />
        <NavigationButton text={"Женщинам"} link={"/women-home"} />
      </div>
    </div>
  )
}
