import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavItem} from "./NavItem.jsx";
import {ROUTE} from "../../../routes/enums/route.js";
import {Sidebar, Tooltip} from 'flowbite-react';
import {HiOutlineMinusSm, HiOutlinePlusSm, HiShoppingBag} from "react-icons/hi";
import {twMerge} from "tailwind-merge";

export const Nav = () => {
  return (
    <Sidebar
      aria-label="Sidenav"
      className="fixed top-[calc(3rem+1px)] left-0 z-40 w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700"
    >
      <div className="overflow-y-auto py-5 px-3 h-full">
        <ul className="space-y-2">
          <li>
            <NavItem link={ROUTE.HOME} icon="dashboard" text="Dashboard"/>
          </li>
          <li>
            <Sidebar.Collapse
              icon={HiShoppingBag}
              label="E-commerce"
              renderChevronIcon={(theme, open) => {
                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])}/>;
              }}
            >
              <Sidebar.Item href="#">Products</Sidebar.Item>
              <Sidebar.Item href="#">Sales</Sidebar.Item>
              <Sidebar.Item href="#">Refunds</Sidebar.Item>
              <Sidebar.Item href="#">Shipping</Sidebar.Item>
            </Sidebar.Collapse>
          </li>
          <li>
            <NavItem link={ROUTE.PRICE} icon="money-bill-wave" text="Prices"/>
          </li>
          <li>
            <NavItem link={ROUTE.DOCS} icon="file" text="Docs"/>
          </li>
        </ul>
        <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
        <li>
            <NavItem link={ROUTE.TICKETS} icon="clipboard-list" text="Ticket" />
          </li>
        </ul>
        <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
            <NavItem link={ROUTE.DOCS} icon="clipboard" text="Docs" />
          </li>
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center p-4 space-x-4 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <Tooltip content="Admin" placement="top">
          <Link to={ROUTE.ADMIN} className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
            <FontAwesomeIcon icon="user-tie" />
          </Link>
        </Tooltip>
        <Tooltip content="Settings" placement="top">
          <Link to={ROUTE.SETTINGS} className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
            <FontAwesomeIcon icon="cog" />
          </Link>
        </Tooltip>
      </div>
    </Sidebar>
  );
};
