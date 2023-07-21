import React from "react";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Icon } from "../../components/Icon";
import { Icon32 } from "../../icons/Icon32";
import "./style.css";

export const ElementReleaseNotes = () => {
  return (
    <div className="element-release-notes">
      <div className="release-notes-wrapper">
        <div className="release-notes-4">
          <Header
            breadcrumbs="on"
            className="header-7"
            navLinkText="Contact"
            quickSearchSearchGroupClassNameOverride="header-8"
            quickSearchSearchOverlapGroupClassName="header-6"
            text="Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Release Notes"
            version="v-2"
          />
          <div className="intro-2">
            <div className="left-5">
              <div className="div-7">
                <h1 className="state-profiles">Release Notes</h1>
              </div>
              <div className="the-program-data-wrapper">
                <p className="the-program-data-2">
                  The Program Data Portal is an on-line query system based on related data files and surveys, and
                  includes population characteristics from the Census Bureau for comparison purposes. Data Portal is an
                  on-line query system based on related data files and surveys, and includes population characteristics
                  from the Census Bureau for comparison purposes.
                </p>
              </div>
            </div>
          </div>
          <div className="topic-navigator">
            <div className="frame-39">
              <div className="release-notes-5">Search for Release Notes</div>
              <p className="text-wrapper-51">Use the filters below to find Release Notes.</p>
              <div className="frame-40">
                <div className="date-input">
                  <div className="text-input">
                    <div className="text-input-label">Start Data</div>
                    <div className="input" />
                  </div>
                  <div className="icon-instance-wrapper">
                    <Icon icon="calendar-today" />
                  </div>
                </div>
                <div className="date-input">
                  <div className="text-input">
                    <div className="text-input-label">End Data</div>
                    <div className="input" />
                  </div>
                  <div className="icon-instance-wrapper">
                    <Icon icon="calendar-today" />
                  </div>
                </div>
              </div>
              <div className="topic-filter">
                <div className="frame-41">
                  <div className="frame-41">
                    <div className="list">
                      <div className="topic-group">
                        <div className="topics-2">
                          <div className="check-label-info-3">
                            <img className="checkbox-2" alt="Checkbox" src="/img/checkbox-163.svg" />
                            <div className="state-independent">View All Release Notes</div>
                          </div>
                        </div>
                      </div>
                      <div className="topic-group">
                        <div className="topics-3">
                          <div className="check-label-info-3">
                            <img className="checkbox-2" alt="Checkbox" src="/img/checkbox.svg" />
                            <div className="state-independent-2">State Performance Reports (SPR)</div>
                            <ConcreteComponentNode icon="info-outline" />
                          </div>
                        </div>
                      </div>
                      <div className="topic-group">
                        <div className="topics-3">
                          <div className="check-label-info-3">
                            <img className="checkbox-2" alt="Checkbox" src="/img/checkbox-1.svg" />
                            <p className="text-wrapper-52">American Indian, Alaskan Native, and Native Hawaiian PPR</p>
                            <ConcreteComponentNode icon="info-outline" />
                          </div>
                        </div>
                      </div>
                      <div className="topic-group">
                        <div className="topics-3">
                          <div className="check-label-info-3">
                            <img className="checkbox-2" alt="Checkbox" src="/img/checkbox-1.svg" />
                            <p className="text-wrapper-52">National Ombudsman Reporting System (NORS)</p>
                            <ConcreteComponentNode icon="info-outline" />
                          </div>
                        </div>
                      </div>
                      <div className="topic-group">
                        <div className="topics-3">
                          <div className="check-label-info-3">
                            <img className="checkbox-2" alt="Checkbox" src="/img/checkbox-1.svg" />
                            <p className="text-wrapper-52">
                              National Survey of Older Americans Act Participants (NSOAAP)
                            </p>
                            <ConcreteComponentNode icon="info-outline" />
                          </div>
                        </div>
                      </div>
                      <div className="topic-group">
                        <div className="topics-3">
                          <div className="check-label-info-3">
                            <img className="checkbox-2" alt="Checkbox" src="/img/checkbox-1.svg" />
                            <p className="text-wrapper-52">American Community Survey (ACS) Demographic Data</p>
                            <ConcreteComponentNode icon="info-outline" />
                          </div>
                        </div>
                      </div>
                      <div className="topic-group">
                        <div className="topics-3">
                          <div className="check-label-info-3">
                            <img className="checkbox-2" alt="Checkbox" src="/img/checkbox-1.svg" />
                            <p className="text-wrapper-52">
                              American Community Survey (ACS) Special Tabulations on Aging
                            </p>
                            <ConcreteComponentNode icon="info-outline" />
                          </div>
                        </div>
                      </div>
                      <div className="topic-group">
                        <div className="topics-3">
                          <div className="check-label-info-3">
                            <img className="checkbox-2" alt="Checkbox" src="/img/checkbox-1.svg" />
                            <p className="text-wrapper-52">Centers for Independent Living Program PPR</p>
                            <ConcreteComponentNode icon="info-outline" />
                          </div>
                        </div>
                      </div>
                      <div className="topic-group">
                        <div className="topics-3">
                          <div className="check-label-info-3">
                            <img className="checkbox-2" alt="Checkbox" src="/img/checkbox-1.svg" />
                            <p className="text-wrapper-52">State Independent Living Services Program PPR</p>
                            <ConcreteComponentNode icon="info-outline" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-42">
              <div className="frame-43">
                <div className="types-and-sort">
                  <div className="text-wrapper-53">76 Results</div>
                  <div className="view">
                    <div className="results-filter">
                      <div className="check-label">
                        <div className="text-wrapper-54">List View</div>
                        <ConcreteComponentNode icon="list" />
                      </div>
                    </div>
                    <div className="check-label-wrapper">
                      <div className="check-label">
                        <div className="text-wrapper-55">Grid View</div>
                        <ConcreteComponentNode icon="grid-view" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sort-by">
                  <div className="text-wrapper-56">Sort by Type</div>
                  <ConcreteComponentNode icon="arrow-drop-up" />
                </div>
              </div>
              <div className="frame-44">
                <div className="column-4">
                  <div className="topic-card-grid">
                    <div className="frame-45">
                      <div className="div-7">
                        <div className="frame-46">
                          <div className="text-wrapper-57">Release Notes</div>
                          <p className="text-wrapper-58">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-59">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-47">
                        <div className="frame-46">
                          <div className="text-wrapper-60">Date</div>
                          <div className="text-wrapper-61">1/24/23</div>
                        </div>
                        <div className="frame-46">
                          <div className="text-wrapper-60">Data Set</div>
                          <div className="text-wrapper-61">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topic-card-grid">
                    <div className="frame-45">
                      <div className="div-7">
                        <div className="frame-46">
                          <div className="text-wrapper-57">Release Notes</div>
                          <p className="text-wrapper-58">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-59">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-47">
                        <div className="frame-46">
                          <div className="text-wrapper-60">Date</div>
                          <div className="text-wrapper-61">1/24/23</div>
                        </div>
                        <div className="frame-46">
                          <div className="text-wrapper-60">Data Set</div>
                          <div className="text-wrapper-61">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topic-card-grid">
                    <div className="frame-45">
                      <div className="div-7">
                        <div className="frame-46">
                          <div className="text-wrapper-57">Release Notes</div>
                          <p className="text-wrapper-58">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-59">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-47">
                        <div className="frame-46">
                          <div className="text-wrapper-60">Date</div>
                          <div className="text-wrapper-61">1/24/23</div>
                        </div>
                        <div className="frame-46">
                          <div className="text-wrapper-60">Data Set</div>
                          <div className="text-wrapper-61">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column-4">
                  <div className="topic-card-grid">
                    <div className="frame-45">
                      <div className="div-7">
                        <div className="frame-46">
                          <div className="text-wrapper-57">Release Notes</div>
                          <p className="text-wrapper-58">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-59">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-47">
                        <div className="frame-46">
                          <div className="text-wrapper-60">Date</div>
                          <div className="text-wrapper-61">1/24/23</div>
                        </div>
                        <div className="frame-46">
                          <div className="text-wrapper-60">Data Set</div>
                          <div className="text-wrapper-61">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topic-card-grid">
                    <div className="frame-45">
                      <div className="div-7">
                        <div className="frame-46">
                          <div className="text-wrapper-57">Release Notes</div>
                          <p className="text-wrapper-58">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-59">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-47">
                        <div className="frame-46">
                          <div className="text-wrapper-60">Date</div>
                          <div className="text-wrapper-61">1/24/23</div>
                        </div>
                        <div className="frame-46">
                          <div className="text-wrapper-60">Data Set</div>
                          <div className="text-wrapper-61">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topic-card-grid">
                    <div className="frame-45">
                      <div className="div-7">
                        <div className="frame-46">
                          <div className="text-wrapper-57">Release Notes</div>
                          <p className="text-wrapper-58">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-59">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-47">
                        <div className="frame-46">
                          <div className="text-wrapper-60">Date</div>
                          <div className="text-wrapper-61">1/24/23</div>
                        </div>
                        <div className="frame-46">
                          <div className="text-wrapper-60">Data Set</div>
                          <div className="text-wrapper-61">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column-4">
                  <div className="topic-card-grid">
                    <div className="frame-45">
                      <div className="div-7">
                        <div className="frame-46">
                          <div className="text-wrapper-57">Release Notes</div>
                          <p className="text-wrapper-58">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-59">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-47">
                        <div className="frame-46">
                          <div className="text-wrapper-60">Date</div>
                          <div className="text-wrapper-61">1/24/23</div>
                        </div>
                        <div className="frame-46">
                          <div className="text-wrapper-60">Data Set</div>
                          <div className="text-wrapper-61">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topic-card-grid">
                    <div className="frame-45">
                      <div className="div-7">
                        <div className="frame-46">
                          <div className="text-wrapper-57">Release Notes</div>
                          <p className="text-wrapper-58">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-59">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-47">
                        <div className="frame-46">
                          <div className="text-wrapper-60">Date</div>
                          <div className="text-wrapper-61">1/24/23</div>
                        </div>
                        <div className="frame-46">
                          <div className="text-wrapper-60">Data Set</div>
                          <div className="text-wrapper-61">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topic-card-grid">
                    <div className="frame-45">
                      <div className="div-7">
                        <div className="frame-46">
                          <div className="text-wrapper-57">Release Notes</div>
                          <p className="text-wrapper-58">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-59">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-47">
                        <div className="frame-46">
                          <div className="text-wrapper-60">Date</div>
                          <div className="text-wrapper-61">1/24/23</div>
                        </div>
                        <div className="frame-46">
                          <div className="text-wrapper-60">Data Set</div>
                          <div className="text-wrapper-61">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column-4">
                  <div className="topic-card-grid">
                    <div className="frame-45">
                      <div className="div-7">
                        <div className="frame-46">
                          <div className="text-wrapper-57">Release Notes</div>
                          <p className="text-wrapper-58">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-59">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-47">
                        <div className="frame-46">
                          <div className="text-wrapper-60">Date</div>
                          <div className="text-wrapper-61">1/24/23</div>
                        </div>
                        <div className="frame-46">
                          <div className="text-wrapper-60">Data Set</div>
                          <div className="text-wrapper-61">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topic-card-grid">
                    <div className="frame-45">
                      <div className="div-7">
                        <div className="frame-46">
                          <div className="text-wrapper-57">Release Notes</div>
                          <p className="text-wrapper-58">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-59">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-47">
                        <div className="frame-46">
                          <div className="text-wrapper-60">Date</div>
                          <div className="text-wrapper-61">1/24/23</div>
                        </div>
                        <div className="frame-46">
                          <div className="text-wrapper-60">Data Set</div>
                          <div className="text-wrapper-61">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topic-card-grid">
                    <div className="frame-45">
                      <div className="div-7">
                        <div className="frame-46">
                          <div className="text-wrapper-57">Release Notes</div>
                          <p className="text-wrapper-58">Version 2.64: 2023 NSOAAP LTCOP</p>
                        </div>
                        <p className="text-wrapper-59">
                          Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere,
                          Aliquam scelerisque fringilla diam.
                        </p>
                      </div>
                      <div className="frame-47">
                        <div className="frame-46">
                          <div className="text-wrapper-60">Date</div>
                          <div className="text-wrapper-61">1/24/23</div>
                        </div>
                        <div className="frame-46">
                          <div className="text-wrapper-60">Data Set</div>
                          <div className="text-wrapper-61">Special Tabulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="load-more">
                  <div className="text-wrapper-62">Load More</div>
                  <ConcreteComponentNode icon="expand-more" />
                </div>
              </div>
            </div>
          </div>
          <Footer
            className="footer-1920-instance"
            icon={<ConcreteComponentNode icon="facebook" />}
            icon1={<ConcreteComponentNode icon="youtube" />}
            icon2={<ConcreteComponentNode icon="instagram" />}
            icon3={<Icon32 className="icon-rss-feed" />}
            override={<ConcreteComponentNode icon="twitter" />}
            returnToTopClassName="footer-instance"
          />
        </div>
      </div>
    </div>
  );
};
