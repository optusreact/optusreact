import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

import Icon from '@material-ui/core/Icon';

import './footer.scss';

export default function Footer() {
	return ( 
        <div id="global_footer" role="contentinfo" aria-label="Page footer" class="ux-footer">
        <Grid container spacing={16}>
            <Grid item xs={12}>
                <div class="footer-container">
                    <div class="container">
                    <div class="row ">
                        <Grid container spacing={16}>
                            <Grid item xs={3}>
                                <div class="columns large-3 medium-6 small-12">
                                    <div id="simple-accordion-r-144" class="ux-simple-accordion ">
                                        <h5>My Optus</h5>
                                        <div id="r-144">
                                        <ul class="ux-top-bar-items left">
                                            <li><a class="inverted" href="//www.optus.com.au/shop/mobile/apps/my-optus-app" aria-label="My Optus App" role="link" target="_self">My Optus App</a></li>
                                            <li><a class="inverted" href="https://www.optus.com.au/for-you/entertainment/hype" aria-label="Hype" role="link" target="_self">Hype</a></li>
                                            <li><a class="inverted" href="https://sport.optus.com.au" aria-label="Optus Sport" role="link" target="_self">Optus Sport</a></li>
                                            <li><a class="inverted" href="https://yescrowd.optus.com.au" aria-label="Yes Crowd" role="link" target="_self">Yes Crowd</a></li>
                                            <li><a class="inverted" href="//www.optus.com.au/shop/support" aria-label="Support" role="link" target="_self">Support</a></li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={5}>
                                <div class="columns large-3 medium-6 small-12">
                                    <div id="simple-accordion-r-146" class="ux-simple-accordion ">
                                        <h5>Optus Guide</h5>
                                        <div id="r-146">
                                        <ul class="ux-top-bar-items left">
                                            <li><a class="inverted" href="/about/legal/privacy-and-security" aria-label="Privacy, Security and Safety" role="link" target="_self">Privacy, Security and Safety</a></li>
                                            <li><a class="inverted" href="http://www.optus.com.au/about/legal#link/legal/0" aria-label="Standard Agreement" role="link" target="_self">Standard Agreement</a></li>
                                            <li><a class="inverted" href="//www.optus.com.au/shop/cis" aria-label="Critical Information Summaries" role="link" target="_self">Critical Information Summaries</a></li>
                                            <li><a class="inverted" href="//www.optus.com.au/shop/usageguides" aria-label="Optus Usage Guidelines" role="link" target="_self">Optus Usage Guidelines</a></li>
                                            <li><a class="inverted" href="/about/legal/copyright" aria-label="Copyright" role="link" target="_self">Copyright</a></li>
                                            <li><a class="inverted" href="/about/inclusion-diversity/differing-abilities/disability-services" aria-label="Accessibility" role="link" target="_self">Accessibility</a></li>
                                            <li><a class="inverted" href="//www.optus.com.au/shop/devicewarrtechinfo" aria-label="Device Warranties" role="link" target="_self">Device Warranties</a></li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                        <Grid container spacing={16}>
                            <Grid item xs={6}>
                                <div class="row ">
                                    <div class="columns large-8 medium-12 small-12">
                                        <ul class="inline-list">
                                            <li><a class="inverted" href="https://www.optus.com.au/shop/stores" role="link" target="_self">Store Locator</a></li>
                                            <li><a class="inverted" href="https://www.optus.com.au/shop/support/answer/how-to-contact-optus?answerId=1371&amp;question=How%20to%20Contact%20Optus&amp;typeId=8" role="link" target="_self">Contact Us</a></li>
                                            <li><a class="inverted" href="https://www.singtel.com/about-us" role="link" target="_self">About Singtel</a></li>
                                            <li><a class="inverted" href="https://offer.optus.com.au/for-you/support/complaints1?sid=complaints:source:homepage" role="link" target="_self">Lodge a Complaint</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div class="columns large-4 medium-12 small-12"><span class="footer-text">© 2019 Singtel Optus Pty Limited</span></div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Grid>
        </Grid>
        </div>
    )

}