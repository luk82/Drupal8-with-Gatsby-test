import React from 'react'
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.css';


const IndexPage = () => (
  <div>
    <h2>Drupal 8 > GraphQL > React - POC</h2>
    <p><Link to="/page-2/">Articles list</Link></p>
    <p><Link to="/drupal-view/">Drupal view</Link></p>
    <p><Link to="/file-list/">File list</Link></p>
  </div>
)

export default IndexPage
