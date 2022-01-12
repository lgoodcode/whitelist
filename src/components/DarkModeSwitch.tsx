import { Switch } from '@headlessui/react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

interface DarkModeSwitchProps {
  darkMode: boolean
  setDarkMode: () => void
}

export default function DarkModeSwitch({
  darkMode,
  setDarkMode
}: DarkModeSwitchProps) {
  return (
    <div className="hidden lg:inline-flex">
      <Switch.Group>
        <div className="flex items-center">
          <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={`${
              darkMode ? 'bg-blue-600' : 'bg-gray-400'
            } relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            <span
              className={`${
                darkMode ? 'translate-x-6' : 'translate-x-0'
              } inline-block w-5 h-5 transform bg-white rounded-full transition-transform`}
            />
          </Switch>
          <Switch.Label className="ml-2">
            {darkMode ? (
              <BsMoonFill className="h-5 w-5 text-white" />
            ) : (
              <BsSunFill className="h-5 w-5 text-white" />
            )}
          </Switch.Label>
        </div>
      </Switch.Group>
    </div>
  )
}
