import React from "react";
import { AclMission } from "../../components/AclMission";
import { AgidInAction } from "../../components/AgidInAction";
import { AnchorBlock } from "../../components/AnchorBlock";
import { ArrowLink } from "../../components/ArrowLink";
import { ButtonBig } from "../../components/ButtonBig";
import { Datasets } from "../../components/Datasets";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { News } from "../../components/News";
import { ReleaseNotes } from "../../components/ReleaseNotes";
import { Icon6 } from "../../icons/Icon6";
import { Icon7 } from "../../icons/Icon7";
import { Icon8 } from "../../icons/Icon8";
import { Icon9 } from "../../icons/Icon9";
import "./style.css";

export const ElementHomePage = () => {
  return (
    <div className="element-home-page">
      <Header
        breadcrumbs="off"
        className="design-component-instance-node-2"
        quickSearchSearchGroupClassName="header-2-0"
        quickSearchSearchOverlapClassName="header-instance"
        version="MVP"
      />
      <div className="welcome">
        <div className="overlap-3">
          <img className="couple" alt="Couple" src="/img/couple.png" />
          <div className="context">
            <div className="div-2">
              <div className="text-wrapper-14">Program Data Portal</div>
              <h1 className="h-1">Welcome!</h1>
            </div>
            <p className="text-wrapper-15">
              Our country is full of aging adults, and we love to tell their stories through data. The Administration
              presents as the source for official data on programs.
            </p>
            <ButtonBig className="design-component-instance-node-2" state="default" text="Watch the Video" />
          </div>
        </div>
      </div>
      <AclMission className="design-component-instance-node-2" />
      <AnchorBlock
        className="design-component-instance-node-2"
        override={<Icon7 className="icon-4" />}
        pointsIcon={<Icon6 className="icon-4" />}
        pointsIcon1={<Icon8 className="icon-4" color="white" />}
        pointsIcon2={<Icon9 className="icon-4" color="#F0F0F0" />}
      />
      <div className="news-2">
        <div className="release-notes-2">
          <p className="release-notes-3">Center for Independent Living Release Notes</p>
          <div className="card">
            <div className="calendar">
              <div className="SEP-wrapper">
                <div className="SEP">SEP 23</div>
              </div>
              <div className="group-4">
                <div className="overlap-group-2">
                  <div className="text-wrapper-16">2023</div>
                </div>
              </div>
            </div>
            <div className="content-3">
              <p className="text-wrapper-17">Version 2.64: 2023 NSOAAP LTCOP</p>
              <p className="text-wrapper-18">
                This release featured the addition of the 14th National Survey of OAA Participants data. Survey data are
                available in the Custom Tables section of Administration. Additional information related to the data is
                available in the Data Files section of Administration.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="calendar">
              <div className="SEP-wrapper">
                <div className="SEP">SEP 23</div>
              </div>
              <div className="group-4">
                <div className="overlap-group-2">
                  <div className="text-wrapper-16">2023</div>
                </div>
              </div>
            </div>
            <div className="content-3">
              <p className="text-wrapper-17">Version 2.64: 2023 NSOAAP LTCOP</p>
              <p className="text-wrapper-18">
                This release featured the addition of the 14th National Survey of OAA Participants data. Survey data are
                available in the Custom Tables section of Administration. Additional information related to the data is
                available in the Data Files section of Administration.
              </p>
            </div>
          </div>
          <ReleaseNotes className="release-notes-archive" versionClassName="release-notes-instance" />
          <ArrowLink
            className="design-component-instance-node-2"
            iconClassName="arrow-link-9"
            text="View All Release Notes"
            viewAllProgramsClassName="arrow-link-8"
          />
        </div>
        <div className="left-content">
          <div className="title-recent-news">
            <div className="text-wrapper-19">Administration News &amp; Resources</div>
            <div className="recent-center-for">News / Briefs</div>
          </div>
          <div className="div-3">
            <News className="design-component-instance-node-2" image="right" />
            <News className="design-component-instance-node-2" image="right" img="/img/image-1.png" />
            <ArrowLink
              className="design-component-instance-node-2"
              iconClassName="arrow-link-11"
              text="View all News &amp; Resources"
              viewAllProgramsClassName="arrow-link-10"
            />
          </div>
        </div>
      </div>
      <div className="topics-FPO">
        <div className="left">
          <div className="title">
            <div className="text-wrapper-19">Topic Navigator</div>
            <div className="text-wrapper-20">Search by Topic</div>
          </div>
          <div className="flex-container">
            <div className="span-wrapper">
              <span className="text-wrapper-21">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis lectus eget nisi molestie,
                non porta augue.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis lectus
                eget nisi molestie, non porta augue.. <br />
              </span>
            </div>
            <div className="span-wrapper">
              <span className="text-wrapper-21">
                The Program Data Portal is an on-line query system based on related data files and surveys, and includes
                population characteristics from the Census Bureau for comparison purposes. Data Portal is an on-line
                query system based on related data files and surveys, and includes population characteristics from the
                Census Bureau for comparison purposes.
              </span>
            </div>
          </div>
          <ButtonBig className="design-component-instance-node-2" state="default" text="Search by Topic" />
        </div>
        <img className="image-2" alt="Image" src="/img/image-10.png" />
      </div>
      <div className="how-it-works">
        <div className="frame-15">
          <div className="div-2">
            <div className="text-wrapper-19">Custom Queries</div>
            <div className="text-wrapper-20">Data Explorer</div>
          </div>
          <p className="text-wrapper-22">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis lectus eget nisi molestie, non
            porta augue.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis lectus eget nisi
            molestie, non porta augue..
          </p>
          <ButtonBig className="design-component-instance-node-2" state="default" text="Create a Custom Table" />
        </div>
      </div>
      <div className="data-sets">
        <div className="content-4">
          <div className="column-2">
            <div className="div-3">
              <div className="title-2">
                <div className="text-wrapper-23">Source Data</div>
                <div className="text-wrapper-24">Data Sets</div>
              </div>
              <p className="an-explanation-of-2">
                <span className="text-wrapper-25">
                  An explanation of how to use the Data Products below. The Administration oversees Administration on
                  Aging (AoA) programs and conducts the National Survey of Older Americans Act (OAA) Participants.
                </span>
              </p>
              <ButtonBig
                className="design-component-instance-node-2"
                state="default"
                text="Learn More About Data Sets"
              />
            </div>
            <Datasets
              arrowLinkIconClassName="datasets-2"
              censusClassName="datasets-instance"
              state="default"
              text="American Community Survey (ACS) Special Tabulations on Aging"
            />
            <Datasets
              arrowLinkIconClassName="datasets-2"
              censusClassName="datasets-instance"
              state="default"
              text="American Community Survey (ACS) Demographic Data"
            />
          </div>
          <div className="column-3">
            <Datasets
              arrowLinkIconClassName="datasets-2"
              censusClassName="datasets-instance"
              state="default"
              text="Title III: State Performance Reports (SPR)"
            />
            <Datasets
              arrowLinkIconClassName="datasets-2"
              censusClassName="datasets-instance"
              state="default"
              text="Title VI:American Indian, Alaskan Native, and Native Hawaiian PPR"
            />
            <Datasets
              arrowLinkIconClassName="datasets-2"
              censusClassName="datasets-instance"
              state="default"
              text={
                <>
                  Title VII National Ombudsman
                  <br />
                  Reporting System (NORS)
                </>
              }
            />
          </div>
          <div className="column-3">
            <Datasets
              arrowLinkIconClassName="datasets-2"
              censusClassName="datasets-instance"
              state="default"
              text="Centers for Independent Living Program PPR"
            />
            <Datasets arrowLinkIconClassName="datasets-2" state="default" text="State Performance Reports (SPR)" />
            <Datasets
              arrowLinkIconClassName="datasets-2"
              censusClassName="datasets-instance"
              state="default"
              text="State Independent Living Services Program PPR"
            />
          </div>
        </div>
      </div>
      <div className="state-profile">
        <img className="US-map" alt="Us map" src="/img/us-map.png" />
        <div className="left-2">
          <div className="title">
            <div className="text-wrapper-19">State Data</div>
            <div className="text-wrapper-20">State Profiles</div>
          </div>
          <p className="text-wrapper-26">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis lectus eget nisi molestie, non
            porta augue.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis lectus eget nisi
            molestie, non porta augue..
          </p>
          <ButtonBig className="design-component-instance-node-2" state="default" text="Search by Topic" />
        </div>
      </div>
      <AgidInAction className="design-component-instance-node-2" />
      <Footer className="design-component-instance-node-2" />
    </div>
  );
};
