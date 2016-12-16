export default {
	fetch(url) {
		return fetch('/api/' + url, {
			headers: {
				accept: "application/json",
				authorization: "Basic " + btoa("nick:Nicholson")
			}
		}).then(response => response.json())
		  .then(function(data) {
			  console.log(data);
			  return data;
		  })
	}
}