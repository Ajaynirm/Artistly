'use client';

import Link from "next/link"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
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
            
            <MenubarSeparator />
            <MenubarItem >
              
            <Link href={'/manager'}>Manager</Link>
            </MenubarItem>
        
           
          </MenubarContent>
        </MenubarMenu>


           
           
        
           
        
      </Menubar>
    )
  }
  