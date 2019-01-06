import React from "react";
import Link from "next/link";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/blogs">Blog</Link>
        <Link href="/cv">CV</Link>
      </React.Fragment>
    );
  }
}

export default Header;
