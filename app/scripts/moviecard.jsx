import React from 'react';

// stateless Moviecard Component
export const MovieCard = ({data, toggleFunction}) =>
<div className="moviecard" key={data.title}>
<p className="releasedate">{data.releaseDate.slice(6, 8)}.{data.releaseDate.slice(4, 6)}.{data.releaseDate.slice(0, 4)}</p>
<img src={data.urlPoster} onClick={()=>toggleFunction(data)}></img>
<div className= "infobox">
<p>{data.genres[0]}</p>
<a className="imdb" href={data.urlIMDB}>{data.rating}</a>
<span className={ data.metascore.slice(0, 2) > 50 ? 'fresh' : 'rotten' }>{data.metascore.slice(0, 2)}</span>
</div>
</div>;
