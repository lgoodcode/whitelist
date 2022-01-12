import { BsTelephone } from 'react-icons/bs'

export default function Footer(): JSX.Element {
  return (
    <footer className="container bg-raisinBlack tracking-wide">
      <div className="w-full pt-16 pb-6 px-4 text-sm text-center md:text-left fade-in">
        <div>
          <h1 className="text-3xl">Contact Us</h1>
          <div className="mt-4">
            <span className="text-base">
              <BsTelephone className="inline" /> (206)-432-5920
            </span>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 pb-4">
        <span>&copy; Whitelist LLC 2022</span>
      </div>
    </footer>
  )
}
