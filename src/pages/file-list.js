import React from 'react'
import Link from 'gatsby-link'

const IntroText = () => (
  <div>
    <h1>Drupal > GraphQL > Gatsby</h1>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

const GetAllArticles = ({file_list}) => (
  <div>
    <h1>File List</h1>
    {console.log(file_list)}
    { 
      file_list.map(node => (
      <div key={node.id} className="node-content">
        {/* {console.log(node.title)}
        {console.log(node.body)} */}
        <h6>{ node.filename }</h6>
        <p>{ node.uri.url }</p>
      </div>
      ))
    }
  </div>
)


class FilesPage extends React.Component {

  render() {
    const data = this.props.data;
    console.log(data);
    const file_list = data.allFiles.edges.map( edge => edge.node);
    console.log(file_list);
    // console.log(data.allArticles);

    return (
      <div>
        <IntroText />
        <GetAllArticles file_list={file_list}/>
      </div>
    );
  } 
}


export default FilesPage

export const viewQuery = graphql`
query GetFiles {
  allFiles {
    edges {
      node {
        id
        filename
        uri {
          value
          url
        }
      }
    }
  }
}
`