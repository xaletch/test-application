import { Button } from "@/shared/ui"
import { useLocation, useNavigate } from "react-router";

interface NavigationButtonProps {
  text: string;
  link: string;
}

export const NavigationButton = ({ text, link }: NavigationButtonProps) => {
  const navigation = useNavigate();
  const location = useLocation().pathname;

  const onClick = () => {
    navigation(link)
  }

  return (
    <Button cl={`w-full px-5 py-2.5 rounded-2xl ${location === link ? 'bg-white' : ''}`} type={"button"} onClick={onClick}>{text}</Button>
  )
}
