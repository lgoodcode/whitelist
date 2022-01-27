import type { NavItemProps } from 'routes'

const classNames = (...strings: string[]) => strings.join(' ')

interface MenuTypes {
   open: boolean
   navigation: NavItemProps[]
   onOutsideClick: () => void
}

export default function MobileMenu({
   open,
   navigation,
   onOutsideClick
}: MenuTypes): JSX.Element {
   return (
      <>
         <div
            className={classNames(
               'mobileMenu',
               open ? 'translate-x-0' : 'translate-x-full',
               'fixed h-full md:hidden bg-raisinBlack z-20 w-[60%] sm:w-[40%] top-0 right-0 px-8 duration-500'
            )}
         >
            <div className="flex flex-col mt-28 max-h-[75%] sm:mt-20 overflow-y-auto border-b-2">
               {navigation.map((item: NavItemProps) => (
                  <a
                     key={item.name}
                     href={item.href}
                     // className={classNames(
                     //   item.current
                     //     ? 'bg-gray-400/30 hover:bg-gray-400/40'
                     //     : 'hover:bg-gray-400/30',
                     //   'btn text-gray-100 hover:text-gray-200 flex'
                     // )}
                     // aria-current={item.current ? 'page' : undefined}
                  >
                     <div className="flex items-center text-white">
                        <item.icon />
                     </div>
                     <span className="ml-2">{item.name}</span>
                  </a>
               ))}
            </div>
         </div>
         <div
            onClick={onOutsideClick}
            className={classNames(
               'overlay',
               open ? 'opacity-50 visible' : 'opacity-0 invisible',
               'fixed w-full h-full z-10 bg-black transition-all duration-300'
            )}
         />
      </>
   )
}
