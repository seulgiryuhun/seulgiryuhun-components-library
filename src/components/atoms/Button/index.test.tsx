// import { Button } from ".";
import { Button } from "src/components/atoms/Button";
import { render, screen } from "@testing-library/react";

test("버튼에 children이 문구로 보인다.", () => {
  render(<Button>붉은악마</Button>);
  const button = screen.getByRole("button", { name: "붉은악마" });
  expect(button).toBeInTheDocument();
});
