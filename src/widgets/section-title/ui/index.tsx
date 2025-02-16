import { TitleSection } from "@/entities/title-section"
import { AllButton } from "@/features/all-button"

interface SectionTitleProps {
  title: string;
  path: string;
}

export const SectionTitle = ({ title, path }: SectionTitleProps) => {
  return (
    <TitleSection title={title}>
      <AllButton path={path}/>
    </TitleSection>
  )
}
