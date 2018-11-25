



function hideSponsored(){
	const joblists= document.getElementById("resultsCol");
	const listings = joblists.querySelectorAll(".jobsearch-SerpJobCard");

	for(var i = 0; i< listings.length; i++){
		let listing = listings[i];
		let sponsoredTags = listings[i].getElementsByClassName("sponsoredGray");

		if(sponsoredTags.length>0)
			listing.style.display = "none";
	}

}



document.addEventListener("DOMContentLoaded", hideSponsored);