"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { config } from "@/config";
import useComponentVisible from "./hooks/useComponentVisible";

export default function Navbar() {
  const currentPathname = usePathname();

  const {
    ref: aboutDropdownRef,
    isComponentVisible: isAboutDropdownVisible,
    setIsComponentVisible: setIsAboutDropdownVisible,
  } = useComponentVisible(false);

  const {
    ref: supportDropdownRef,
    isComponentVisible: isSupportDropdownVisible,
    setIsComponentVisible: setIsSupportDropdownVisible,
  } = useComponentVisible(false);

  const {
    ref: menuRef,
    isComponentVisible: isMenuVisible,
    setIsComponentVisible: setIsMenuVisible,
  } = useComponentVisible(false);

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownVisible(!isAboutDropdownVisible);
  };

  function handleAboutKeyDown(event: any) {
    if (event.keyCode === 13) {
      setIsAboutDropdownVisible(!isAboutDropdownVisible);
    }
  }

  const toggleSupportDropdown = () => {
    setIsSupportDropdownVisible(!isSupportDropdownVisible);
  };

  function handleSupportKeyDown(event: any) {
    if (event.keyCode === 13) {
      setIsSupportDropdownVisible(!isSupportDropdownVisible);
    }
  }

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="header" ref={menuRef}>
      <div className="navbar">
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/images/cloudbank_logo.webp"
            alt="CloudBank Logo"
            width={116}
            height={40}
          />
        </Link>

        <button className="navbar__btn" onClick={toggleMenu}>
          {!isMenuVisible ? (
            <Image
              src={"/images/icons/menu-button.svg"}
              width={25}
              height={25}
              alt=""
            />
          ) : (
            <Image
              src={"/images/icons/close-menu.svg"}
              width={25}
              height={25}
              alt=""
            />
          )}
        </button>

        <div className={`navbar__menu ${isMenuVisible ? "open" : ""}`}>
          <nav className="navbar__nav tablet-8:w-[400px] tablet-8:mr-10 lg:w-[502px] lg:mr-14 xl:mr-36">
            <Link
              href="/"
              className="navbar__nav-link home"
              onClick={closeMenu}
            >
              Home
            </Link>

            <div
              className="navbar__nav-dropdown"
              ref={aboutDropdownRef}
              onClick={toggleAboutDropdown}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => handleAboutKeyDown(event)}
            >
              <button className="navbar__nav-dropdown-btn">
                <span
                  className={`navbar__nav-link ${
                    currentPathname === "/how-we-protect-you" ||
                    currentPathname === "/board-of-trustees" ||
                    currentPathname === "/careers"
                      ? "active"
                      : ""
                  }`}
                >
                  About
                </span>
                <Image
                  src={"/images/icons/dropdown.svg"}
                  width={25}
                  height={25}
                  alt=""
                />
              </button>
              {isAboutDropdownVisible && (
                <div className="navbar__nav-dropdown-menu">
                  <Link
                    href="/how-we-protect-you"
                    className="navbar__nav-link"
                    onClick={closeMenu}
                  >
                    How we protect you
                  </Link>
                  <Link
                    href="/board-of-trustees"
                    className="navbar__nav-link"
                    onClick={closeMenu}
                  >
                    Board of Trustees
                  </Link>
                  <Link
                    href="/careers"
                    className="navbar__nav-link"
                    onClick={closeMenu}
                  >
                    Careers
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/products"
              className="navbar__nav-link"
              onClick={closeMenu}
            >
              Products
            </Link>

            <Link
              href="/library"
              className="navbar__nav-link"
              onClick={closeMenu}
            >
              Library
            </Link>

            <div
              className="navbar__nav-dropdown"
              ref={supportDropdownRef}
              onClick={toggleSupportDropdown}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => handleSupportKeyDown(event)}
            >
              <button className="navbar__nav-dropdown-btn">
                <span
                  className={`navbar__nav-link ${
                    currentPathname === "/faqs" ||
                    currentPathname === "/contact"
                      ? "active"
                      : ""
                  }`}
                >
                  Support
                </span>
                <Image
                  src={"/images/icons/dropdown.svg"}
                  width={25}
                  height={25}
                  alt=""
                />
              </button>
              {isSupportDropdownVisible && (
                <div className="navbar__nav-dropdown-menu">
                  <Link
                    href="/faqs"
                    className="navbar__nav-link"
                    onClick={closeMenu}
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/contact"
                    className="navbar__nav-link"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </div>
              )}
            </div>
          </nav>

          <div className="navbar__external">
            <Link
              href={`${config.WEB_APP_URL}/login`}
              className="navbar__external-link"
              target="_blank"
              rel="noreferrer"
            >
              Login
            </Link>

            <Link
              href={`${config.WEB_APP_URL}/register`}
              className="navbar__external-btn"
              target="_blank"
              rel="noreferrer"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
