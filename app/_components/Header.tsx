import { Section } from "./Section"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "./icons/GithubIcon"




export const Header = () => {
  return (
    <header className="sticky top-0">
      <Section className="flex items-baseline">

        <h1 className="text-lg font-bold text-primary">doréa-mokhtari.com</h1>
        <p className="text-lg text-muted">Développeuse Front End</p>

        <div className="flex-1" />
        <ul>
          <Button className="size-6">
            <GithubIcon size={16} className="text-foreground" />
          </Button>


        </ul>
      </Section>





    </header>
  )
}