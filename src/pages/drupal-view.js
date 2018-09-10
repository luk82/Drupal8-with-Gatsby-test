import React from 'react'
import Link from 'gatsby-link'

const IntroText = () => (
  <div>
    <h1>Drupal > GraphQL > Gatsby</h1>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

const GetAllArticles = ({articles}) => (
  <div>
    <h1>Node List</h1>
    {console.log(articles)}
    { 
      articles.map(node => (
      <div key={node.id} className="node-content">
        {/* {console.log(node.title)}
        {console.log(node.body)} */}
        <h3>{ node.title }</h3>
        <div>{ node.body.value }</div>
      </div>
      ))
    }
  </div>
)

class ViewPage extends React.Component {

  render() {
    const data = this.props.data;
    console.log(data);
    const articles = data.allArticles.edges.map( edge => edge.node);
    console.log(articles);
    console.log(data.allArticles);

    return (
      <div>
        <IntroText />
        <GetAllArticles articles={articles}/>
      </div>
    );
  } 
}

export default ViewPage

export const viewQuery = graphql`
query GetView {
  allArticles {
  edges {
    node {
      id
      title
      body {
        value
      }
    }
  }
}
}
`