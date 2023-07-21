import React from "react";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Icon32 } from "../../icons/Icon32";
import { IconArrowForward } from "../../icons/IconArrowForward";
import "./style.css";

export const ElementDataExplorer = () => {
  return (
    <div className="element-data-explorer">
      <div className="data-explorer-states-wrapper">
        <div className="data-explorer-states">
          <Header
            breadcrumbs="on"
            className="design-component-instance-node-3"
            quickSearchSearchOverlapClassNameOverride="header-4"
            quickSearchSearchOverlapGroupWrapperClassName="header-3"
            text="Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Data Explorer"
            version="MVP"
          />
          <div className="frame-25">
            <img className="image-3" alt="Image" src="/img/image-5-1.png" />
            <div className="frame-26">
              <h1 className="text-wrapper-36">Data Explorer</h1>
              <p className="text-wrapper-37">Use the Filters on the left to create custom tables.</p>
            </div>
            <div className="frame-27">
              <div className="filter-set-horiz">
                <div className="data-filter-headings">
                  <div className="text-wrapper-38">Data Explorer</div>
                  <p className="text-wrapper-39">Use the filters to create a custom query.</p>
                </div>
                <div className="div-6">
                  <div className="data-filter-headings">
                    <div className="text-wrapper-40">Select Data Set</div>
                    <p className="use-the-filters-to">Use the filters to select a Data Set</p>
                  </div>
                  <div className="filter-horiz">
                    <div className="frame-28">
                      <div className="text-wrapper-41">Data Set(s)</div>
                      <div className="text-wrapper-41">[1]</div>
                    </div>
                    <ConcreteComponentNode icon="arrow-forward" />
                  </div>
                  <div className="frame-29">
                    <div className="topic">
                      <div className="data-element-name">State Performance Reports (SPR)</div>
                      <ConcreteComponentNode icon="close" />
                    </div>
                  </div>
                </div>
                <div className="div-6">
                  <div className="data-filter-headings">
                    <div className="text-wrapper-40">Select Years</div>
                    <p className="use-the-filters-to">Use the filters to select year(s)</p>
                  </div>
                  <div className="filter-horiz">
                    <div className="frame-28">
                      <div className="text-wrapper-41">Year(s)</div>
                      <div className="text-wrapper-41">[3]</div>
                    </div>
                    <ConcreteComponentNode icon="arrow-forward" />
                  </div>
                  <div className="frame-29">
                    <div className="topic-2">
                      <div className="data-element-name">2020</div>
                      <ConcreteComponentNode icon="close" />
                    </div>
                    <div className="topic-3">
                      <div className="data-element-name">2021</div>
                      <ConcreteComponentNode icon="close" />
                    </div>
                    <div className="topic-4">
                      <div className="data-element-name">2022</div>
                      <ConcreteComponentNode icon="close" />
                    </div>
                  </div>
                  <div className="frame-30">
                    <div className="text-wrapper-42">Clear Selections</div>
                  </div>
                </div>
                <div className="div-6">
                  <div className="data-filter-headings">
                    <div className="text-wrapper-40">Select States &amp; Territories</div>
                    <p className="use-the-filters-to">Use the filters to select States &amp; Territories</p>
                  </div>
                  <div className="filter-horiz-2">
                    <div className="text-wrapper-43">States &amp; Territories</div>
                    <IconArrowForward className="checkbox" color="#005EA2" />
                  </div>
                </div>
                <div className="frame-31">
                  <div className="button-big-icon">
                    <div className="play-the-video">Run Query</div>
                    <ConcreteComponentNode icon="linegraph" />
                  </div>
                  <div className="text-wrapper-44">Clear All Selections</div>
                </div>
              </div>
              <div className="options-hoirz">
                <div className="frame-32">
                  <ConcreteComponentNode icon="arrow-back" />
                  <div className="data-filter-headings-2">
                    <div className="data-explorer">Select Geographic Area</div>
                  </div>
                </div>
                <div className="frame-33">
                  <div className="filter-horiz-3">
                    <div className="year-s">National</div>
                    <IconArrowForward className="checkbox" color="#005EA2" />
                  </div>
                  <div className="filter-horiz-4">
                    <div className="text-wrapper-43">States &amp; Territories</div>
                    <IconArrowForward className="checkbox" color="#005EA2" />
                  </div>
                  <div className="filter-horiz-3">
                    <div className="year-s">Tribal Organizations by Name</div>
                    <IconArrowForward className="checkbox" color="#005EA2" />
                  </div>
                  <div className="filter-horiz-3">
                    <div className="year-s">Tribal Organizations by State</div>
                    <IconArrowForward className="checkbox" color="#005EA2" />
                  </div>
                </div>
              </div>
              <div className="options-hoirz-2">
                <div className="frame-32">
                  <ConcreteComponentNode icon="arrow-back" />
                  <div className="data-filter-headings-2">
                    <div className="data-explorer-2">Select States &amp; Territories</div>
                  </div>
                </div>
                <div className="frame-34">
                  <div className="frame-35">
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">United States (National Data)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">All States and Territories</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">All Territories</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <p className="state-name-2">Select All States and Territories</p>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Alabama (AL)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Alaska (AK)</div>
                      </div>
                    </div>
                    <div className="check-label-info-wrapper">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/selected-yes.svg" />
                        <div className="state-name-3">Arizona (AZ)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Arkansas (AR)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">California (CA)</div>
                      </div>
                    </div>
                    <div className="check-label-info-wrapper">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/selected-yes.svg" />
                        <div className="state-name-3">Colorado (CO)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Connecticut (CT)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Delaware (DE)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">District of Columbia (DC)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Florida (FL)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Georgia (GA)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Hawaii (HI)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Idaho (ID)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Illinois (IL)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Indiana (IN)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Iowa (IA)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Kansas (KS)</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-35">
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Kentucky (KY)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Louisiana (LA)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Maine (ME)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Maryland (MD)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Massachusetts (MA)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Michigan (MI)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Minnesota (MN)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Mississippi (MS)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Missouri (MO)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Montana (MT)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Nebraska (NE)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Nevada (NV)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">New Hampshire (NH)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">New Jersey (NJ)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">New Mexico (NM)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">New York (NY)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">North Carolina (NC)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">North Dakota (ND)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">North Dakota (ND)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Ohio (OH)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Oklahoma (OK)</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-35">
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Oregon (OR)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Pennsylvania (PA)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Rhode Island (RI)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">South Carolina (SC)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">South Dakota (SD)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Tennessee (TN)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Texas (TX)</div>
                      </div>
                    </div>
                    <div className="check-label-info-wrapper">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/selected-yes.svg" />
                        <div className="state-name-3">Utah (UT)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Vermont (VT)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Virginia (VA)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Washington (WA)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">West Virginia (WV)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Wisconsin (WI)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Wyoming (WY)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">American Samoa (AS)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Guam (GU)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Northern Mariana Islands (MP)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Puerto Rico (PR)</div>
                      </div>
                    </div>
                    <div className="topics">
                      <div className="check-label-info-2">
                        <img className="checkbox" alt="Checkbox" src="/img/checkbox-73.svg" />
                        <div className="state-name">Virgin Islands (VI)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-36">
                  <div className="text-wrapper-44">Clear Selections</div>
                  <div className="button-big-icon-2">
                    <div className="play-the-video">Confirm</div>
                    <ConcreteComponentNode icon="check" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer
            className="design-component-instance-node-3"
            hasReturnToTop={false}
            icon={<ConcreteComponentNode icon="facebook" />}
            icon1={<ConcreteComponentNode icon="youtube" />}
            icon2={<ConcreteComponentNode icon="instagram" />}
            icon3={<Icon32 className="icon-32" />}
            override={<ConcreteComponentNode icon="twitter" />}
          />
        </div>
      </div>
    </div>
  );
};
