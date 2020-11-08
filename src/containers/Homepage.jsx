import React, { useEffect, useState } from 'react';

const query = `
{
  homepageCollection {
    items {
      headerText
      description1
      description2
      description3
      description4
    }
  }
}
`

export const Homepage = () => {
  const [page, setPage] = useState(null);
  
  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/ts1x993q12de/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 4jAC4tc_Z1Q7CMxOYCpeRgl9ZUhj2qhXBh28y3eqmoU",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setPage(data.homepageCollection.items[0]);
        });
    }, []);
  
  if (!page) {
      return "Loading...";
  }

  console.log('page',page);
    
  return (
    <div className="homepage">
      <div className="homepage__header-picture" />
      <div className="homepage__body">
        <div className="container">
          <div className="homepage__description-1">
            {page.description1}
          </div>
          <div className="homepage__description-2">
            {page.description2}
          </div>
        </div>
        <div className="homepage__picture" />
        <div className="container">
          <div className="homepage__description-3">
            {page.description3}
          </div>
          <div className="homepage__description-4">
            {page.description4}
          </div>
        </div>
      </div>
    </div>
  );
}
