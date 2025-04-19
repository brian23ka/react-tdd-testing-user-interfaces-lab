
// src/__tests__/App.test.js
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App (Portfolio Home Page)", () => {
  it("renders a top‑level heading with the text `Hi, I'm YourName`", () => {
    render(<App />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /hi, i'm yourname/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders a profile image with appropriate alt text", () => {
    render(<App />);
    const img = screen.getByAltText(/portrait of yourname/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://example.com/your-photo.jpg");
  });

  it("renders a second‑level heading with the text `About Me`", () => {
    render(<App />);
    const subheading = screen.getByRole("heading", {
      level: 2,
      name: /about me/i,
    });
    expect(subheading).toBeInTheDocument();
  });

  it("renders a paragraph containing your biography", () => {
    render(<App />);
    const bio = screen.getByText(
      /i am a frontend developer with a passion for building/i
    );
    expect(bio).toBeInTheDocument();
  });

  it("includes a link to your GitHub profile", () => {
    render(<App />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/yourusername"
    );
  });

  it("includes a link to your LinkedIn profile", () => {
    render(<App />);
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://linkedin.com/in/yourusername"
    );
  });
});
