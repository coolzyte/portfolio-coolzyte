import React from "react";
import Link from "next/link";
import "../../styles/main.scss";

class Header extends React.Component {
  render() {
    const title = this.props.title;
    return (
      <React.Fragment>
        <p>{title}</p>
        <p className="customClassFromFile">I am styled P element</p>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="/blogs">
          <a>Blog</a>
        </Link>
        <Link href="/cv">
          <a>CV</a>
        </Link>
        <style jsx>
          {`
            a {
              font-size: 20px;
              color: blue;
              text-decoration: none;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Header;
