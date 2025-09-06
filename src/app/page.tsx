import Image from "next/image";

export default function Home() {
  return (
    <>
      <head>
        <title>Homepage</title>
        <meta name="description" content="This is the homepage" />
      </head>
      <header className={"header"}>
        <nav className={"navbar"}>
          <span className={"logo"}>MyWebsite</span>
          <div>
            <a
              style={{
                textDecoration: "none",
                color: "inherit",
                marginLeft: "10%",
              }}
              href="#men"
            >
              MEN
            </a>

            <a href="#women">WOMEN</a>
            <a href="#accessories">ACCESSORIES</a>
            <a href="#made_to_order">MADE TO ORDER</a>
            <a href="#login_register">LOGIN / REGISTER</a>
          </div>
        </nav>
      </header>
      <main className="main">
        <h1>Welcome</h1>
        <p>This is the homepage</p>
      </main>
      <footer className="bg-[#f1f1f1] text-center p-[1.5rem] text-[0.9rem] text-[#333]">
        <p>&copy; 2025 MyWebsite. All rights reserved.</p>
      </footer>
    </>
  );
}
