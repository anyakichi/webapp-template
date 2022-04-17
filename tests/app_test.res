open Jest
open Expect
open ReactTestingLibrary

let toMatchSnapshot = a => a |> Expect.toMatchSnapshot

describe("App", () => {
  beforeEach(() => {
    <App />->renderOnScreen
  })

  test("test title", () => {
    screen->getByRole(~matcher=#Str("heading"))->expect->toMatchSnapshot
  })
})
