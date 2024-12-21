import React from "react";
import {NavItem} from "./NavItem.jsx";
import {ROUTE} from "../../../routes/enums/route.js";
import {Badge, Sidebar} from 'flowbite-react';
import {NavFooter} from "./NavFooter";
import {useTranslator} from "../../providers/i18n";
import {useAppStore} from "../../stores/useAppStore";

export const Nav = ({isOpen}) => {
  const t = useTranslator();
  const {isSidebarOpen} = useAppStore();

  const {showDummyPages} = Meteor.settings.public;

  return (
    <>
      <Sidebar
        aria-label="Sidenav"
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="overflow-y-auto pt-16 px-3 h-full">
          <ul className="space-y-2">
            <li>
              <NavItem link={ROUTE.HOME} icon="house" text={t('Dashboard')}/>
            </li>
          </ul>
          <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <NavItem link={ROUTE.WALLET} icon="star" text={t('Wallet')}/>
            </li>
            <li>
              <NavItem link={ROUTE.STORES} icon="store" text={t('Stores')}/>
            </li>
            <li>
              <NavItem link={ROUTE.HELP} icon="life-ring" text={t('Help')}/>
            </li>
            <li>
              <NavItem link={ROUTE.ABOUT_US} icon="circle-info" text={t('About us')}/>
            </li>
          </ul>
          {showDummyPages ?
            <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
              <li>
                <NavItem link={ROUTE.DOCS} icon="clipboard" text={t('Documents')}/>
              </li>
              <li>
                <NavItem link={ROUTE.PRICE} icon="money-bill-wave" text={t('Prices')}/>
              </li>
              <li>
                <NavItem link={ROUTE.RSS_FEED_LIST} icon="rss" text="RSS"/>
              </li>
            </ul>
            : ''}

          <Sidebar.CTA>
            <div className="mb-3 flex items-center">
              <Badge color="warning">Beta</Badge>
            </div>
            <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
              Akıllı işletmelerin tercihi Ritapos tarafından geliştirilmektedir.
            </div>
            <a
              className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
              href="https://ritapos.com"
            >
              Ritapos
            </a>
          </Sidebar.CTA>
        </div>

        <NavFooter/>
      </Sidebar>
    </>
  );
};
