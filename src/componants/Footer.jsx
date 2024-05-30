const date = new Date();
let currentYear = date.getFullYear();

export default function Footer() {
  return (
    <footer>
      <p>Copyright © {currentYear} </p>
    </footer>
  );
}
