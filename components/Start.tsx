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
                      src="/img/tieciaayers.png"
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
                  <h2 className="text-center pt-3 mt-5 animated-text" style={{lineHeight:'63px'}}>
                    - Client experience -<br/>
                    predatory, poor communication, unprofessional<br/>
                    She aims to collect $11,550 in fees on a $33,000 out of court settlement. She sneakily sends an email claiming lawyer fees are not part of medical expenses, and sends a document to sign that says other wise.
                    She asked I come pick up the check, before she disclosed her total fees. This is all around unethical, predatory behavior.
                  </h2>
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

              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                <Image
                      src="/img/gpt1.jpeg"
                      alt="Image"
                      className="cs-zoom_item"
                      width='600'
                      height='600'
                      style={{borderRadius:'10px'}}
                      // onLoad={handleImageLoad}
                  />
                  <h2 className="text-center pt-3"> <span className="animated-text" style={{fontSize:'54px', lineHeight:'66px'}}>I DO NOT recommend her services</span></h2>
                </div>
              </div>
            </div>
          </section>

        </>
    )
}
export default Start;
