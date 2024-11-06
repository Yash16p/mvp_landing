import React from 'react';
import lagoon from './assets/Logomark.png'

const Abcd = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>ProductLaunch | Your Ultimate Destination for All Workplace Needs</title>
      <meta content="Run all your work on one platform with customizable products that scale with your needs." name="description" />
      <meta content="ProductLaunch | Your Ultimate Destination for All Workplace Needs" property="og:title" />
      <meta content="Run all your work on one platform with customizable products that scale with your needs." property="og:description" />
      <meta content="https://cdn.prod.website-files.com/663a4ddb8104cb2351eeadcc/663a4eaeb31fc8dadd16305a_Opengraph.webp" property="og:image" />
      <meta content="ProductLaunch | Your Ultimate Destination for All Workplace Needs" property="twitter:title" />
      <meta content="Run all your work on one platform with customizable products that scale with your needs." property="twitter:description" />
      <meta content="https://cdn.prod.website-files.com/663a4ddb8104cb2351eeadcc/663a4eaeb31fc8dadd16305a_Opengraph.webp" property="twitter:image" />
      <meta property="og:type" content="website" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="Webflow" name="generator" />
      <link href="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/css/lagoon-91d649.webflow.ed809b8b3.css" rel="stylesheet" type="text/css" />
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
      <link href="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210a53875af0dcf281d60d_Favicon.ico" rel="shortcut icon" type="image/x-icon" />
      <link href="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210a53875af0dcf281d60e_Favicon%20(1).ico" rel="apple-touch-icon" />{/* Keep this css code to improve the font quality*/}
      <link rel="stylesheet" href="style.css" />
      <style dangerouslySetInnerHTML={{ __html: "\n    * {\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      -o-font-smoothing: antialiased;\n    }\n  " }} />
      <div className="page-wrapper">
        <div className="global-styles w-embed">
          <style dangerouslySetInnerHTML={{ __html: "\n        /* Set color style to inherit */\n        .inherit-color * {\n          color: inherit;\n        }\n\n        /* Focus state style for keyboard navigation for the focusable elements */\n        *[tabindex]:focus-visible,\n        input[type=\"file\"]:focus-visible {\n          outline: 0.125rem solid #4d65ff;\n          outline-offset: 0.125rem;\n        }\n\n        /* Get rid of top margin on first element in any rich text element */\n        .w-richtext> :not(div):first-child,\n        .w-richtext>div:first-child> :first-child {\n          margin-top: 0 !important;\n        }\n\n        /* Get rid of bottom margin on last element in any rich text element */\n        .w-richtext>:last-child,\n        .w-richtext ol li:last-child,\n        .w-richtext ul li:last-child {\n          margin-bottom: 0 !important;\n        }\n\n        /* Prevent all click and hover interaction with an element */\n        .pointer-events-off {\n          pointer-events: none;\n        }\n\n        /* Enables all click and hover interaction with an element */\n        .pointer-events-on {\n          pointer-events: auto;\n        }\n\n        /* Create a class of .div-square which maintains a 1:1 dimension of a div */\n        .div-square::after {\n          content: \"\";\n          display: block;\n          padding-bottom: 100%;\n        }\n\n        /* Make sure containers never lose their center alignment */\n        .container-medium,\n        .container-small,\n        .container-large {\n          margin-right: auto !important;\n          margin-left: auto !important;\n        }\n\n        /* \n  Make the following elements inherit typography styles from the parent and not have hardcoded values. \n  Important: You will not be able to style for example \"All Links\" in Designer with this CSS applied.\n  Uncomment this CSS to use it in the project. Leave this message for future hand-off.\n  */\n        /*\n  a,\n  .w-input,\n  .w-select,\n  .w-tab-link,\n  .w-nav-link,\n  .w-dropdown-btn,\n  .w-dropdown-toggle,\n  .w-dropdown-link {\n    color: inherit;\n    text-decoration: inherit;\n    font-size: inherit;\n  }\n  */\n\n        /* Apply \"...\" after 3 lines of text */\n        .text-style-3lines {\n          display: -webkit-box;\n          overflow: hidden;\n          -webkit-line-clamp: 3;\n          -webkit-box-orient: vertical;\n        }\n\n        /* Apply \"...\" after 2 lines of text */\n        .text-style-2lines {\n          display: -webkit-box;\n          overflow: hidden;\n          -webkit-line-clamp: 2;\n          -webkit-box-orient: vertical;\n        }\n\n        /* Adds inline flex display */\n        .display-inlineflex {\n          display: inline-flex;\n        }\n\n        /* These classes are never overwritten */\n        .hide {\n          display: none !important;\n        }\n\n        @media screen and (max-width: 991px) {\n\n          .hide,\n          .hide-tablet {\n            display: none !important;\n          }\n        }\n\n        @media screen and (max-width: 767px) {\n          .hide-mobile-landscape {\n            display: none !important;\n          }\n        }\n\n        @media screen and (max-width: 479px) {\n          .hide-mobile {\n            display: none !important;\n          }\n        }\n\n        .margin-0 {\n          margin: 0rem !important;\n        }\n\n        .padding-0 {\n          padding: 0rem !important;\n        }\n\n        .spacing-clean {\n          padding: 0rem !important;\n          margin: 0rem !important;\n        }\n\n        .margin-top {\n          margin-right: 0rem !important;\n          margin-bottom: 0rem !important;\n          margin-left: 0rem !important;\n        }\n\n        .padding-top {\n          padding-right: 0rem !important;\n          padding-bottom: 0rem !important;\n          padding-left: 0rem !important;\n        }\n\n        .margin-right {\n          margin-top: 0rem !important;\n          margin-bottom: 0rem !important;\n          margin-left: 0rem !important;\n        }\n\n        .padding-right {\n          padding-top: 0rem !important;\n          padding-bottom: 0rem !important;\n          padding-left: 0rem !important;\n        }\n\n        .margin-bottom {\n          margin-top: 0rem !important;\n          margin-right: 0rem !important;\n          margin-left: 0rem !important;\n        }\n\n        .padding-bottom {\n          padding-top: 0rem !important;\n          padding-right: 0rem !important;\n          padding-left: 0rem !important;\n        }\n\n        .margin-left {\n          margin-top: 0rem !important;\n          margin-right: 0rem !important;\n          margin-bottom: 0rem !important;\n        }\n\n        .padding-left {\n          padding-top: 0rem !important;\n          padding-right: 0rem !important;\n          padding-bottom: 0rem !important;\n        }\n\n        .margin-horizontal {\n          margin-top: 0rem !important;\n          margin-bottom: 0rem !important;\n        }\n\n        .padding-horizontal {\n          padding-top: 0rem !important;\n          padding-bottom: 0rem !important;\n        }\n\n        .margin-vertical {\n          margin-right: 0rem !important;\n          margin-left: 0rem !important;\n        }\n\n        .padding-vertical {\n          padding-right: 0rem !important;\n          padding-left: 0rem !important;\n        }\n\n        /* Apply \"...\" at 100% width */\n        .truncate-width {\n          width: 100%;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n\n        /* Removes native scrollbar */\n        .no-scrollbar {\n          -ms-overflow-style: none;\n          overflow: -moz-scrollbars-none;\n        }\n\n        .no-scrollbar::-webkit-scrollbar {\n          display: none;\n        }\n      " }} />
        </div>
        <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="nav_component w-nav">
          <div className="padding-global">
            <div className="nav_container"><a href="#" className="nav_brand w-nav-brand"><img src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210bc28e2e48eae50c9772_logo%201.png" loading="lazy" alt="" className="nav_logo" /></a>
              <div className="nav_cta-wrapper hide-tablet hide-mobile-landscape hide-mobile-portrait"><a href="https://webflow.com/website/relume-library-styleguide" target="_blank" className="button is-secondary is-small w-inline-block">
                <div>Sign in</div>
              </a><a href="https://relume.io" target="_blank" className="button is-small w-inline-block">
                  <div>Start for free</div>
                </a></div>
              <div className="nav_button w-nav-button" style={{ WebkitUserSelect: 'text' }} aria-label="menu" role="button" tabIndex={0} aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
                <div className="icon-3 w-icon-nav-menu" />
              </div>
            </div>
          </div>
          <div className="w-nav-overlay" data-wf-ignore id="w-nav-overlay-0" />
        </div>
        <main className="main-wrapper">
          <header className="section_hero">
            <div className="hero_background">
              <div className="padding-global">
                <div className="spacer-xhuge" />
                <div id="w-node-_161d3373-905b-15b2-3336-4b8509622920-f281d5be" className="container-large">
                  <div id="w-node-_5c6fac5e-6002-3fbe-f5b3-89c33eb2c50f-f281d5be" className="hero_content align-center text-align-center">
                    <div className="margin-bottom margin-small">
                      <div className="heading_pill">
                        <div className="text-size-small text-weight-semibold text-color-secondary">AI Screening Platform</div>
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h1 className="heading-style-h1 text-effect-gradient">Your Own Google Form<br />For Hiring.</h1>
                    </div>
                    <div className="max-width-medium">
                      <p className="text-size-medium">With Lagoon collect, score and filter out candidates without touching
                        their resumes - simplifying screening to seconds.</p>
                    </div>
                    <div className="margin-top margin-medium">
                      <div className="wbs-cta-content">
                        <div className="wbs-subscribe w-form">
                          <form id="wf-form-Subscribe-form" name="wf-form-Subscribe-form" data-name="Subscribe form" method="get" className="wbs-subscribe-input-group" data-wf-page-id="67210a53875af0dcf281d5be" data-wf-element-id="41f92461-1b95-cc0d-32cc-707d8364fe1f" aria-label="Subscribe form"><input className="wbs-form-subscribe-input w-input" maxLength={256} name="Subscribe-Email-2" data-name="Subscribe Email 2" placeholder="Enter your Google Form URL" type="email" id="Subscribe-Email-2" required /><input type="submit" data-wait="Please wait..." className="wbs-button-subscribe w-button" defaultValue="Get started" /></form>
                          <div className="wbs-success-message w-form-done" tabIndex={-1} role="region" aria-label="Subscribe form success">
                            <div>Thank you! Your submission has been received!</div>
                          </div>
                          <div className="wbs-error-message w-form-fail" tabIndex={-1} role="region" aria-label="Subscribe form failure">
                            <div>Oops! Something went wrong while submitting the form.</div>
                          </div>
                        </div>
                      </div>
                      <div className="button-group"><a href="https://relume.io" target="_blank" className="button w-inline-block">
                        <div className="text-block">Get Started Now</div>
                      </a><a href="https://webflow.com/website/relume-library-styleguide" target="_blank" className="button is-alternate is-icon w-inline-block"><img src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210a53875af0dcf281d60f_player-play.webp" loading="lazy" alt="" className="icon-embed-xxsmall" />
                          <div className="text-block-2">Watch the Demo</div>
                        </a></div>
                    </div>
                  </div>
                  <div className="spacer-large" />
                  <div className="hero_image-wrapper align-center"><img src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210cce63f6018640cb32ef_Desktop%20-%202%20(1).png" loading="lazy" data-w-id="ab2a126a-6bad-ccb2-162a-5e6c18d1bb11" sizes="(max-width: 479px) 100vw, (max-width: 767px) 85vw, 86vw" alt="" srcSet="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210cce63f6018640cb32ef_Desktop%20-%202%20(1)-p-500.png 500w, https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210cce63f6018640cb32ef_Desktop%20-%202%20(1)-p-800.png 800w, https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210cce63f6018640cb32ef_Desktop%20-%202%20(1).png 1011w" className="hero_image" /></div>
                </div>
              </div>
            </div>
          </header>
          <section className="section_dashboard">
            <div className="padding-global-6">
              <div className="container-large-3">
                <div className="padding-section-large">
                  <div className="margin-bottom margin-xxlarge">
                    <div className="text-align-center">
                      <div className="max-width-large align-center">
                        <div className="heading_pill">
                          <div className="text-size-small text-weight-semibold text-color-secondary">The Magic</div>
                        </div>
                        <h2 className="heading-style-h2 text-effect-gradient">Simplifying your hours of
                          <br />screening to
                          seconds.</h2>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard_component">
                    <div className="dashboard_list-wrapper">
                      <div data-w-id="a1d95eff-8789-7862-f088-5c6c5739ef75"
                        style={{
                          transform: 'translate3d(0px, -1px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                          transformStyle: 'preserve-3d'
                        }} className="w-layout-grid dashboard_list">
                        <div className="dashboard_item">
                          <div className="dashboard_item-link shadow-xsmall">
                            <div className="dashboard_title-wrapper">
                              <div className="dashboard_item-content-top">
                                <div className="padding-bottom padding-xsmall">
                                  <h3 className="heading">Personalized Filters</h3>
                                </div>
                                <div className="padding-medium padding-bottom">
                                  <div className="text-size-regular-2">Tools for users to manage their account settings, profile
                                    information, and preferences easily.</div>
                                </div>
                              </div>
                            </div>
                            <div id="w-node-a1d95eff-8789-7862-f088-5c6c5739ef80-f281d5be" className="dashboard_image-wrapper">
                              <img sizes="(max-width: 479px) 100vw, (max-width: 767px) 85vw, (max-width: 991px) 39vw, 448px"
                                srcSet="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724783ea182f8d77e02f403_UL2-p-500.png 500w, https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724783ea182f8d77e02f403_UL2-p-800.png 800w, https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724783ea182f8d77e02f403_UL2-p-1080.png 1080w, https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724783ea182f8d77e02f403_UL2.png 1192w" alt="" src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724783ea182f8d77e02f403_UL2.png" loading="lazy" className="dashboard_image" />
                            </div>
                          </div>
                        </div>
                        <div className="dashboard_item">
                          <div className="dashboard_item-link shadow-xsmall">
                            <div className="dashboard_title-wrapper">
                              <div className="div-block">
                                <div className="dashboard_item-content-top">
                                  <div className="padding-bottom padding-xsmall">
                                    <h3 className="heading-2">Prompt-Driven Search</h3>
                                  </div>
                                  <div className="padding-medium padding-bottom">
                                    <div className="text-size-regular-2">A central hub where users can view and interact with
                                      key information, data, and functionalities relevant to their account.</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="w-node-a1d95eff-8789-7862-f088-5c6c5739ef8d-f281d5be" className="dashboard_image-wrapper">
                              <img sizes="(max-width: 479px) 100vw, (max-width: 767px) 85vw, (max-width: 991px) 39vw, 49vw"
                                srcSet="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724779367f044d12d341991_BR%202-p-500.png 500w,
                                  https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724779367f044d12d341991_BR%202-p-800.png 800w,
                                  https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724779367f044d12d341991_BR%202-p-1080.png 1080w,
                                   https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724779367f044d12d341991_BR%202-p-1600.png 1600w,
                                    https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724779367f044d12d341991_BR%202.png 1868w" alt=""
                                src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724779367f044d12d341991_BR%202.png" loading="lazy"
                                className="dashboard_image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-w-id="a1d95eff-8789-7862-f088-5c6c5739ef8f"
                        style={{
                          transform: 'translate3d(0px, -1px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                          transformStyle: 'preserve-3d'
                        }} className="w-layout-grid dashboard_list row-3">
                        <div className="dashboard_item">
                          <div className="dashboard_item-link shadow-xsmall">
                            <div className="dashboard_image-item-wrapper"><img sizes="(max-width: 479px) 100vw, (max-width: 767px) 85vw, (max-width: 991px) 39vw, 25vw" srcSet="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67247516f21982c098c41406_BL2-p-500.png 500w, https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67247516f21982c098c41406_BL2-p-800.png 800w, https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67247516f21982c098c41406_BL2-p-1080.png 1080w, https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67247516f21982c098c41406_BL2.png 1508w" alt="" src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67247516f21982c098c41406_BL2.png" loading="lazy" className="dashboard_image" /></div>
                            <div className="dashboard_title-wrapper">
                              <div className="dashboard_item-content-top">
                                <div className="padding-xsmall padding-vertical">
                                  <h3 className="heading-style-h4-2">AI Detection</h3>
                                </div>
                                <div className="text-size-regular-2">Generation of insightful reports and analytics to provide
                                  users with valuable insights into their usage patterns, performance metrics.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dashboard_item">
                          <div className="dashboard_item-link shadow-xsmall">
                            <div className="dashboard_image-item-wrapper"><img sizes="(max-width: 479px) 100vw, (max-width: 767px) 85vw, (max-width: 991px) 39vw, 25vw" srcSet="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724733d912f28c186c5a393_BC3-p-500.png 500w, https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724733d912f28c186c5a393_BC3-p-800.png 800w, https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724733d912f28c186c5a393_BC3-p-1080.png 1080w, https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724733d912f28c186c5a393_BC3.png 1488w" alt="" src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/6724733d912f28c186c5a393_BC3.png" loading="lazy" className="dashboard_image" /></div>
                            <div className="dashboard_title-wrapper">
                              <div className="dashboard_item-content-top">
                                <div className="padding-xsmall padding-vertical">
                                  <h3 className="heading-style-h4-2">Team Collaboration</h3>
                                </div>
                                <div className="text-size-regular-2">Responsive design and mobile-friendly interfaces to ensure
                                  usability across various devices and screen sizes.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dashboard_item">
                          <div className="dashboard_item-link shadow-xsmall">
                            <div className="dashboard_image-item-wrapper"><img sizes="(max-width: 479px) 100vw, (max-width: 767px) 85vw, (max-width: 991px) 39vw, 25vw" srcSet="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/672475e99ec6f0803f1a34c5_BR2-p-500.png 500w, https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/672475e99ec6f0803f1a34c5_BR2-p-800.png 800w, https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/672475e99ec6f0803f1a34c5_BR2-p-1080.png 1080w, https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/672475e99ec6f0803f1a34c5_BR2.png 1432w" alt="" src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/672475e99ec6f0803f1a34c5_BR2.png" loading="lazy" className="dashboard_image" /></div>
                            <div className="dashboard_title-wrapper">
                              <div className="dashboard_item-content-top">
                                <div className="padding-xsmall padding-vertical">
                                  <h3 className="heading-style-h4-2">Status Management</h3>
                                </div>
                                <div className="text-size-regular-2">Infrastructure and architecture designed to accommodate
                                  growing user demands and scale resources accordingly performance or reliability.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="margin-top margin-xlarge">
                      <div data-w-id="a1d95eff-8789-7862-f088-5c6c5739efb2"
                        style={{
                          transform: 'translate3d(0px, -1px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                          transformStyle: 'preserve-3d'
                        }} className="button-group-2 is-center">
                        <a href="#" className="button w-button">Get started</a><a href="#" className="button is-alternate w-button">Yes, let's get started!</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <header className="section_how-it-works">
            <div className="padding-global padding-section-large">
              <div id="w-node-_62cd2991-5830-f624-0ee0-c697d9dc77f0-f281d5be" className="container-large">
                <div id="w-node-_62cd2991-5830-f624-0ee0-c697d9dc77f1-f281d5be" className="how-it-works_content align-center text-align-center">
                  <div className="margin-bottom margin-small">
                    <div className="heading_pill">
                      <div className="text-size-small text-weight-semibold text-color-secondary">How it Works</div>
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2 className="heading-style-h2 text-effect-gradient">Shortlist your best candidates in
                      <br />3 simple
                      steps.</h2>
                  </div>
                  <p className="text-size-medium">Discover how ProductLaunch simplifies project management from start to finish.
                    Learn about setting up projects, tracking progress, and achieving successful outcomes with ease</p>
                </div>
                <div className="spacer-large" />
                <div className="how-it-works_grid">
                  <div className="how-it-works_card"><img src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210a53875af0dcf281d614_no..png" loading="lazy" alt="" className="icon-1x1-medium" />
                    <div className="spacer-small" />
                    <h4 className="heading-style-h4 text-color-secondary">Enter Form URL</h4>
                    <div className="spacer-small" />
                    <p className="text-size-medium">Start by sharing your Google Form URL with all the applications</p>
                  </div>
                  <div className="how-it-works_card"><img src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210a53875af0dcf281d613_no.-1.png" loading="lazy" alt="" className="icon-1x1-medium" />
                    <div className="spacer-small" />
                    <h4 className="heading-style-h4 text-color-secondary">Share Job Description</h4>
                    <div className="spacer-small" />
                    <p className="text-size-medium">Add a job description to personalize the scoring algorithm</p>
                  </div>
                  <div className="how-it-works_card"><img src="https://cdn.prod.website-files.com/67210a53875af0dcf281d52a/67210a53875af0dcf281d615_no.-2.png" loading="lazy" alt="" className="icon-1x1-medium" />
                    <div className="spacer-small" />
                    <h4 className="heading-style-h4 text-color-secondary">Filter and Finalize</h4>
                    <div className="spacer-small" />
                    <p className="text-size-medium">Filter the scored candidates based on your needs and shortlist the best
                      talent</p>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </main>
      </div>
      <section className="hero-without-image">
        <div className="container-2">
          <div className="hero-wrapper-two">
            <h1 className="head">You're just a click away<br />from your dream hire.</h1>
            <a href="#" className="button">Get Started</a>
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 py-2">
              <a
                href="#"
                className="text-[#E2FB6C] text-[9px] sm:text-[12px] hover:text-[#E2FB6C]/80 transition-colors no-underline"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-[#E2FB6C] text-[9px] sm:text-[12px] hover:text-[#E2FB6C]/80 transition-colors no-underline"
              >
                Say Hello
              </a>
              <span className="flex items-center gap-2">
                <img
                  src={lagoon}
                  alt="Lagoon"
                  className="h-5 sm:h-7 w-auto"
                />
                <span className="text-[#E2FB6C] text-lg sm:text-2xl">
                  Lagoon
                </span>
              </span>
              <a
                href="https://www.linkedin.com/company/lagoon-works/"
                className="text-[#E2FB6C] text-[9px] sm:text-[12px] hover:text-[#E2FB6C]/80 transition-colors no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-[#E2FB6C] text-[9px] sm:text-[12px] hover:text-[#E2FB6C]/80 transition-colors no-underline"
              >
                Privacy
              </a>
            </nav>

          </div>
        </div>
      </section>

    </div>
  );
}
export default Abcd;