import React from 'react'
import google from "../../assets/google.png"
import slack from "../../assets/slack.png"
import atlassian from "../../assets/atlassian.png"
import dropbox from "../../assets/dropbox.png"
import shopify from "../../assets/shopify.png"
import "./brand.css"


const Brand = () => {
  return (
    <div className='gpt3__brand section__margin'>
      <div>
        <img src={google} alt='Google Image' />
      </div>
      <div>
        <img src={slack} alt='Slack Image' />
      </div>
      <div>
        <img src={atlassian} alt='Atlassian Image' />
      </div>
      <div>
        <img src={dropbox} alt='Dropbox Image' />
      </div>
      <div>
        <img src={shopify} alt='Shopify Image' />
      </div>
    </div>
  )
}

export default Brand