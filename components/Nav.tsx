import React, { Component } from 'react'
import { useRouter } from 'next/router';
import { useEffect,useState} from 'react'
import { useSDK } from '@metamask/sdk-react';
import { preloader } from '../utils/main';
import { smoothScroll } from '../utils/main';
import { dynamicBackground } from '../utils/main';
import { useUser } from './UserContext';
import Link from 'next/link';
import Modal from './Modal';
interface NavProps {
  handleConnect: () => void; // Define the correct type for handleConnect
}
const Nav = ({}) => {
    
    const router = useRouter();
    const [isSellModalOpen, setIsSellModalOpen] = useState(false);
    
    useEffect(() => {
        // Call the preloader function
        //preloader();
        smoothScroll();
        dynamicBackground();
      
      }, []);

    
    return(
        <>
            <header className="cs-site_header cs-style1 cs-sticky-header cs-white_bg">
                <div className="cs-main_header">
                <div className="container-fluid">
                <div className="cs-main_header_in">
                <div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/" passHref>
                    <span className="animated-text" style={{fontSize:'33px', color:'#fff'}}>Tiecia Ayers</span>
                </Link>
                </div>
                <div className="cs-main_header_right">
                <div className="cs-nav_wrap">
                <div className="cs-nav_out">
                <div className="cs-nav_in">
                <div className="cs-nav">
                {/* <ul className="cs-nav_list">    
                <li style={{fontSize:'17px'}}><Link href="https://twitter.com/cutegirlwifhat" target='_blank' passHref>Twitter</Link></li>
                <li style={{fontSize:'17px'}}>
                <Link href="https://t.me/girlwif" passHref>
                  Telegram
                </Link>
                </li>
                <li style={{fontSize:'17px'}}><Link href="https://dexscreener.com/solana/ADyT83nM7jmwtyJHjbBhyp6Kbgby3Lwz38o7hXSDAEo2" target='_blank' passHref>Dex Screener</Link></li>
                </ul> */}
                <span className="cs-munu_toggle"><span></span></span>
                </div>
                </div>
                </div>
                </div>
                <div className="cs-header_btns_wrap">
                <div className="cs-header_btns">
                {/* {user && (
                  <div className="cs-header_icon_btn cs-center cs-mobile_search_toggle">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.5 18L13.875 14.375" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )} */}
                {/* {!user && (
                  <div className="cs-header_icon_btn cs-center cs-mobile_search_toggle" onClick={handleConnect}>
                      <i className="fa fa-plug"></i>
                  </div>
                )}
                {!user && (
                    <a href="#" className="cs-btn cs-style1" onClick={handleConnect}><span>Connect Wallet</span></a>
                )} */}
                {/* {user && (
                    <a href="#" className="cs-btn cs-style1" style={{
                      background: 'inear-gradient(116.85deg, #FC466B 0%, #3F5EFB 100%)',
                    }}><span></span></a>
                )} */}
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </header>
                {/* {isChainModalOpen &&  
                    <Modal onClose={handleCloseChainModal} title="Change Network">
                                <div className="cs-single_post">
                        <p>African Hyena Pets are minted in Binance Chain, please add or change your network to Binance Smart Chain in metamask<br/><br/>
                        </p>
                        <h4 className="text-center" style={{fontFamily: 'Comfortaa'}}>Benefits Of Binance Chain</h4>
                        <ul>
                        <li>This is the network used by the most populous regions in the world</li>
                        <li>Much cheaper gas fees</li>
                        </ul>
                    </div>
                    </Modal>
                }
                {isSellModalOpen &&  
                    <Modal onClose={handleCloseSellModal} title="Sell On NFTea">
                                <div className="cs-single_post">
                        <p>Sell or colateralize your Hyena Pet on NFTea.app, the platform designed for smart nfts<br/><br/>
                        </p>
                        <h4 className="text-center" style={{fontFamily: 'Comfortaa'}}>Wrap 2 NFTea</h4>
                        <p>Your Hyena Pet has it's own contract, to sell on NFTea head over the the mint section in your NFTea account and click wrap.</p>
                        <p><br/>When you wrap your pet, a new pet with it's own contract is minted on the NFTea platform. Your original pet is held in the NFTea contract until it's unwraped.</p>
                    </div>
                    </Modal>
                } */}
        </>
    )
}
    export default Nav;
