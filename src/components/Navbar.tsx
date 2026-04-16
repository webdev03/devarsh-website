import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function MainNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-8 px-6 py-4">
        <a href="/" className="hover:font-light hover:tracking-wider">
          <span className="bg-linear-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent transition-all">
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
              <NavigationMenuLink href="/guestbook">
                guestbook
              </NavigationMenuLink>
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
