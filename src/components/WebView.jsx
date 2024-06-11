/* eslint-disable react/prop-types */
import "../styles/webview.css";
import picture from '../../public/picture@2x.png'
const WebView = ({ className = "" }) => {
    const scrollToContent = (sectionId) => {
        const element = document.getElementById(sectionId);
        const offset = -10; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition + offset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      };
  return (
    <div className="webview-container">
    <div className={`aigen ${className}`}>
      <div className="divframer-uypth6-container" />
      <div className="divframer-1hts9ez-container">
        <div className="div" />
      </div>
      <div className="divframer-1iw6iys-container">
        <div className="div1" />
      </div>
      <div className="divframer-srcxx">
        <div className="divframer-1epq2kz">
          <div className="divframer-w7291o-container">
            <div className="div" />
          </div>
          <div className="divframer-127o87s-container">
            <div className="div3" />
          </div>
          <div className="div4" />
          <div className="divframer-1pzv6aw-container">
            <div className="div3" />
          </div>
        </div>
        <div className="section">
          <div className="divframer-1jld26h">
            <div className="div6" />
            <div className="div7" />
            <div className="div8" />
            <div className="div8" />
            <div className="jlej8rprduzxoo1osbzdpvxxcipng">
              <div className="column">
                <img className="picture-icon" alt="" src={picture} />
                <img className="picture-icon" alt="" src={picture} />
                <img className="picture-icon" alt="" src={picture} />
              </div>
              <div className="column1" id="ai-gen1">
                <img id="head"  className="picture-icon3" alt="" src={picture} />
                <img className="picture-icon4" alt="" src={picture} />
                <img className="picture-icon5" alt="" src={picture} />
              </div>
              <div className="column">
                <img className="picture-icon" alt="" src={picture} />
                <img className="picture-icon" alt="" src={picture} />
                <img className="picture-icon" alt="" src={picture} />
              </div>
            </div>
          </div>
          <div className="divframer-e9pjjs-container-parent">
            <div className="divframer-e9pjjs-container">
              <div className="link">
                <div className="divframer-mx0197">
                  <div className="divframer-gw1kdu">
                    <div className="get-started">🎉</div>
                    <div className="divframer-1ar07aq">
                      <div className="pframer-text">
                        <div id="feature" className="new-in-aigen">
                          New in AI.GEN: Real Time Interaction
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divframer-998n04" />
              </div>
            </div>
            <div className="frame-parent">
              <div className="divframer-qlxsmk-parent">
                <div className="divframer-qlxsmk">
                  <div className="divframer-qlxsmk">
                    <div className="heading-1">
                      <div  className="iota-polygon-serum">
                        IOTA polygon serum ipsum WAX terraUSD gala THETA.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divframer-gl3n0z">
                  <div className="pframer-text1">
                    <div className="chiliz-serum-tron">
                      Chiliz serum TRON dash aave cardano crypto celo. Golem
                      ankr bancor horizen ethereum quant bitcoin.
                    </div>
                  </div>
                </div>
              </div>
              <div className="divframer-rtwt46">
                <div className="divframer-1ar07aq">
                  <div className="button-large-button">
                    <img
                      className="beforemask-group-icon"
                      alt=""
                      src="/beforemaskgroup.svg"
                    />
                    <div className="divframer-u1rd7n" />
                    <div className="divframer-16octgt" />
                    <div className="divframer-1pea9t3">
                      <div className="divframer-1ar07aq">
                        <div className="pframer-text">
                          <div className="get-started">Get Started</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section1">
          <div className="divframer-1l8041i">
            <div className="jlej8rprduzxoo1osbzdpvxxcipng1">
              <div className="column3">
                <img className="picture-icon9" alt="" src={picture} />
                <img className="picture-icon9" alt="" src={picture} />
                <img className="picture-icon9" alt="" src={picture} />
              </div>
              <div className="column4">
                <img className="picture-icon12" alt="" src={picture} />
                <img className="picture-icon13" alt="" src={picture} />
                <img className="picture-icon14" alt="" src={picture} />
              </div>
              <div className="column5">
                <img className="picture-icon9" alt="" src={picture} />
                <img className="picture-icon9" alt="" src={picture} />
                <img className="picture-icon9" alt="" src={picture} />
              </div>
              <div className="column6">
                <img className="picture-icon18" alt="" src={picture} />
                <img className="picture-icon18" alt="" src={picture} />
                <img className="picture-icon14" alt="" src={picture} />
              </div>
              <div className="column7">
                <img className="picture-icon9" alt="" src={picture} />
                <img className="picture-icon9" alt="" src={picture} />
                <img className="picture-icon14" alt="" src={picture} />
              </div>
              <div className="column8">
                <img className="picture-icon9" alt="" src={picture} />
                <img className="picture-icon14" alt="" src={picture} />
                <img className="picture-icon14" alt="" src={picture} />
              </div>
              <div className="column9">
                <img className="picture-icon9" alt="" src={picture} />
                <img className="picture-icon9" alt="" src={picture} />
                <img className="picture-icon14" alt="" src={picture} />
              </div>
            </div>
            <div className="divframer-uzeirh">
              <div className="divframer-qlxsmk">
                <div className="heading-1">
                  <div className="create-customize-and-container">
                    <span className="create-customize-and-container1">
                      <span className="create-customize-and-publish">
                        <span className="create-customize-and">
                          Create, customize, and publish
                        </span>
                      </span>
                      <span>
                        <span className="create-customize-and-publish">{` `}</span>
                        <span>your digital persona to life effortlessly.</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="divframer-1aa0mnf">
            <img
              className="zzecgybwkakgld4hnledpz8lpcspn-icon"
              alt=""
              src="/zzecgybwkakgld4hnledpz8lpcspng@2x.png"
            />
          </div>
          <div className="divframer-6ambl6-container-parent">
            <div className="divframer-qlxsmk">
              <div className="divframer-15wvfku">
                <div className="divframer-nxjq7p">
                  <div className="divframer-qlxsmk">
                    <div className="divframer-qlxsmk">
                      <div className="select-an-avatar">Select an Avatar</div>
                    </div>
                  </div>
                  <div className="divframer-qlxsmk">
                    <div className="heading-22" />
                  </div>
                  <div className="divframer-qlxsmk">
                    <div className="heading-22" />
                  </div>
                </div>
                <div className="divframer-oov7dm">
                  <div className="divframer-qlxsmk">
                    <div className="divframer-qlxsmk">
                      <div className="how-it-works">How it works</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divframer-qlxsmk">
              <div className="divframer-15wvfku">
                <div className="divframer-nxjq7p">
                  <div className="divframer-qlxsmk">
                    <div className="divframer-qlxsmk">
                      <div className="create-or-generate">Select an Avatar</div>
                    </div>
                  </div>
                  <div className="divframer-qlxsmk">
                    <div className="divframer-qlxsmk">
                      <div className="create-or-generate">
                        Create or Generate Script
                      </div>
                    </div>
                  </div>
                  <div className="divframer-qlxsmk">
                    <div className="divframer-qlxsmk">
                      <div className="create-or-generate">Select AI Voices</div>
                      <div className="create-or-generate">Publish</div>
                    </div>
                  </div>
                </div>
                <div className="divframer-oov7dm1">
                  <div className="divframer-qlxsmk">
                    <div className="divframer-qlxsmk">
                      <div className="select-an-avatar2">Select an Avatar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-parent">
          <div className="section3">
            <img
              className="divframer-1g7h7v1mask-group-icon"
              alt=""
              src="/divframer1g7h7v1maskgroup.svg"
            />
          </div>
          <div className="divh1hcsln0b">
            <div className="div11">
              <div className="div12">
                <div className="divframer-bpfdy">
                  <div className="divframer-rgtuuz">
                    <div className="divframer-14p9i34">
                      <div className="divframer-tb33qq">
                        <div className="heading-3">
                          <div className="ai-outfits">
                            <p className="ai">AI</p>
                            <p className="ai">Outfits</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="divframer-151tcnb-container">
                      <img className="div-icon" alt="" src="/div.svg" />
                    </div>
                    <div className="divframer-ym3caf">
                      <div className="iqcslqmu6s3lakdixkj3osrybeepn">
                        <div className="iqcslqmu6s3lakdixkj3osrybeepn-child" />
                        <img
                          className="red-shoe-icon"
                          alt=""
                          src="/red-shoe@2x.png"
                        />
                      </div>
                    </div>
                    <div className="div13" />
                  </div>
                  <div className="divframer-rgtuuz1">
                    <div className="divframer-14p9i34">
                      <div className="divframer-tb33qq1">
                        <div className="heading-31">
                          <div className="ai-outfits">
                            <p className="ai">Realistic AI</p>
                            <p className="ai">Avatar</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="divframer-ym3caf">
                      <img
                        className="cj3scv4ralnnf6b194y2lyy3ykpng-icon"
                        alt=""
                        src="/cj3scv4ralnnf6b194y2lyy3ykpng@2x.png"
                      />
                    </div>
                    <div className="divframer-151tcnb-container1">
                      <div className="div14" />
                    </div>
                  </div>
                </div>
                <div className="divframer-bpfdy1">
                  <div className="divframer-1q5y23j">
                    <img
                      className="divframer-1wc2mr1-icon"
                      alt=""
                      src="/keyboard.png"
                    />
                    <div className="divframer-7r32as">
                      <div className="divframer-1x2ic5x">
                        <div className="heading-32">
                          <div className="ai-outfits">
                            Generate or Write your Script
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="divframer-1b13r57-container">
                      <div className="div15" />
                    </div>
                  </div>
                  <div className="divframer-1q5y23j1">
                    <img
                      className="divframer-1wc2mr1-icon"
                      alt=""
                      src="/divframer1wc2mr1@2x.png"
                    />
                    <div className="divframer-7r32as">
                      <div className="divframer-1x2ic5x1">
                        <div className="heading-33">
                          <div className="ai-outfits">
                            AI-Powered Voice Genrator
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="divframer-1b13r57-container">
                      <div className="div16" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scaliaapp-by-htmltodesign">
            <div className="divframer-exx6ut">
              <div className="heading-29">
                <div id="tokenomics" className="tokenomics">Tokenomics</div>
              </div>
            </div>
            <div className="frame-group">
              <div className="itemholder-parent">
                <div className="itemholder">
                  <div className="name">Name</div>
                  <div className="div17">:</div>
                  <div className="ai-gen">AI GEN</div>
                </div>
                <div className="itemholder1">
                  <div className="name">Token Name</div>
                  <div className="div17">:</div>
                  <div className="ai-gen">$AIGEN</div>
                </div>
                <div className="itemholder">
                  <div className="name">Total Supply</div>
                  <div className="div17">:</div>
                  <div className="ai-gen">1B</div>
                </div>
                <div className="itemholder1">
                  <div className="name">Circulating Supply</div>
                  <div className="div17">:</div>
                  <div className="ai-gen">1B</div>
                </div>
                <div className="itemholder">
                  <div className="name">Contract</div>
                  <div className="div17">:</div>
                  <div className="ai-gen">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
                <div className="itemholder1">
                  <div className="name">Chain</div>
                  <div className="div17">:</div>
                  <div className="ai-gen">Ethereum</div>
                </div>
              </div>
              <div className="tokenomics1">
                <div className="donut">
                  <img className="donut-child" alt="" src="/group-13@2x.png" />
                  <img className="donut-item" alt="" src="/group-18@2x.png" />
                  <div className="vector-parent">
                    <img className="group-child" alt="" src="/line-1.svg" />
                    <img className="group-item" alt="" src="/line-2.svg" />
                    <div className="bnb-lp-pool">BNB LP Pool (30%)</div>
                  </div>
                  <div className="vector-group">
                    <img className="group-inner" alt="" src="/line-21.svg" />
                    <div className="bnb-lp-pool">Burned (30%)</div>
                  </div>
                  <div className="vector-container">
                    <img className="line-icon" alt="" src="/line-11.svg" />
                    <img className="group-child1" alt="" src="/line-22.svg" />
                    <div className="lp-pool-35">LP Pool (35%)</div>
                  </div>
                  <div className="group-div">
                    <img className="group-child2" alt="" src="/line-23.svg" />
                    <div className="partnership-cex-wallet-container">
                      <p className="partnership">Partnership/</p>
                      <p className="ai">CEX Wallet (5%)</p>
                    </div>
                  </div>
                </div>
                <div className="holder-wrapper">
                  <div className="holder">
                    <div className="itemholder6">
                      <div className="itemholder-child" />
                      <div className="lp-pool">Partnership</div>
                      <div className="div23">:</div>
                      <div className="tokens">5% tokens</div>
                    </div>
                    <div className="itemholder6">
                      <div className="itemholder-item" />
                      <div className="lp-pool">LP Pool</div>
                      <div className="div23">:</div>
                      <div className="tokens">35% tokens</div>
                    </div>
                    <div className="itemholder6">
                      <div className="itemholder-inner" />
                      <div className="lp-pool">Burned</div>
                      <div className="div23">:</div>
                      <div className="tokens">30% tokens</div>
                    </div>
                    <div className="itemholder6">
                      <div className="rectangle-div" />
                      <div className="lp-pool">BNB LP Pool</div>
                      <div className="div23">:</div>
                      <div className="tokens">30% tokens</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section4">
            <div className="div-parent">
              <div className="div27" />
              <div className="div28" />
              <div className="div29" />
              <div className="div30" />
              <div className="div31" />
              <div className="div32" />
            </div>
            <div id="roadmap" className="divframer-exx6ut-parent">
              <div className="divframer-exx6ut">
                <div className="heading-29">
                  <div className="tokenomics">Roadmap</div>
                </div>
              </div>
              <div className="div33">
                <div className="divframer-fddg71">
                  <div className="divframer-nqjtsr">
                    <div className="divframer-bycwkx">
                      <div className="phase-1">PHASE 1</div>
                    </div>
                    <div className="pframer-text2">
                      <div className="horizen-dai-dai-container">
                        <ul className="horizen-dai-dai-harmony-dogeco">
                          <li className="horizen-dai-dai">{`Horizen dai dai harmony dogecoin waves nexo. `}</li>
                          <li className="horizen-dai-dai">{`Flow horizen waves dash tether zcash waves dash terraUSD. `}</li>
                          <li className="horizen-dai-dai">{`Quant harmony amp cosmos PancakeSwap decentraland decred. `}</li>
                          <li>
                            Serum TRON solana tether holo crypto. Flow eCash amp
                            EOS digibyte stellar.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <img
                    className="divframer-fs660q-icon"
                    alt=""
                    src="/divframerfs660q@2x.png"
                  />
                </div>
                <div className="divframer-fddg71">
                  <div className="divframer-nqjtsr">
                    <div className="divframer-bycwkx">
                      <div className="phase-2">PHASE 2</div>
                    </div>
                    <div className="pframer-text2">
                      <div className="horizen-dai-dai-container">
                        <ul className="horizen-dai-dai-harmony-dogeco">
                          <li className="horizen-dai-dai">{`BitTorrent dai dogecoin crypto nexo nexo cosmos tezos ox PancakeSwap. `}</li>
                          <li className="horizen-dai-dai">{`Tether ethereum helium eCash IOTA. Litecoin enjin shiba-inu dash audius monero. `}</li>
                          <li className="horizen-dai-dai">{`Aave PancakeSwap loopring horizen neo uniswap avalanche litecoin celsius TRON. `}</li>
                          <li>Hive stellar velas flow cardano.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="divframer-fs660q">
                    <img
                      className="tbp2bbcx80jprs6pki8ghijqy8png-icon"
                      alt=""
                      src="/4tbp2bbcx80jprs6pki8ghijqy8png@2x.png"
                    />
                  </div>
                </div>
                <div className="divframer-fddg71">
                  <div className="divframer-nqjtsr">
                    <div className="divframer-bycwkx">
                      <div className="phase-3">PHASE 3</div>
                    </div>
                    <div className="pframer-text2">
                      <div className="horizen-dai-dai-container">
                        <ul className="horizen-dai-dai-harmony-dogeco">
                          <li className="horizen-dai-dai">{`Revain audius bitcoin revain PancakeSwap elrond ipsum ethereum. `}</li>
                          <li className="horizen-dai-dai">{`Waves TRON dogecoin bancor eCash quant secret. `}</li>
                          <li>
                            Celsius crypto bancor nexo litecoin decentraland
                            crypto.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="divframer-fs660q1">
                    <img
                      className="pcuvucmvjxjc5kaupqngvzjs7xwpn-icon"
                      alt=""
                      src="/pcuvucmvjxjc5kaupqngvzjs7xwpng@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divframer-1h1cp3b-container">
            <div className="divframer-r7b853">
              <div className="divframer-1nzgqty">
                <div className="iqcslqmu6s3lakdixkj3osrybeepn">
                  <div className="column10">
                    <img
                      className="picture-icon30"
                      alt=""
                      src={picture}
                    />
                    <img
                      className="picture-icon30"
                      alt=""
                      src={picture}
                    />
                    <img
                      className="picture-icon30"
                      alt=""
                      src={picture}
                    />
                  </div>
                  <div className="column11">
                    <img
                      className="picture-icon33"
                      alt=""
                      src={picture}
                    />
                    <img
                      className="picture-icon34"
                      alt=""
                      src={picture}
                    />
                    <img
                      className="picture-icon35"
                      alt=""
                      src={picture}
                    />
                  </div>
                  <div className="column12">
                    <img
                      className="picture-icon30"
                      alt=""
                      src={picture}
                    />
                    <img
                      className="picture-icon30"
                      alt=""
                      src={picture}
                    />
                    <img
                      className="picture-icon30"
                      alt=""
                      src={picture}
                    />
                  </div>
                  <div className="column13">
                    <img
                      className="picture-icon39"
                      alt=""
                      src={picture}
                    />
                    <img
                      className="picture-icon39"
                      alt=""
                      src={picture}
                    />
                    <img
                      className="picture-icon35"
                      alt=""
                      src={picture}
                    />
                  </div>
                  <div className="column14">
                    <img
                      className="picture-icon30"
                      alt=""
                      src={picture}
                    />
                    <img
                      className="picture-icon30"
                      alt=""
                      src={picture}
                    />
                    <img
                      className="picture-icon35"
                      alt=""
                      src={picture}
                    />
                  </div>
                  <div className="column15">
                    <img
                      className="picture-icon30"
                      alt=""
                      src={picture}
                    />
                    <img
                      className="picture-icon35"
                      alt=""
                      src={picture}
                    />
                    <img
                      className="picture-icon35"
                      alt=""
                      src={picture}
                    />
                  </div>
                  <div className="column16">
                    <img
                      className="picture-icon30"
                      alt=""
                      src={picture}
                    />
                    <img
                      className="picture-icon30"
                      alt=""
                      src={picture}
                    />
                    <img
                      className="picture-icon35"
                      alt=""
                      src={picture}
                    />
                  </div>
                </div>
              </div>
              <div className="divframer-1gwo8ci">
                <div className="divframer-1viz2zm-container">
                  <div className="divframer-2krblo">
                    <div className="divframer-ngg8uo">
                      <div className="divframer-r60psv">
                        <div className="divframer-1ar07aq">
                          <div className="divframer-qlxsmk">
                            <div  className="get-started1">Get Started</div>
                          </div>
                        </div>
                        <div className="divframer-cyhhs-container">
                          <div className="divframer-1qs86n1">
                            <div className="img-arrow-right">
                              <img className="svg-icon" alt="" src="/svg.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="after" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divframer-163nfgj-container">
            <div className="footer">
              <div className="divframer-lnc0cs">
                <div className="div34" />
                <div className="div35" />
                <div className="div36" />
                <div className="div37" />
              </div>
              <div className="divframer-kmv9ba" />
              <div className="divframer-x1wu6w">
                <div className="divframer-1ar07aq">
                  <div className="link-superhuman">
                    <div className="divframer-bycwkx">
                      <div className="divframer-z4vd5x">
                        <div className="svg">
                          <div className="svg73477249-2635">
                            <div onClick={()=>scrollToContent('ai-gen1')} className="ai-gen1">AI. GEN</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divframer-1qxhbi0">
                  <div className="divframer-1ar07aq">
                    <div className="link-twitter">
                      <div className="divframer-19vryzr">
                        <div className="divframer-1mgz5am">
                          <div className="image-fill">
                            <img
                              className="image-icon"
                              alt=""
                              src="/image.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divframer-1ar07aq">
                    <div className="link-linkedin">
                      <div className="img-linkedin-logo">
                        <img className="svg-icon" alt="" src="/svg1.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="divframer-1ar07aq">
                    <div className="link-tiktok">
                      <img
                        className="link-twitter"
                        alt=""
                        src="/divframeri77715.svg"
                      />
                    </div>
                  </div>
                  <div className="divframer-1ar07aq">
                    <div className="link-tiktok">
                      <img
                        className="link-twitter"
                        alt=""
                        src="/divframerr4qrv9.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="divframer-vvubea">
                <div className="divframer-1ar07aq">
                  <div className="divframer-qlxsmk">
                    <div className="dash-dash-terrausd">
                      Dash dash terraUSD neo uniswap kadena helium avalanche
                      polymath bancor.
                    </div>
                  </div>
                </div>
                <div className="divframer-16n04og">
                  <div className="section-heading">Looking for help?</div>
                  <div className="section-form-input-searc-parent">
                    <div className="section-form-input-searc">
                      <div className="divplaceholder">
                        <div className="enter-your-email">Enter your Email</div>
                      </div>
                    </div>
                    <div className="section-form-button-sear">
                      <img
                        className="beforemask-group-icon1"
                        alt=""
                        src="/beforemaskgroup1.svg"
                      />
                      <div className="submit">Submit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="diveoze3f">
          <div className="nav">
            <div className="divframer-b31v7u">
              <div className="divframer-13lwmx1">
                <div className="divframer-1s63ybl">
                  <div onClick={()=>scrollToContent('head')} className="aigen2">AI.GEN</div>
                  <div className="divframer-z4tdp5">
                    <div className="divframer-1ar07aq">
                      <div className="pframer-text">
                        <div onClick={() => scrollToContent('feature')} className="get-started">Features</div>
                      </div>
                    </div>
                    <div className="divframer-bycwkx">
                      <div className="divframer-1ar07aq">
                        <div className="pframer-text">
                          <div onClick={() => scrollToContent('roadmap')} className="get-started">Roadmap</div>
                        </div>
                      </div>
                    </div>
                    <div className="divframer-bycwkx">
                      <div className="divframer-1ar07aq">
                        <div className="pframer-text">
                          <div onClick={() => scrollToContent('tokenomics')} className="get-started">Tokenomics</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divframer-1amgakg-parent">
                  <div className="divframer-bycwkx">
                    <div className="divframer-1ar07aq">
                      <div className="button-small-button">
                        <img
                          className="beforemask-group-icon2"
                          alt=""
                          src="/beforemaskgroup2.svg"
                        />
                        <div className="divframer-u1rd7n1" />
                        <div className="divframer-16octgt1" />
                        <div className="divframer-1pea9t31">
                          <div className="divframer-1ar07aq">
                            <div className="pframer-text1">
                              <div className="whitepaper">Whitepaper</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divframer-bycwkx">
                    <div className="divframer-1ar07aq">
                      <div className="button-small-button">
                        <img
                          className="beforemask-group-icon2"
                          alt=""
                          src="/beforemaskgroup3.svg"
                        />
                        <div className="divframer-u1rd7n2" />
                        <div className="divframer-16octgt2" />
                        <div className="divframer-1pea9t31">
                          <div className="divframer-1ar07aq">
                            <div className="pframer-text1">
                              <div className="whitepaper">Get Started</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WebView;
