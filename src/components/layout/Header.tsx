import { ThemeSwitch } from "components/layout"

const Header = () => {
  return (
    <div className="sticky top-0 z-header flex w-full items-center justify-between bg-background-primary text-foreground-primary backdrop-blur-md">
        <p className="text-xl font-bold p-3">hobbescodes</p>
        <ThemeSwitch />
    </div>
  )
}

export default Header