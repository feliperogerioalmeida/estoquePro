"use client";

import { LayoutGridIcon, PackageIcon, ShoppingBasketIcon } from "lucide-react";
import { Sidebar, SidebarContent, SidebarHeader } from "./ui/sidebar";

import SidebarButton from "./sidebarButton";

const AppSidebar = () => {
  return (
    <Sidebar className="w-64 bg-white">
      <SidebarHeader className="px-8 py-6">
        <SidebarContent>
          <h1 className="text-primary text-center text-2xl font-bold">
            EstoquePRO
          </h1>
        </SidebarContent>
      </SidebarHeader>
      <SidebarContent className="gap-2 p-2">
        <SidebarButton href="/">
          <LayoutGridIcon size={20} />
          Dashboard
        </SidebarButton>
        <SidebarButton href="/products">
          <PackageIcon size={20} />
          Produtos
        </SidebarButton>

        <SidebarButton href="/sales">
          <ShoppingBasketIcon size={20} />
          Vendas
        </SidebarButton>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
