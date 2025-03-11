import Logo from "../logo";
import { Button } from "./button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";

const examplePropts = [
  "Czym zajnuje się IAESTE?",
  "Jakie są benefity z IAESTE?",
  "Jakie są wymagania do IAESTE?",
  "Jak wygląda rozmowa rekrutacyjna do do IAESTE?",
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pytania</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {examplePropts.map((prompt) => (
                <SidebarMenuItem key={prompt}>
                  <SidebarMenuButton className="w-full bg-[#edf2f5] hover:bg-[#e1ebf1] hover:cursor-pointer transistion justify-start truncate ">
                    {prompt}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
