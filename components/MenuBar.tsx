'use client';

import Link from "next/link"
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
  export function MenubarDemo() {
    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              
              <Link href={'/'}>Home</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              
              <Link href={'/artists'}>Artists</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem >
              
            <Link href={'/onboard'}>Add Artist</Link>
            </MenubarItem>
            
           
        
           
          </MenubarContent>
        </MenubarMenu>


           
           
        
           
        
      </Menubar>
    )
  }
  