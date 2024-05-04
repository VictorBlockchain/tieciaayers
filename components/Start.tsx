import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
import axios from "axios";
import { Inter } from 'next/font/google'
import Modal from './Modal';

const Start = () => {
   
    return(
        <>
        
        <div className="cs-height_90 cs-height_lg_80"></div>
        <div className="cs-height_90 cs-height_lg_80"></div>
          <section>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                <Image
                      src="/img/home_1.png"
                      alt="Image"
                      className="cs-zoom_item"
                      width='600'
                      height='600'
                      style={{
                        borderRadius: '10px',
                        border: '3px solid #F8ADE6'  // Add white border
                    }}
                      // onLoad={handleImageLoad}
                  />
                  <h2 className="text-center pt-3"> <span className="animated-text" style={{fontSize:'54px', lineHeight:'66px'}}>Real Person <br/><br/>1st X post Meme <br/><br/>Launched within 10 mins on pump.fun<br/><br/>Girl Wif Merch&nbsp;</span></h2>
                </div>
              </div>
            </div>
          </section>
          <section className="container pt-5">
            <div className="container">
                                                  
              {/* <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                  <TikTokEmbed />
                </div>
              </div> */}
            
              <div className="row mt-1">
                <div className="col-lg-6 offset-lg-3">
                <h3 className="text-center animated-text">Tokenomics</h3>
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-6 offset-lg-3 ">
                  <p className="text-center animated-text" style={{fontSize:'33px', lineHeight:'54px'}}>Supply<br/><b>1,000,000,000</b><hr/>lp<br/> burned<hr/>2%<br/> supply burned<hr/>contract<br/>renounced<br/><span style={{fontSize:'17px'}}>DmLvpFjrD8F4MpSm2z5roiUKEtM2sumCz2R1mHNFR1UK</span></p>
                </div>
              </div>

              <div className="row mt-1">
                <div className="col-lg-6 offset-lg-3">
                <h3 className="text-center animated-text">She's Bad Ass!</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                <Image
                      src="/img/beerus_3.JPG"
                      alt="Image"
                      className="cs-zoom_item"
                      width='600'
                      height='600'
                      style={{borderRadius:'10px'}}
                      // onLoad={handleImageLoad}
                  />
                  <h2 className="text-center pt-3"> <span className="animated-text" style={{fontSize:'54px', lineHeight:'66px'}}>Girl Meme Season!</span></h2>
                </div>
              </div>
            </div>
          </section>

        </>
    )
}
export default Start;
