import React from 'react';
import { Layout, QueryResult } from '../components';
import { useQuery, gql } from "@apollo/client";
import TrackCard from '../containers/track-card';

const TRACKS = gql`
query Query {
  tracksForHome {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
  }
}
`; 
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
    return (<Layout grid>
        <QueryResult error={error} loading={loading} data={data} >
            {data?.tracksForHome?.map(track => {
                return <TrackCard key={track.id} track={track} />
            })}
        </QueryResult>
    </Layout>);
};

export default Tracks;
