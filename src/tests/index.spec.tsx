import {
  render,
  screen,
  waitForElementToBeRemoved,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "App";
import nock from "nock";

nock("https://api.quotable.io").get("/random").reply(
  200,
  { content: "some content", author: "John Doe" },
  {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
  }
);

test("full app working", async () => {
  act(() => {
    render(<App />);
  });
  expect(screen.queryByText(/loading/i)).toBeInTheDocument();

  await waitForElementToBeRemoved(screen.queryByText(/loading/i));

  expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/some content/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/next quote/i));

  expect(screen.queryByText(/loading/i)).toBeInTheDocument();

  await waitForElementToBeRemoved(screen.queryByText(/loading/i));

  expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/some content/i)).toBeInTheDocument();
});
