import { ArrowIcon } from "@/shared/icons"
import { Button } from "@/shared/ui"
import { useNavigate } from "react-router"

export const AllButton = ({ path }: { path: string }) => {
  const navigation = useNavigate();

  return (
    <Button cl="flex text-sm font-medium items-center gap-1.5 rounded-2xl px-2.5 py-1 md:px-5 md:py-3.5 bg-[#efedec]" onClick={() => navigation(path)} type={"button"}>
      Все
      <span><ArrowIcon /></span>
    </Button>
  )
}
