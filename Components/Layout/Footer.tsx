import Link from "next/link";
import Image from "next/image";

import { socials } from "@/utils/socials";

export default function Footer() {
  return (
    <footer>
      <div className="container-custom">
        <div className="footer">
          <div className="footer__nav">
            <Link href="/products">Products</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/library">Library</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer__social">
            <a href={socials.facebook} target="_blank" rel="noreferrer">
              <Image
                src={"/images/icons/facebook.svg"}
                width={25}
                height={25}
                alt=""
              />
            </a>
            <a href={socials.instagram} target="_blank" rel="noreferrer">
              <Image
                src={"/images/icons/instagram.svg"}
                width={25}
                height={25}
                alt=""
              />
            </a>
            <a href={socials.twitter} target="_blank" rel="noreferrer">
              <Image
                src={"/images/icons/twitter.svg"}
                width={25}
                height={25}
                alt=""
              />
            </a>
          </div>

          <p className="footer__note">
            CloudBank is a wallet service system designed for instant payments
            processing, liquidity warehousing, lending, POS terminal services,
            trading and card services. Reconciliation of financial activities,
            account numbers and settlement provided by Shanono MFB LTD.
          </p>

          <p className="footer__note footer__award">
            2022 Most Convenient Fintech Payment Service {"("}West Africa{")."}{" "}
            AWARDED BY REPUTATION POLL INTERNATIONAL, AT REPUTABLE BANKS {"&"}{" "}
            FINTECH AWARDS 2022, GLASGOW, UNITED KINGDOM.
          </p>
          <p className="footer__copyright">
            Copyright © Cloud Bank {new Date().getFullYear()}. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
