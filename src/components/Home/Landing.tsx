import { LoremIpsum } from 'lorem-ipsum'
import styled from 'styled-components'
import Button from '../Button'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 8,
    min: 6
  }
})

const StyledLanding = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  position: relative;
  background-position: revert;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
`

export default function Landing() {
  return (
    // Specify the url in the class for webpack to process
    <StyledLanding className="landing flex items-center bg-[url('/src/img/landing.jpg')]">
      {/* intro */}
      <div className="relative w-full px-4 xl:px-24 sm:top-14">
        <div className="px-8 py-4 rounded-2xl bg-raisinBlack sm:mt-24 md:max-w-lg md:mx-auto md:mt-0 xl:mx-0 xl:mt-16 xl:max-w-xl">
          <div className="text-left sm:text-center md:text-left">
            <div className="tracking-tight font-bold text-white text-4xl sm:text-5xl md:text-6xl">
              <h1 className="block 2xl:inline">Whitelist</h1>
              <h1 className="block text-sheenGold xl:inline">
                We Train Whales
              </h1>
            </div>
            <div className="sm:hidden lg:block">
              <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
                {lorem.generateSentences(3)}
              </p>
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <Button
                size="lg"
                className="py-4 text-lg bg-sheenGold w-full m-0 sm:w-auto"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="white"
                outlined
                className="py-4 text-lg w-full m-0 mt-4 sm:mt-0 sm:w-auto md:ml-4"
              >
                Live Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </StyledLanding>
  )
}
