import React from "./Header/page";
import Body from "./Body/page";
import Header from "./Header/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div className="flex-auto">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
