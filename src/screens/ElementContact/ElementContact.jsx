import React from "react";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "./style.css";

export const ElementContact = () => {
  return (
    <div className="element-contact">
      <div className="contact-wrapper">
        <div className="contact-2">
          <Header
            breadcrumbs="on"
            className="design-component-instance-node-4"
            navLinkText="Contact Us"
            quickSearchSearchGroupClassNameOverride="header-5"
            text="Home&nbsp;&nbsp;&gt; Contact"
            version="v-2"
          />
          <div className="left-wrapper">
            <div className="left-4">
              <div className="release-notes-data-wrapper">
                <h1 className="release-notes-data-2">Contact &amp; Support</h1>
              </div>
              <div className="p-wrapper">
                <p className="the-aging-2">
                  The Program Data Portal is an on-line query system based on related data files and surveys, and
                  includes population characteristics from the Census Bureau for comparison purposes. Data Portal is an
                  on-line query system based on related data files and surveys, and includes population characteristics
                  from the Census Bureau for comparison purposes.
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="frame-37">
              <p className="text-wrapper-45">Email feedback, requests and comments to:</p>
              <div className="text-wrapper-46">contact@gov.gov</div>
              <p className="text-wrapper-47">
                An Administration representative will read your message and respond to your email in 1-5 business days.
              </p>
            </div>
            <div className="frame-38">
              <div className="contact-partners">Contact &amp; Partners</div>
              <div className="contact-block">
                <div className="AGID-related">Administration Related Inquiries</div>
                <p className="text-wrapper-48">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio purus, placerat a euismod a,
                  fringilla in felis. Phasellus porta dui et magna pretium, sit amet venenatis lacus dictum.
                </p>
                <div className="text-wrapper-49">webaddress.gov</div>
                <a className="text-wrapper-50" href="mailto:email@addess.gov" rel="noopener noreferrer" target="_blank">
                  email@addess.gov
                </a>
                <div className="text-wrapper-50">(123) 456-7890</div>
              </div>
              <div className="contact-block">
                <div className="AGID-related">Administration</div>
                <p className="text-wrapper-48">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio purus, placerat a euismod a,
                  fringilla in felis. Phasellus porta dui et magna pretium, sit amet venenatis lacus dictum.
                </p>
                <div className="text-wrapper-49">webaddress.gov</div>
                <a className="text-wrapper-50" href="mailto:email@addess.gov" rel="noopener noreferrer" target="_blank">
                  email@addess.gov
                </a>
                <div className="text-wrapper-50">(123) 456-7890</div>
              </div>
              <div className="contact-block">
                <div className="AGID-related">Eldercare Locator</div>
                <p className="text-wrapper-48">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio purus, placerat a euismod a,
                  fringilla in felis. Phasellus porta dui et magna pretium, sit amet venenatis lacus dictum.
                </p>
                <div className="text-wrapper-49">eldercare.acl.gov</div>
                <div className="text-wrapper-50">email@address.gov</div>
                <div className="text-wrapper-50">800-677-1116</div>
              </div>
              <div className="contact-block">
                <div className="AGID-related">Census</div>
                <p className="text-wrapper-48">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio purus, placerat a euismod a,
                  fringilla in felis. Phasellus porta dui et magna pretium, sit amet venenatis lacus dictum.
                </p>
                <div className="text-wrapper-49">webaddress.gov</div>
                <div className="text-wrapper-50">eldercare.gov.gov</div>
                <div className="text-wrapper-50">800-677-1116</div>
              </div>
            </div>
          </div>
          <Footer
            className="design-component-instance-node-4"
            hasReturnToTop={false}
            icon={<ConcreteComponentNode icon="facebook" />}
            icon1={<ConcreteComponentNode icon="youtube" />}
            icon2={<ConcreteComponentNode icon="instagram" />}
            icon3={<ConcreteComponentNode icon="rss-feed" />}
            override={<ConcreteComponentNode icon="twitter" />}
          />
        </div>
      </div>
    </div>
  );
};
