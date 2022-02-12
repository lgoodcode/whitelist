// Need to specify the IntersectionObserver window property
// https://stackoverflow.com/questions/57008341/jest-testing-react-component-with-react-intersection-observer
const IntersectionObserverMock = function () {
   return {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn()
   }
}

// Assign mock directly for it to detect methods
// https://stackoverflow.com/questions/67574691/jest-react-intersectionobserver-mock-not-working
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.IntersectionObserver = IntersectionObserverMock

export default IntersectionObserver
