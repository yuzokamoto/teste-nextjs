import Header from "../src/components/Header"
import { screen, render } from "@testing-library/react"

jest.mock("next/router", () => {
  return {
    useRouter: jest.fn()
  }
})

describe("Header", () => {
  test("Should render", () => {
    render(<Header />)

    const button = screen.getByText("Deslogar")

    expect(button).toBeInTheDocument()
  })
})