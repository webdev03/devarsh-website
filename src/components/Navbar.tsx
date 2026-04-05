import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function MainNav() {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="mx-auto flex items-center justify-between gap-8 px-6 py-4">
        <a href="/" className="hover:font-light hover:tracking-wider">
          <span className="transition-all bg-linear-to-bl from-indigo-500 to-blue-400 bg-clip-text text-transparent">
            devarsh
          </span>
          .me
        </a>
        <NavigationMenu>
          <NavigationMenuList className="gap-x-2">
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">about</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/blog">blog</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/guestbook">guestbook</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact">contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
