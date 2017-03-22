$('#twilight').html(`


	`);

setTimeout(function(){
	x();
},1000);

function x(){
$.ajax({
	url: "http://www.omdbapi.com/?t=hotel+transylvania"
}).done(function(res){
	console.log(res);
	let html =`
		
<center>
		<h3>Movie Trailer</h3>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/DSuXLbsdaEE" frameborder="0" allowfullscreen></iframe>
		<h1>Title:${res.Title}</h1>
		<img src="${res.Poster}"/>
		<h5>Year:${res.Year}</h5>
		<h5>Rated:${res.Rated}</h5>
		<h5>Released:${res.Released}</h5>
		<h5>Runtime:${res.Runtime}</h5>
		<h5>Genre:${res.Genre}</h3>
		<h5>Director:${res.Director}</h5>
		<h5>Writer:${res.Writer}</h5>
		<h5>Actors:${res.Actors}</h5>
		<h5>Plot:${res.Plot}</h3>
		<h5>Language:${res.Language}</h5>
		<h5>Country:${res.Country}</h5>
		<h5>Awards:${res.Awards}</h3>
		<h5>Metascore:${res.Metascore}</h5>
		<h5>imbdRating:${res.imbdRating}</h5>
		<h5>imdbVotes:${res.imdbVotes}</h5>
		<h5>imdID:${res.imdID}</h5>
		<h5>Type:${res.Type}</h5>
		<h5>Response:${res.Response}</h5>
		</center>

`
$('#twilight').html(html);


});

}