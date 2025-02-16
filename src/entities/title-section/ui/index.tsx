import { Title } from "@/shared/ui"

interface TitleSection {
  title: string;
  children?: React.ReactNode;
}

export const TitleSection = ({ title, children }: TitleSection) => {
  return (
    <div className="flex items-center justify-between">
      <Title text={title}></Title>
      {children}
    </div>
  )
}
