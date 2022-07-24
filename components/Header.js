import React from 'react'
import HeaderItems from './HeaderItems';
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon, InformationCircleIcon, ViewBoardsIcon } from '@heroicons/react/outline';

export default function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-8 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItems title="HOME" href='/' Icon={HomeIcon}/>
            <HeaderItems title="ABOUT_US" href='/about' Icon={InformationCircleIcon}/>
            <HeaderItems title="TRENDING" href='/trending' Icon={LightningBoltIcon}/>
            <HeaderItems title="VERIFIED" href='/trending' Icon={BadgeCheckIcon}/>
            <HeaderItems title="COLLECTION" href='/trending' Icon={CollectionIcon}/>
            <HeaderItems title="SEARCH" href='/trending' Icon={SearchIcon}/>
            <HeaderItems title="DASHBOARD" href='/dashboard' Icon={ViewBoardsIcon}/>
            <HeaderItems title="ACCOUNT" href='/trending' Icon={UserIcon}/>
        </div>
        <h1 className='text-4xl font-bold uppercase'>Daily News</h1>
    </header>
  )
}

